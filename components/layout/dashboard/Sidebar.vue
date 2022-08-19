<template>
  <div :class="$style.root">
    <el-menu
      :default-active="path"
      :class="$style.menu"
      :collapse="isCollapse"
      background-color="#404e67"
      text-color="#fff"
      router
    >
      <el-menu-item index="/dashboard">
        <i class="el-icon-s-data"></i>
        <span slot="title">dashboard</span>
      </el-menu-item>
      <el-menu-item index="/dashboard/user">
        <i class="el-icon-user-solid"></i>
        <span slot="title">User</span>
      </el-menu-item>
      <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-s-goods"></i>
          <span slot="title">Product</span>
        </template>
        <el-menu-item index="/dashboard/product">
          <i class="el-icon-coin"></i>
          <span slot="title">List</span>
        </el-menu-item>
        <el-menu-item index="/dashboard/category">
          <i class="el-icon-menu"></i>
          <span slot="title">Category</span>
        </el-menu-item>
        <el-menu-item index="/dashboard/color">
          <i class="el-icon-s-help"></i>
          <span slot="title">Color</span>
        </el-menu-item>
        <el-menu-item index="/dashboard/size">
          <i class="el-icon-c-scale-to-original"></i>
          <span slot="title">Size</span>
        </el-menu-item>
        <el-menu-item index="/dashboard/collection">
          <i class="el-icon-collection-tag"></i>
          <span slot="title">Collection</span>
        </el-menu-item>
      </el-submenu>
      <el-menu-item index="/dashboard/message">
        <i class="el-icon-message"></i>
        <span slot="title">Message</span>
      </el-menu-item>
      <el-menu-item index="/dashboard/order">
        <i class="el-icon-s-order"></i>
        <span slot="title">Order</span>
      </el-menu-item>
      <el-menu-item index="/dashboard/tracking">
        <i class="el-icon-truck"></i>
        <span slot="title">Tracking</span>
      </el-menu-item>
      <el-menu-item index="/dashboard/promotion">
        <i class="el-icon-s-promotion"></i>
        <span slot="title">Promotion</span>
      </el-menu-item>
      <el-menu-item index="/dashboard/article">
        <i class="el-icon-edit-outline"></i>
        <span slot="title">Article</span>
      </el-menu-item>
      <el-menu-item index="/dashboard/layout">
        <i class="el-icon-s-grid"></i>
        <span slot="title">Layout</span>
      </el-menu-item>
      <el-menu-item index="/dashboard/setting">
        <i class="el-icon-s-tools"></i>
        <span slot="title">Setting</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data() {
    return {
      isCollapse: false
    }
  },
  computed: {
    path(): string {
      return this.$route.path
    }
  }
})
</script>
<style lang="postcss" module>
.root {
  .menu {
    color: #fff;
    width: 100%;
    background-color: var(--color-bg-dashboard);
    box-sizing: content-box;
  }
  :global(.el-menu-item.is-active) {
    border-left: 3px solid;
  }
}
</style>
