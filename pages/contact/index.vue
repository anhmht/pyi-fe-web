<template>
  <div :class="$style.root">
    <div class="container">
      <el-row :class="$style.row">
        <el-col :md="12">
          <ContactInfo />
        </el-col>
        <el-col :md="12">
          <ContactForm />
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import ContactForm from '~/components/pages/contact/ContactForm.vue'
import ContactInfo from '~/components/pages/contact/ContactInfo.vue'

export default Vue.extend({
  components: { ContactInfo, ContactForm },
  name: 'ContactPage'
})
</script>
<style lang="postcss" module>
.root {
  margin-top: var(--space-4x);
  .row {
    display: flex;
  }
  @media only screen and (max-width: 991px) {
    .row {
      display: block;
    }
  }
}
</style>
