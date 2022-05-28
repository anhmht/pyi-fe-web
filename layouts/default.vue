<template>
  <div :class="$style.root">
    <Header />
    <main>
      <nuxt />
    </main>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Header from '~/components/layout/default/Header.vue'
export default Vue.extend({
  components: { Header }
})
</script>

<style lang="postcss" module>
.root {
  .hidden {
    display: none;
  }
}
</style>

<style>
.container {
  padding: 0 var(--space);
  margin-right: auto;
  margin-left: auto;
}
/******************************

[Table of Contents]

1. 1600px
2. 1440px
3. 1280px
4. 1199px
5. 1024px
6. 991px
7. 959px
8. 880px
9. 768px
10. 767px
11. 539px
12. 479px
13. 400px

******************************/

@media only screen and (--viewport-1600) {
}

/************
2. 1440px
************/

@media only screen and (--viewport-1440) {
}

/************
3. 1380px
************/

@media only screen and (--viewport-1380) {
}

/************
3. 1280px
************/

@media only screen and (--viewport-1280) {
}

/************
4. 1199px
************/

@media only screen and (--viewport-1199) {
}

/************
5. 1024px
************/

@media only screen and (--viewport-1024) {
}

/************
6. 991px
************/

@media only screen and (--viewport-991) {
  h1 {
    font-size: 48px;
  }
  h2 {
    font-size: 36px;
  }
  .top_nav {
    display: none;
  }
}

/************
7. 959px
************/

@media only screen and (--viewport-959) {
}

/************
8. 880px
************/

@media only screen and (--viewport-880) {
}

/************
9. 768px
************/

@media only screen and (--viewport-768) {
}

/************
10. 767px
************/

@media only screen and (--viewport-767) {
  h1 {
    font-size: 36px;
  }
  h2 {
    font-size: 24px;
  }
  h6 {
    font-size: 12px;
  }
}

/************
11. 575px
************/

@media only screen and (--viewport-575) {
}

/************
11. 539px
************/

@media only screen and (--viewport-539) {
}

/************
12. 480px
************/

@media only screen and (--viewport-480) {
}

/************
13. 479px
************/

@media only screen and (--viewport-479) {
}

/************
14. 400px
************/

@media only screen and (--viewport-400) {
}
</style>
