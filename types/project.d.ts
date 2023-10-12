export type SupportLocales = 'en' | 'zh-CN';

export type LocaleItem = {
  key: string;
  label: string;
  vuetify: string;
};

// 布局的类型
export type LayoutType =
  | 'default'
  | 'no-container'
  | 'container-full'
  | 'no-sider'
  | 'no-header'
  | 'has-footer'
  | 'no-layout'
  | 'container-without-gap';

export type RouteConfig = {
  // 是否需要认证，如果需要认证，但是没有登录，会跳转到登录页面，默认为 true
  needAuth?: boolean;
};

export interface RouteItem {
  index?: string;
  icon?: string;
  title: string;
  children?: RouteItem[];
}
