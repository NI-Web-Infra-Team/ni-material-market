import { merge } from 'lodash-es';

export const useBffFetch: typeof useFetch = (request, opts?) => {
  const config = useRuntimeConfig();
  const locale = useNuxtApp().$i18n.locale.value;

  return useFetch(
    request,
    merge(
      {
        baseURL: config.public.apiBase,
        // FIXME: method 的类型会报错
        method: 'POST' as any,
        headers: {
          locale,
          Authorization: 'foo'
        }
      },
      opts
    )
  );
};
