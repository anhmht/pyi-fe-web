<template>
  <div :class="$style.root">
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
        <SideBar :filter.sync="filter" />
      </div>
    </el-drawer>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Filter } from '~/model/category/category'
import SideBar from '~/components/pages/category/Sidebar/index.vue'

export default Vue.extend({
  components: { SideBar },
  props: {
    filter: {
      type: Object as () => Filter,
      required: true
    },
    visible: {
      type: Boolean,
      required: true
    }
  },
  methods: {
    close(): void {
      this.$emit('update:visible', false)
    }
  },
  watch: {
    filter: {
      handler() {
        this.close()
        this.$emit('update:filter', this.filter)
      },
      deep: true
    }
  }
})
</script>
<style lang="postcss" module>
.root {
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
    padding: 0 var(--space-2x);
    overflow-y: scroll;
    height: calc(100vh - 100px);
  }
}
</style>
