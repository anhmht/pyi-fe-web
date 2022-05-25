<template>
  <div>
    <Button> Trss</Button>
    <Tutorial />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Button } from 'element-ui'

export default Vue.extend({
  name: 'IndexPage',
  components: {
    Button
  }
})
</script>
