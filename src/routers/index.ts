import {
  createRouter,
  createWebHistory,
} from 'vue-router';
import Intro from '../Pages/Intro.vue'
import Bridges from '../Pages/Bridges.vue';
import Events from '../Pages/Events.vue';

export const routes = [
  {
    name: 'Home',
    path: '/',
    redirect: '/intro',
  },
  {
    name: 'Intro',
    path: '/intro',
    component: Intro
  },
  {
    name: 'Bridge',
    path: '/bridge',
    component: Bridges
  },
  {
    name: 'Event',
    path: '/event',
    component: Events
  },
];

export const router = createRouter({
  history: createWebHistory('/demo'),
  routes,
});
