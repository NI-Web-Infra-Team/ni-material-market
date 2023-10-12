import { httpBatchLink, createTRPCProxyClient } from '@trpc/client';
import type { AppRouter } from '@/server/trpc/routers';

export default defineNuxtPlugin(() => {
  const headers = useRequestHeaders();
  const locale: string = useNuxtApp().$i18n.locale.value;

  const client = createTRPCProxyClient<AppRouter>({
    links: [
      httpBatchLink({
        url: `/trpc`,
        headers() {
          // You can add more custom headers here
          return { ...headers, locale, Authorization: 'foo' };
        }
      })
    ]
  });
  return {
    provide: {
      client
    }
  };
});
