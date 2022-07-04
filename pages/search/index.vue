<template>
  <div :class="$style.root">
    <div :class="$style.wrapper">
      <!-- <div :class="$style.logo">
        <img src="~/assets/images/logo.png" width="80" />
      </div> -->
      <h1>What are you looking for?</h1>
      <el-autocomplete
        :class="$style.search"
        v-model="search"
        :fetch-suggestions="querySearch"
        placeholder="Type to search"
        :trigger-on-focus="false"
        @select="handleSelect"
      >
        <i slot="suffix" class="fa fa-search"></i>
      </el-autocomplete>
      <div :class="$style.footer">
        <nuxt-link to="/cateogry/women">Women</nuxt-link>
        <nuxt-link to="/cateogry/men">Men</nuxt-link>
        <nuxt-link to="/cateogry/accessories">Accessories</nuxt-link>
        <nuxt-link to="/cateogry/home-living">Home & Living</nuxt-link>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data(): {
    links: Object[]
    search: string
  } {
    return {
      links: [],
      search: ''
    }
  },
  methods: {
    querySearch(queryString, cb) {
      var links = this.links
      var results = queryString
        ? links.filter(this.createFilter(queryString))
        : links
      // call callback function to return suggestions
      cb(results)
    },
    createFilter(queryString) {
      return (link) => {
        return link.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0
      }
    },
    loadAll() {
      return [
        { value: 'vue', link: 'https://github.com/vuejs/vue' },
        { value: 'element', link: 'https://github.com/ElemeFE/element' },
        { value: 'cooking', link: 'https://github.com/ElemeFE/cooking' },
        { value: 'mint-ui', link: 'https://github.com/ElemeFE/mint-ui' },
        { value: 'vuex', link: 'https://github.com/vuejs/vuex' },
        { value: 'vue-router', link: 'https://github.com/vuejs/vue-router' },
        { value: 'babel', link: 'https://github.com/babel/babel' }
      ]
    },
    handleSelect(item) {
      console.log(item)
    }
  },
  mounted() {
    this.links = this.loadAll()
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
  .logo {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  h1 {
    color: #fff;
  }
  .search {
    width: 100%;
    margin-top: var(--space-2x);
  }
  :global(.el-input__suffix) {
    display: flex;
    align-items: center;
    right: var(--space);
    input {
      border-radius: 40px;
      height: 50px;
    }
  }
  :global(.el-input__inner) {
    border-radius: 40px;
    height: 50px;
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
