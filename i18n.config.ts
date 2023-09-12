import { DEFAULT_LOCALE } from './project.config';
import zhCN from './locales/zh-CN';
import en from './locales/en';

export default defineI18nConfig(() => ({
  legacy: false,
  locale: DEFAULT_LOCALE,
  messages: {
    'zh-CN': zhCN,
    en
  }
}));
