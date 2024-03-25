import { createRouter, createWebHistory } from 'vue-router'
import ContactView from '../views/ContactView.vue'
import TopBarLayout from '../layouts/TopbarLayout.vue'
import ProfileView from '../views/ProfileView.vue'
import HomeView from '@/views/HomeView.vue'
import AuthLayout from '../layouts/AuthLayout.vue'
import LoginView from '../views/LoginView.vue'
import RegisterView from '@/views/RegisterView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/home',
      component: TopBarLayout,
      children: [
        {
          path: '',
          name: 'home',
          component: HomeView
        },
        {
          path: 'contact',
          name: 'contact',
          component: ContactView
        },
        {
          path: 'profile',
          name: 'profile',
          component: ProfileView
        },
      ]
    },
    {
      path: '/auth',
      component: AuthLayout,
      children: [
        {
          path: 'login',
          name: 'login',
          component: LoginView,
        },
        {
          path: 'register',
          name: 'register',
          component: RegisterView
        },
      ]
    },
  ]
})

export default router
