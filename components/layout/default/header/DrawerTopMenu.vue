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
      <i
        v-if="item.icon"
        :class="[item.icon, $style.icon]"
        aria-hidden="true"
      ></i
      >{{ item.name }}</el-menu-item
    >
  </el-submenu>
</template>

<script lang="ts">
import Vue from 'vue'
import { SubMenu } from '~/model/layout/header'
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
    displayName(): string {
      return this.name ? this.name : this.selected.name
    },
    subMenus(): SubMenu[] {
      return this.name
        ? this.data
        : this.data.filter((x) => x.id !== this.selected.id)
    }
  },
  methods: {
    handleClick(item: SubMenu): void {
      if (!this.name) {
        this.selected = item
      }
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
