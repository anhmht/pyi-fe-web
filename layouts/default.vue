<template>
  <div :class="[$style.root, 'default']">
    <Header />
    <main>
      <nuxt-child />
    </main>
    <Footer />
    <client-only>
      <back-to-top bottom="50px" right="50px">
        <el-button
          :class="$style.backToTop"
          type="primary"
          icon="el-icon-arrow-up"
          circle
        ></el-button>
      </back-to-top>
    </client-only>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Footer from '~/components/layout/default/Footer.vue'
import Header from '~/components/layout/default/Header.vue'
import BackToTop from 'vue-backtotop'

export default Vue.extend({
  components: { Header, Footer, BackToTop }
})
</script>

<style lang="postcss" module>
.root {
  .hidden {
    display: none;
  }
  .backToTop {
    background: var(--color-secondary-text);
    font-size: 3rem;
    border: none;
    &:hover {
      opacity: 0.7;
    }
  }
}
</style>

<style>
.container {
  padding: 0 var(--space);
  margin-right: auto;
  margin-left: auto;
}
.navbar_menu {
  display: block;
}
.hamburger_container {
  display: none;
}
.drawer {
  width: 40% !important;
  display: none;
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

@media only screen and (max-width: 1600px) {
}

/************
2. 1440px
************/

@media only screen and (max-width: 1440px) {
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
  .top_nav {
    display: none;
  }
  .navbar_menu {
    display: none;
  }
  .hamburger_container {
    display: block;
  }
  .drawer {
    display: block;
  }
}

/************
6. 991px
************/

@media only screen and (max-width: 991px) {
  h2 {
    font-size: 36px;
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
  h2 {
    font-size: 24px;
  }
  h6 {
    font-size: 12px;
  }
  .drawer {
    width: 100% !important;
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
