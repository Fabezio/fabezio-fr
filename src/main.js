import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueCarousel from 'vue-carousel';

Vue.use(VueCarousel)



// $(function(){
//   $('[data-toggle="popover"]').popover()
//   $('[data-toggle="tooltip"]').tooltip()
// })
Vue.config.productionTip = false
new Vue({
  store, router, 
  render: h => h(App)
}).$mount('#app')
