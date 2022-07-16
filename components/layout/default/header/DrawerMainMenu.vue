<template>
  <el-drawer
    :class="[$style.root]"
    append-to-body
    custom-class="drawer"
    :with-header="false"
    :visible.sync="visible"
    :before-close="close"
  >
    <div :class="$style.header">
      <i class="fa fa-times" aria-hidden="true" @click="close"></i>
    </div>
    <div :class="$style.body">
      <ul>
        <li
          :class="$style.menu"
          v-for="item in mainMenus"
          :key="item.uuid"
          @click="handleClick(item)"
        >
          <span> {{ item.name }}</span>
        </li>
      </ul>
      <el-row>
        <el-menu :class="$style.topMenu">
          <DrawerTopMenu
            v-for="item in topMenu"
            :key="item.uuid"
            :id="item.uuid"
            :name="item.name"
            :data="item.subMenus"
            @close="close"
          />
        </el-menu>
      </el-row>
    </div>
  </el-drawer>
</template>

<script lang="ts">
import Vue from 'vue'
import { MainMenu, TopMenu } from '~/model/layout/header'
import { mainMenus } from '~/mock/data/MainMenu'
import { topMenus } from '~/mock/data/TopMenu'
import DrawerTopMenu from '~/components/layout/default/header/DrawerTopMenu.vue'

export default Vue.extend({
  components: { DrawerTopMenu },
  props: {
    visible: {
      type: Boolean,
      required: true
    }
  },
  data(): {
    mainMenus: MainMenu[]
    topMenu: TopMenu[]
  } {
    return {
      mainMenus: mainMenus,
      topMenu: topMenus
    }
  },
  methods: {
    close(): void {
      this.$emit('update:visible', false)
    },
    handleClick(item: MainMenu): void {
      this.$router.push(item.url)
      this.close()
    }
  }
})
</script>

<style lang="postcss" module>
.root {
  :global(.el-drawer__body) {
    height: 100%;
    display: flex;
    flex-direction: column;
  }
  .header {
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding: var(--space);
    i {
      cursor: pointer;
      font-size: 2.4rem;
      color: var(-color-primary-text);
      transition: var(--transition-300);
      &:hover {
        color: var(--color-secondary-text);
      }
    }
  }
  .body {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .menu {
      vertical-align: middle;
      padding: 0 var(--space);
      span {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        color: var(--color-primary-text);
        font-weight: 500;
        height: 50px;
        line-height: 50px;
        font-size: 1.4rem;
        text-transform: uppercase;
        cursor: pointer;
        i {
          margin-left: var(--space-1o2);
        }
        &:hover {
          color: var(--color-secondary-text);
        }
      }
    }
    .menu + .menu {
      border-top: 1px solid var(--color-secondary-text);
    }
    .topMenu {
      background: var(--color-primary-text);
      border: none;
    }
  }
}
</style>
