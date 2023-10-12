import type { LocaleItem } from './types/project';

export const DEFAULT_LOCALE = 'zh-CN';
export const SUPPORT_LOCALES: LocaleItem[] = [
  {
    key: 'zh-CN',
    label: '简体中文',
    vuetify: 'zhHans'
  },
  {
    key: 'en',
    label: 'English',
    vuetify: 'en'
  }
];
