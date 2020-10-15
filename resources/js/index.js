import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/dashboard',
    // name: 'Dashboard',
    component: require("./components/Dashboard.vue")
	},

	{
    path: '/profile',
    // name: 'Profile',
    component: require("./components/Profile.vue")
  }
]

const router = new VueRouter({
  // mode: 'history',
  // base: process.env.BASE_URL,
  routes
})

export default router