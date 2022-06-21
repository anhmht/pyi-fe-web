import { Plugin } from '@nuxt/types';
import Vue from 'vue';
import VueConfetti from 'vue-confetti';

Vue.use(VueConfetti);

declare module 'vue/types/vue' {
  interface Vue {
    $confetti: VueConfetti
  }
}
