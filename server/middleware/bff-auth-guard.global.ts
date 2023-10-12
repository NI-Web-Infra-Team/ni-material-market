import { useServerI18n } from '~/utils/server-i18n';

const requirePathStartsWith = ['/bff/', '/trpc/'];
const ignorePaths: string[] = [];
export default defineEventHandler(event => {
  const pathName = new URL(getRequestURL(event)).pathname;
  if (
    requirePathStartsWith.every(p => !pathName.startsWith(p)) ||
    ignorePaths.includes(pathName)
  ) {
    return;
  }

  const { locale, authorization } = getHeaders(event);
  const i18n = useServerI18n(locale);

  if (!authorization) {
    throw createError({ statusCode: 401, message: i18n.error.signInError });
  }
});
