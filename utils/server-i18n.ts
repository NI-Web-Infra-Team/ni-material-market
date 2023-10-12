import type { SupportLocales } from '~/types/project.d';
import locales from '~/locales';

/**
 * 服务端使用的 i18n
 * @param locale 语言的标识符
 * @returns 语言包
 */
export function useServerI18n(locale?: string) {
  const runtimeConfig = useRuntimeConfig();

  locale = locale ?? runtimeConfig.public.DEFAULT_LOCALE;
  return (
    locales[locale as SupportLocales] ??
    locales[runtimeConfig.public.DEFAULT_LOCALE as SupportLocales]
  );
}
