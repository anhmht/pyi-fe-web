<template>
  <div :class="$style.root">
    <div class="container">
      <el-row>
        <el-col :lg="24">
          <div :class="$style.logo">
            <nuxt-link to="/">
              <img src="~/assets/images/logo.png" width="80" />
            </nuxt-link>
          </div>
          <div :class="$style.nav">
            <MainNavMenu class="navbar_menu" :data="mainMenus" />
            <MainNavUser />
            <div
              class="hamburger_container"
              :class="$style.hamburger"
              @click="drawer = true"
            >
              <i class="fa fa-bars" aria-hidden="true"></i>
            </div>
          </div>
        </el-col>
      </el-row>
      <DrawerMainMenu :visible.sync="drawer" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import MainNavMenu from '~/components/layout/default/header/MainNavMenu.vue'
import MainNavUser from '~/components/layout/default/header/MainNavUser.vue'
import DrawerMainMenu from '~/components/layout/default/header/DrawerMainMenu.vue'
import { MainMenu } from '~/model/layout/header'
import { mainMenus } from '~/mock/data/MainMenu'

export default Vue.extend({
  components: {
    MainNavMenu,
    MainNavUser,
    DrawerMainMenu
  },
  data(): {
    mainMenus: MainMenu[]
    drawer: boolean
  } {
    return {
      mainMenus: mainMenus,
      drawer: false
    }
  },
  async fetch() {
    const categories = await this.$categoryService.getCategories()
    console.log(categories)
  },
  methods: {}
})
</script>

<style lang="postcss" module>
.root {
  width: 100%;
  background: #ffffff;
  box-shadow: 0 0 16px rgb(0 0 0 / 15%);
  position: relative;
  .logo {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }
  .nav {
    height: 100px;
    float: right;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    padding: 5px 10px;
  }
  .hamburger {
    margin-left: var(--space-2x);
    cursor: pointer;
    i {
      font-size: 2.4rem;
      color: var(-color-primary-text);
      transition: var(--transition-300);
    }
    &:hover {
      color: var(--color-secondary-text);
    }
  }
}
</style>
