/* routes.config.js */

export default [

  {
    path: '/',
    label: 'home',
    name: 'home',
    component: () => import('@/pages/vs-home-page.vue'),
  },
  {
    path: '/help',
    label: 'help',
    name: 'help',
    component: () => import('@/pages/vs-help-page.vue'),
  },

];
