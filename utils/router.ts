/**
 * 通过路由名称获取路由
 * @param name 路由名称
 * @returns 路由
 */
export function getRouterByName(name: string) {
  const router = useRouter();
  const { $i18n } = useNuxtApp();
  return router.resolve({ name: `${name}___${$i18n.locale.value}` });
}
