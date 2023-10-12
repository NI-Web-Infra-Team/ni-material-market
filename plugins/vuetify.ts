import { createVuetify } from 'vuetify';
import { VSkeletonLoader } from 'vuetify/labs/VSkeletonLoader';
import { en, zhHans } from 'vuetify/locale';
import { aliases, mdi } from 'vuetify/lib/iconsets/mdi-svg.mjs';
import {
  VDataTable,
  VDataTableServer,
  VDataTableVirtual
} from 'vuetify/labs/VDataTable';
import type { LocaleItem } from '~/types/project.d';

export default defineNuxtPlugin(app => {
  const DEFAULT_LOCALE: string = app.$config.public.DEFAULT_LOCALE;
  const SUPPORT_LOCALES = app.$config.public.SUPPORT_LOCALES as LocaleItem[];

  const fallbackLocale = SUPPORT_LOCALES.find(
    locale => locale.key === DEFAULT_LOCALE
  )!.vuetify;

  const currentLocale =
    SUPPORT_LOCALES.find(
      locale => locale.key === (app.$i18n as any).locale.value
    )?.vuetify ?? fallbackLocale;

  const vuetify = createVuetify({
    ssr: true,
    defaults: COMPONENT_DEFAULTS,
    locale: {
      locale: currentLocale,
      fallback: fallbackLocale,
      messages: { zhHans, en }
    },
    theme: {
      defaultTheme: DEFAULT_THEME,
      themes: {
        light
      }
    },
    components: {
      VSkeletonLoader,
      VDataTable,
      VDataTableServer,
      VDataTableVirtual
    },
    icons: {
      defaultSet: 'mdi',
      aliases,
      sets: {
        mdi
      }
    }
  });

  app.vueApp.use(vuetify);
});
