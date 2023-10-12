import { isBoolean } from 'lodash-es';
import type { Theme, ThemeValue } from '~/types/profile';

export const useProfileStore = defineStore('profile', () => {
  const colorMode = useColorMode();
  // 菜单是否收起
  const layoutSiderCollapsed = ref(true);

  const currentTheme = computed<Theme>(() => {
    let theme = colorMode.preference;
    const defaultTheme = DEFAULT_THEME_VALUE();
    if (theme !== defaultTheme) {
      theme = defaultTheme;
    }

    return THEMES.find(t => t.value === theme)!;
  });

  /**
   * 设置主题
   * @param val 主题
   */
  function setTheme(val?: ThemeValue) {
    val = val ?? currentTheme.value.value;
    localStorage.setItem('theme', val);
    colorMode.preference = val;
    document.documentElement.classList.add(val);
  }

  /**
   * 切换菜单收起状态
   * @param bool 是否收起
   */
  function toggleLayoutSiderCollapsed(bool: boolean) {
    bool = isBoolean(bool) ? bool : !layoutSiderCollapsed.value;
    layoutSiderCollapsed.value = bool;
  }

  return {
    currentTheme,
    setTheme,
    layoutSiderCollapsed: computed(() => layoutSiderCollapsed.value),
    toggleLayoutSiderCollapsed
  };
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useProfileStore, import.meta.hot));
}
