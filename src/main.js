import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueAxios from './plugins/axios'
import './assets/sass/style.scss'
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false
Vue.use(VueAxios)

const token = localStorage.getItem('token')
if (token) {
  Vue.prototype.$axios.defaults.headers.common['Authorization'] = token
}

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
