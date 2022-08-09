<template>
  <el-submenu :class="$style.root" :index="id">
    <template slot="title" :class="$style.title">
      <span>{{ displayName }}</span>
    </template>
    <el-menu-item
      v-for="item in subMenus"
      :key="item.name"
      :class="$style.subMenu"
      @click="handleClick(item)"
    >
      <template v-if="item.icon">
        <i :class="[item.icon, $style.icon]" aria-hidden="true"></i
        >{{ item.name }}
      </template>

      <template v-else>
        {{ item.name }}
      </template>
    </el-menu-item>
  </el-submenu>
</template>

<script lang="ts">
import Vue from 'vue'
import { loggedInSubMenu, MENU_TYPE } from '~/mock/data/TopMenu'
import { SubMenu } from '~/model/layout/header'
import { User } from '~/model/user/user'
import { RootState } from '~/store/state'
export default Vue.extend({
  props: {
    data: {
      required: true,
      type: Array as () => SubMenu[]
    },
    id: {
      type: String,
      required: true
    },
    name: {
      type: String,
      default: null
    }
  },
  data(): {
    selected: SubMenu
  } {
    return {
      selected: this.data[0]
    }
  },
  computed: {
    currentUser(): User | null | undefined {
      return (this.$store.state as RootState).currentUser
    },
    displayName(): string {
      if (this.currentUser && this.name) {
        return `Welcome, ${this.currentUser.email}`
      }
      if (this.id === MENU_TYPE.LANGUAGE) {
        const locale = (this as any).$i18n.locale
        this.selected =
          this.data.find((item) => item.id === locale) || this.data[0]
      }
      if (this.id === MENU_TYPE.CURRENCY) {
        const currency = localStorage.getItem('currency') || 'usd'
        this.selected =
          this.data.find((item) => item.id === currency) || this.data[0]
      }
      return this.name ? this.name : this.selected.name
    },
    subMenus(): SubMenu[] {
      if (this.currentUser && this.name) {
        return loggedInSubMenu
      }
      return this.name
        ? this.data
        : this.data.filter((x) => x.id !== this.selected.id)
    }
  },
  methods: {
    handleClick(item: SubMenu): void {
      if (item.id === 'sign-out') {
        this.$authService.signOut()
        return
      }
      if (this.id === MENU_TYPE.LANGUAGE) {
        // locales
        ;(this as any).$i18n.setLocale(item.id)
        window.location.reload()
        return
      }
      if (this.id === MENU_TYPE.CURRENCY) {
        // currencies
        localStorage.setItem('currency', item.id)
        window.location.reload()
        return
      }
      if (!this.name) {
        this.selected = item
      } else {
        this.$router.push(item.link)
      }

      this.$emit('close')
    }
  }
})
</script>

<style lang="postcss" module>
.root {
  :global(.el-submenu__title) {
    color: #fff;
    &:hover {
      background-color: var(--color-primary-text);
      opacity: 0.5;
    }
  }
  .icon {
    margin-right: var(--space-1o2);
  }

  .subMenu {
    background: var(--color-primary-text);
    color: #fff;
    &:hover {
      opacity: 0.5;
    }
  }
}
</style>
