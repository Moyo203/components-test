import Vue from 'vue'
// import App from './App.vue'
// import App from '@/components/father.vue'
import App from '@/components/index.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
