<template>
  <li :class="$style.root">
    <a :class="$style.menu" href="#">
      {{ displayName }}
      <i class="fa fa-angle-down"></i>
    </a>
    <ul :class="$style.selection">
      <li v-for="item in subMenus" :key="item.name">
        <nuxt-link v-if="name" :class="$style.link" :to="item.link">
          <i v-if="item.icon" :class="item.icon" aria-hidden="true"></i>
          {{ item.name }}
        </nuxt-link>
        <a v-else :class="$style.link" href="#" @click="handleClick(item)">
          {{ item.name }}
        </a>
      </li>
    </ul>
  </li>
</template>

<script lang="ts">
import Vue from 'vue'
import { SubMenu } from '~/model/layout/header'
export default Vue.extend({
  props: {
    data: {
      required: true,
      type: Array as () => SubMenu[]
    },
    name: {
      type: String,
      default: null
    }
  },
  data(): {
    selected: SubMenu
  } {
    return {
      selected: this.data[0]
    }
  },
  computed: {
    displayName(): string {
      return this.name ? this.name : this.selected.name
    },
    subMenus(): SubMenu[] {
      return this.name
        ? this.data
        : this.data.filter((x) => x.id !== this.selected.id)
    }
  },
  methods: {
    handleClick(item: SubMenu): void {
      if (!this.name) {
        this.selected = item
      }
    }
  }
})
</script>

<style lang="postcss" module>
.root {
  display: inline-block;
  position: relative;
  min-width: 50px;
  padding: 0 var(--space);
  text-align: center;
  vertical-align: middle;
  background: var(--color-primary-text);
}
.selection {
  display: block;
  position: absolute;
  right: 0;
  top: 120%;
  margin: 0;
  width: 100%;
  background: #ffffff;
  visibility: hidden;
  opacity: 0;
  z-index: 1;
  box-shadow: 0 0 25px rgba(63, 78, 100, 0.15);
  transition: var(--transition-300);
  li {
    padding: 0 10px;
    line-height: 50px;
    &:last-child {
      .link {
        border-bottom: none;
      }
    }
  }
  &:hover {
    visibility: visible;
    opacity: 1;
    top: 100%;
  }
  .link {
    display: block;
    color: var(--color-link);
    border-bottom: solid 1px #dddddd;
    font-size: 1.3rem;
    transition: var(--transition-300);
    i {
      margin-right: var(--space-1o2);
    }
    &:hover {
      color: var(--color-secondary-text);
    }
  }
}
.menu {
  display: block;
  color: var(--color-secondary-text);
  font-weight: 400;
  height: 50px;
  line-height: 50px;
  font-size: 1.3rem;
  i {
    margin-left: var(--space-1o2);
  }
  &:hover {
    text-decoration: none;
    text-shadow: rgb(0 0 0 / 1%) 0 0 1px;
    + .selection {
      visibility: visible;
      opacity: 1;
      top: 100%;
    }
  }
}
</style>
