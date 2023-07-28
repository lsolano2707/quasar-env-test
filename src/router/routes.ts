import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        name: 'products-home',
        component: () => import('src/modules/products/pages/HomePage.vue'),
      },
      {
        path: ':productId',
        name: 'products-detail',
        component: () => import('src/modules/products/pages/DetailPage.vue'),
      },
      {
        path: 'create',
        name: 'products-create',
        meta: {
          isCreate: true,
        },
        component: () =>
          import(
            /* webpackChunkName: "Create" */ 'src/modules/products/pages/CreateOrEditPage.vue'
          ),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
