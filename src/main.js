import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import { longClickDirective } from 'vue-long-click'

const longClickInstance = longClickDirective({ delay: 1500, interval: 0 })
Vue.directive('longclick', longClickInstance)

Vue.config.productionTip = false

new Vue({
  store: store,
  router: router,
  render: h => h(App),
}).$mount('#app')
