<template>
  <div :class="$style.root">
    <div :class="$style.wrapper">
      <h1>What are you looking for?</h1>
      <SearchInput :query.sync="search" />
      <div :class="$style.footer">
        <nuxt-link to="/category/women">Women</nuxt-link>
        <nuxt-link to="/category/men">Men</nuxt-link>
        <nuxt-link to="/category/accessories">Accessories</nuxt-link>
        <nuxt-link to="/category/home-living">Home & Living</nuxt-link>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import SearchInput from '~/components/pages/search/SearchInput.vue'
import { Product } from '~/model/product/product'

export default Vue.extend({
  components: { SearchInput },
  data(): {
    search: string
    result: Product[]
  } {
    return {
      search: '',
      result: []
    }
  },
  computed: {
    queryFilters(): string | undefined {
      return this.$route.query.text as string
    }
  },
  created() {
    this.search = this.queryFilters ? this.queryFilters : ''
    console.log(this.search)
  },
  methods: {
    searchKeyword(): void {}
  },
  watch: {
    search(value: string) {
      this.$router
        .replace({
          query: {
            text: value
          }
        })
        .catch((error: Error) => {
          if (error.name !== 'NavigationDuplicated') {
            throw error
          }
        })
    }
  }
})
</script>
<style lang="postcss" module>
.root {
  text-align: center;
  background: url('~/assets/images/search-page.png') no-repeat center center;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  .wrapper {
    width: 450px;
  }
  h1 {
    color: #fff;
  }

  .footer {
    display: flex;
    color: #fff;
    font-size: 1.4rem;
    margin-top: var(--space-2x);
    margin-bottom: 200px;
    a + a {
      margin-left: var(--space);
    }
  }
}
</style>
