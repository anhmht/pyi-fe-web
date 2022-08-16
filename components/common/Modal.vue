<template>
  <div :class="$style.root">
    <el-dialog
      width="90%"
      :visible.sync="modal.isOpen"
      :before-close="handleClose"
    >
      <component v-if="modal.name" :is="modal.name" :data="data" />
    </el-dialog>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Modal } from '~/model/common/common'
import { Mutations } from '~/store'
import { RootState } from '~/store/state'

export default Vue.extend({
  components: {
    'product-detail': () =>
      import('~/components/pages/product/ProductDetail.vue')
  },
  computed: {
    modal(): Modal {
      return (this.$store.state as RootState).modal
    },
    data(): any {
      return this.modal.data
    }
  },
  methods: {
    handleClose() {
      this.$store.commit(Mutations.TYPE.SET_MODAL, {
        isOpen: false,
        name: '',
        data: undefined
      })
    }
  }
})
</script>
<style lang="postcss" module>
.root {
}
</style>
