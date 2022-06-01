import Vue from 'vue'

const animatedScrollObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('enter')
      animatedScrollObserver.unobserve(entry.target)
    }
  })
})

export const animate = {
  bind(el) {
    el.classList.add('before-enter')
    animatedScrollObserver.observe(el)
  }
}
Vue.directive('scroll-animate', animate)
