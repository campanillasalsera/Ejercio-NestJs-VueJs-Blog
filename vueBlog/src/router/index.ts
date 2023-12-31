import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PostLister from '../components/PostLister.vue'
import LoginUser from '../components/LoginUser.vue'
import PostTemplate from '@/components/PostTemplate.vue'

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
      path: '/register',
      name: 'register',
      component: () => import('../components/RegisterUser.vue')
      },
      {
        path: '/posts',
        name: 'posts',
        component: PostLister
      },
      {
        path: '/login',
        name: 'login',
        component: LoginUser
      },
      {
        path: '/post/:id',
        name: 'post',
        component: PostTemplate,
        props: {shouldGetData: true}
      }
    ]
})

export default router
