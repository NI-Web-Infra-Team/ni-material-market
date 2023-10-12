import type { DefaultsInstance } from 'vuetify/lib/framework.mjs';
// Breakpoints
// 数据来自：https://tailwindcss.com/docs/responsive-design
export const SM = 640;
export const MD = 768;
export const LG = 1024;
export const XL = 1280;
export const XXL = 1536;

export const DEFAULT_PAGE_SIZE = 10;
export const DEFAULT_PER_PAGE_OPTIONS = [
  {
    value: 10,
    title: '10'
  },
  {
    value: 30,
    title: '30'
  },
  {
    value: 50,
    title: '50'
  },
  {
    value: 100,
    title: '100'
  },
  {
    value: 300,
    title: '300'
  },
  {
    value: 500,
    title: '500'
  },
  {
    value: 1000,
    title: '1000'
  }
];

// vuetify 默认配置
export const COMPONENT_DEFAULTS: DefaultsInstance = {
  global: {},
  VSelect: {
    variant: 'outlined',
    color: 'primary'
  },
  VTextField: {
    variant: 'outlined',
    color: 'primary'
  },
  VDataTable: {
    fixedHeader: true,
    hover: true,
    itemsPerPageOptions: DEFAULT_PER_PAGE_OPTIONS
  },
  VDataTableServer: {
    fixedHeader: true,
    hover: true,
    itemsPerPageOptions: DEFAULT_PER_PAGE_OPTIONS
  },
  VDataTableVirtual: {
    fixedHeader: true,
    hover: true,
    itemsPerPageOptions: DEFAULT_PER_PAGE_OPTIONS
  }
};
