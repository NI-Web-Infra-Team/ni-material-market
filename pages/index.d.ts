import type { LayoutType } from '~/types/project.d';
declare module '#app' {
  interface PageMeta {
    /** layout 的类型 */
    layoutTypes?: LayoutType | LayoutType[];
  }
}

// It is always important to ensure you import/export something when augmenting a type
export {};
