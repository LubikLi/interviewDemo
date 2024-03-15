import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/test1',
      name: 'TestOne',
      component: () => import('../views/TestOne.vue')
    },
    {
      path: '/test2',
      name: 'TestTwo',
      component: () => import('../views/TestTwo.vue')
    },
    {
      path: '/test6',
      name: 'TestSix',
      component: () => import('../views/TestSix.vue')
    },
    {
      path: '/edit',
      name: 'TestTwoEdit',
      component: () => import('../views/TestTwoEdit.vue')
    },
    {
      path: '/test8',
      name: 'TestEight',
      component: () => import('../views/TestEight.vue')
    }
  ]
})

export default router
