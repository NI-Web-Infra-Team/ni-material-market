import '@/assets/base.scss';
import { createApp } from 'vue';
import vuetify from '@/plugins/vuetify';
import { createPinia } from 'pinia';

import App from './App.vue';
import router from './router';

const app = createApp(App);

app.use(vuetify);
app.use(createPinia());
app.use(router);

app.mount('#app');
