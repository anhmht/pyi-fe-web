<template>
  <div :class="[$style.root, 'top_nav']">
    <div class="container">
      <el-row>
        <el-col :md="12">
          <div :class="$style.left">
            free shipping on all u.s orders over $50
          </div>
        </el-col>
        <el-col :md="12">
          <div :class="$style.right">
            <ul>
              <TopNavSubMenu
                v-for="item in topMenu"
                :key="item.uuid"
                :name="item.name"
                :data="item.subMenus"
              />
            </ul>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { TopMenu } from '~/model/layout/header'
import { topMenus } from '~/mock/data/TopMenu'
import TopNavSubMenu from '~/components/layout/default/header/TopNavSubMenu.vue'

export default Vue.extend({
  components: { TopNavSubMenu },
  data(): {
    topMenu: TopMenu[]
  } {
    return {
      topMenu: topMenus
    }
  }
})
</script>

<style lang="postcss" module>
.root {
  width: 100%;
  height: 50px;
  background: var(--color-primary-text);
  color: var(--color-secondary-text);
}
.left {
  height: 50px;
  line-height: 50px;
  font-size: 1.3rem;
  text-transform: uppercase;
}
.right {
  display: flex;
  justify-content: flex-end;
}
</style>
