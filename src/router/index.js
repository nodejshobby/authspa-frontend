import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '../views/LoginView.vue'
import RegisterView from '../views/RegisterView.vue'
import DashboardView from '../views/DashboardView.vue'
import store from '@/store/index.js';

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: LoginView,
    meta: {
      guestOnly: true
    }
  },
  {
    path: '/register',
    name: 'Register',
    component: RegisterView,
    meta: {
      guestOnly: true
    }
  },
  {
    path: '/',
    name: 'Home',
    component: RegisterView
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: DashboardView,
    meta: {
      authOnly: true
    }
  },
  {
    path: '/Logout',
    name: 'Logout',
    component: DashboardView
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

function isLoggedIn(){
   return store.state.auth.authenticated
}

router.beforeEach((to,from,next)=>{
  if(to.matched.some(record => record.meta.authOnly)){
    if(!isLoggedIn()){
      next({
        path: "/login",
        query: { redirect: to.fullPath }
      })
    }else{
      next()
    }
  }else if(to.matched.some(record => record.meta.guestOnly)){
    if(isLoggedIn()){
      next({
        path: "/dashboard",
        query: { redirect: to.fullPath }
      })
    }else{
      next()
    }
  }else{
    next()
  }
})

export default router
