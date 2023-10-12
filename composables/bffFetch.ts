import { merge } from 'lodash-es';
import type { NitroFetchRequest } from 'nitropack';

/**
 * 封装 /bff 的请求
 * 添加默认的 baseURL, method, headers
 * @param request request
 * @param opts options
 * @returns fetch response
 */
export function $bffFetch<
  T = unknown,
  R extends NitroFetchRequest = NitroFetchRequest
>(
  request: Parameters<typeof $fetch<T, R>>[0],
  opts?: Partial<Parameters<typeof $fetch<T, R>>[1]>
) {
  const config = useRuntimeConfig();
  const locale = useNuxtApp().$i18n.locale.value;

  return $fetch<T, R>(
    request,
    merge(
      {
        baseURL: config.public.apiBase,
        method: 'POST',
        headers: {
          locale,
          Authorization: 'foo'
        }
      },
      opts
    )
  );
}
