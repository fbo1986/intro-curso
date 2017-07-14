// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

// Definicion de filtro a nivel global
// De esta manera el filtro esta disponible para su  uso a nivel global
Vue.filter('something', (value) => {
  /* tratamos/transformamos la informacion y la devolvemos */
  return value.split('').reverse().join('')
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})
