import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import LandingPage from '../views/LandingPage.vue';
import ServicesPage from '../views/ServicesPage.vue';
import PortfolioPage from '../views/PortfolioPage.vue';
import BlogPage from '../views/BlogPage.vue';
import TeamPage from '../views/TeamPage.vue';
import ContactPage from '../views/ContactPage.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'LandingPage',
    component: LandingPage,
  },
  {
    path: '/services',
    name: 'ServicesPage',
    component: ServicesPage,
  },
  {
    path: '/portfolio',
    name: 'PortfolioPage',
    component: PortfolioPage,
  },
  {
    path: '/blog',
    name: 'BlogPage',
    component: BlogPage,
  },
  {
    path: '/aboutTeam',
    name: 'TeamPage',
    component: TeamPage,
  },
  {
    path: '/contact',
    name: 'ContactPage',
    component: ContactPage,
  },
  
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
