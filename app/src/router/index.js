import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CoinDeskView from '@/views/CoinDeskView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/coin-desk',
      name: 'coin-desk',
      component: CoinDeskView
    },
    {
      path: '/rewards',
      name: 'rewards',
      component: () => import('@/views/AllRewardView.vue')
    },
    {
      path: '/rewards/:id',
      name: 'rewards.show',
      component: () => import('@/views/RewardDetail.vue')
    }
  ]
})

export default router
