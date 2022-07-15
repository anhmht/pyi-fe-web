import { Plugin } from '@nuxt/types'

export const formatCurrency = (value: number): string => {
  const nf = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  })
  return nf.format(value)
}

const filterPlugin: Plugin = (_, inject) => {
  inject('formatCurrency', formatCurrency)
}

export default filterPlugin

interface FilterPluginSchema {
  $formatCurrency: typeof formatCurrency
}

declare module 'vue/types/vue' {
  interface Vue extends FilterPluginSchema { }
}
