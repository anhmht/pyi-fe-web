<template>
  <div :class="$style.root">
    <div class="container">
      <h1>User List</h1>
      <div :class="$style.user">
        <UserList />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import UserList from '~/components/pages/dashboard/user/UserList.vue'

export default Vue.extend({
  components: { UserList },
  name: 'DashboardUser',
  layout: 'dashboard'
})
</script>
<style lang="postcss" module>
.root {
  .user {
    background: #fff;
    border-radius: var(--radius-5);
    padding: var(--space);
    margin-top: var(--space-2x);
  }
}
</style>
