<template>
  <div :class="$style.root">
    <main>
      <nuxt />
    </main>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({})
</script>

<style lang="postcss" module>
.root {
  .hidden {
    display: none;
  }
}
</style>

<style>
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

@media only screen and (max-width: 1600px) {
}

/************
2. 1440px
************/

@media only screen and (max-width: 1540px) {
}

/************
3. 1380px
************/

@media only screen and (max-width: 1380px) {
}

/************
3. 1280px
************/

@media only screen and (max-width: 1280px) {
}

/************
4. 1199px
************/

@media only screen and (max-width: 1199px) {
}

/************
5. 1024px
************/

@media only screen and (max-width: 1024px) {
}

/************
6. 991px
************/

@media only screen and (max-width: 991px) {
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

@media only screen and (max-width: 959px) {
}

/************
8. 880px
************/

@media only screen and (max-width: 880px) {
}

/************
9. 768px
************/

@media only screen and (max-width: 768px) {
}

/************
10. 767px
************/

@media only screen and (max-width: 767px) {
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

@media only screen and (max-width: 575px) {
}

/************
11. 539px
************/

@media only screen and (max-width: 539px) {
}

/************
12. 480px
************/

@media only screen and (max-width: 480px) {
}

/************
13. 479px
************/

@media only screen and (max-width: 479px) {
}

/************
14. 400px
************/

@media only screen and (max-width: 400px) {
}
</style>
