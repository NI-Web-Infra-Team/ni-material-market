import type { Theme, ThemeValue } from '~/types/profile';

export const useProfileStore = defineStore('profile', () => {
  const colorMode = useColorMode();
  // 菜单是否收起
  const layoutSiderCollapsed = ref(true);
  if (process.client) {
    layoutSiderCollapsed.value = localStorage.getItem('layoutSiderCollapsed')
      ? localStorage.getItem('layoutSiderCollapsed') === 'true'
      : window.innerWidth < LG;
  }
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
   * @param val 主题值
   */
  function setTheme(val?: ThemeValue) {
    val = val ?? currentTheme.value.value;
    localStorage.setItem('theme', val);
    colorMode.preference = val;
    document.documentElement.classList.remove(...THEMES.map(t => t.value));
    document.documentElement.classList.add(val);
    document.documentElement.setAttribute('data-theme', val);
  }

  /**
   * 切换菜单收起状态
   */
  function toggleLayoutSiderCollapsed() {
    layoutSiderCollapsed.value = !layoutSiderCollapsed.value;
    localStorage.setItem(
      'layoutSiderCollapsed',
      layoutSiderCollapsed.value.toString()
    );
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
