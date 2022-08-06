import { Plugin } from '@nuxt/types'
import countries from '~/static/country_code.json'
import usStates from '~/static/us_state.json'

export const formatCurrency = (value: number): string => {
  const nf = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  })
  return nf.format(value)
}

export const displayCountry = (countryCode: string): string => {
  const country = countries.find(country => country.code === countryCode)
  return country ? country.name : countryCode
}

export const displayState = (stateCode: string, countryCode: string): string => {
  if (countryCode !== 'US') return stateCode
  const state = usStates.find(state => state.abbreviation === stateCode)
  return state ? state.name : stateCode
}

const formatPlugin: Plugin = (_, inject) => {
  inject('formatCurrency', formatCurrency)
  inject('displayCountry', displayCountry)
  inject('displayState', displayState)
}

export default formatPlugin

interface FormatPluginSchema {
  $formatCurrency: typeof formatCurrency
  $displayCountry: typeof displayCountry
  $displayState: typeof displayState
}

declare module 'vue/types/vue' {
  interface Vue extends FormatPluginSchema { }
}
