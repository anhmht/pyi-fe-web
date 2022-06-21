import Vue from 'vue'

// @ts-ignore
import VueMq from 'vue-mq'

declare module 'vue/types/vue' {
  interface Vue {
    $mq: 'desktop' | 'mobile'
  }
}

declare module '@nuxt/types' {
  interface NuxtAppOptions {
    $mq: 'desktop' | 'mobile'
  }
}

declare module 'vuex/types/index' {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  interface Store<S> {
    $mq: 'desktop' | 'mobile'
  }
}

Vue.use(VueMq, {
  defaultBreakpoint: 'mobile',
  breakpoints: {
    mobile: 991,
    desktop: Infinity
  }
})
