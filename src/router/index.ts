import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    name: 'home',
    path: '/',
    component: () => import('../views/home/home.vue')
  },
  {
    name: 'customer',
    path: '/customer',
    component: () => import('../views/customer/customer.vue')
  },
  {
    name: 'customer-crud',
    path: '/customer-crud/:id',
    component: () => import('../views/customer/permission-crud/customer-crud.vue'),
    meta: {
      parent: "customer"
    }
  },
  {
    path: '*',
    component: () => import('../views/Error404.vue')
  }
];

const router = new VueRouter({
  mode: "history",
  routes
});

export default router
