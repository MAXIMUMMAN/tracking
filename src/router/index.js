import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/LoginComponent'
import Dashboard from '../components/DashboardComponent'
import store from '../store/modules/users'

Vue.use(VueRouter)

const ifNotAuthenticated = (to, from, next) => {
  if (!store.getters.isLoggedIn) {
    next()
    return
  }
  next('/')
}

const ifAuthenticated = (to, from, next) => {
  if (store.getters.isLoggedIn) {
    next()
    return
  }
  next('/login')
}

const ifAuthLogin = (to, from, next) => {
  if (store.getters.isLoggedIn) {
    router.push('/dashboard')
    return
  }
  next('/login')
}

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    beforeEnter: ifAuthLogin,
  },
  {
    path: '/dashboard',
    name: "Dashboard",
    component: Dashboard,
    beforeEnter: ifAuthenticated,
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
