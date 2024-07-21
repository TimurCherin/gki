import './assets/main.css';
import { createApp, type RendererElement } from 'vue';
import v3crm from '@opengis/v3-crm';
import v3core from 'v3-core-ui';
import v3filter from '@opengis/v3-filter';

import App from './App.vue';
// import router from './router';
import 'v3-core-ui/dist/style.css';
import '@opengis/v3-crm/dist/style.css';
// Configs
import routesConfig from '../routes.config';
import adminConfig from '../admin.config';

const initV3Filter = (app: RendererElement) => {
  const { components } = v3filter;

  app.component('VsFilter', components.VsFilter);
};

const app = createApp(App);

// app.use(router);
v3core.install(app, { createApp });

initV3Filter(app);

app.use(v3crm.v3Crm, { routesConfig, adminConfig });

import('./assets/tailwind/tailwind.js').then(() => {
  window.tailwind = {
    ...window.tailwind,
    important: '.vsForm',
  };

  app.mount('#app');
});
