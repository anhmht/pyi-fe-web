<template>
  <div :class="$style.root">
    <el-autocomplete
      :class="$style.search"
      v-model="search"
      :fetch-suggestions="querySearch"
      placeholder="Type to search"
      :trigger-on-focus="false"
      @select="handleSelect"
      @keyup.enter.native="handleSearch"
    >
      <i slot="suffix" class="fa fa-search"></i>
    </el-autocomplete>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    query: {
      type: String,
      default: ''
    }
  },
  data(): {
    links: Object[]
    search: string
  } {
    return {
      links: [],
      search: this.query
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
      this.$emit('update:query', item.value)
    },
    handleSearch() {
      this.$emit('update:query', this.search)
    }
  },
  mounted() {
    this.links = this.loadAll()
  }
})
</script>
<style lang="postcss" module>
.root {
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
}
</style>
