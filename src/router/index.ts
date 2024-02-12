import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import AIRecommendations from '@/views/AI/AIRecommendations.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
     path: '/AI/recommendations',
     name: 'AIRecommendations',
     component: AIRecommendations
    }
  ]
});

export default router;
