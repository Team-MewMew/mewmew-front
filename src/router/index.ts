import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import IntroViewVue from '@/views/IntroView.vue';
import LoginViewVue from '@/views/LoginView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/intro',
      name: 'intro',
      component: IntroViewVue
    },
    {
      path: '/login',
      name: 'login',
      component: LoginViewVue
    }
    // {
    //   path: '/signup',
    //   name: 'signup',
    //   compoen
    // }
  ]
});

export default router;
