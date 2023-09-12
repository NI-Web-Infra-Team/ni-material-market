import * as echarts from 'echarts/core';
import { useProfileStore } from '~/stores/profile';

export default defineNuxtPlugin({
  name: 'app-client-plugin',
  enforce: 'post',

  hooks: {
    'app:created': function () {
      echarts.registerTheme('dark', ECHARTS_DARK);
      useProfileStore().setTheme();
    }
  }
});
