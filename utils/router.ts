import type { RouteConfig, RouteItem } from '~/types/project.d';

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

export const routeConfigMap = new Map<string, RouteConfig>([
  ['sign-in', { needAuth: false }]
]);

/**
 * 路由表
 * @returns 路由表
 */
export function ROUTES(): RouteItem[] {
  const routes: RouteItem[] = [
    {
      index: getRouterByName('index').path,
      icon: 'mdi:home',
      title: 'example.homePage'
    },
    {
      icon: 'mdi:page-layout-sidebar-right',
      title: 'example.layoutExample',
      children: [
        {
          index: getRouterByName('examples-layout-no-container').path,
          title: 'example.noContainer'
        },
        {
          index: getRouterByName('examples-layout-has-footer').path,
          title: 'example.hasFooter'
        },
        {
          index: getRouterByName('examples-layout-no-header').path,
          title: 'example.noHeader'
        },
        {
          index: getRouterByName('examples-layout-no-layout').path,
          title: 'example.noLayout'
        },
        {
          index: getRouterByName('examples-layout-no-sider').path,
          title: 'example.noSider'
        }
      ]
    },
    {
      index: getRouterByName('examples-local-cache').path,
      icon: 'mdi:package-variant-closed-check',
      title: 'example.routeCacheExample'
    },
    {
      index: getRouterByName('examples-about').path,
      icon: 'mdi:information-slab-circle',
      title: 'example.about'
    }
  ];

  const formatRoutes = (
    routes: RouteItem | RouteItem[],
    indexSet = new Set()
  ) => {
    if (Array.isArray(routes)) {
      routes.forEach(route => {
        formatRoutes(route, indexSet);
      });
      return;
    }
    if (!routes.index) {
      let tmpIndex = getRandomString();
      while (indexSet.has(tmpIndex)) {
        tmpIndex = getRandomString();
      }
      indexSet.add(tmpIndex);
      routes.index = tmpIndex;
    }
    if (Array.isArray(routes.children)) {
      formatRoutes(routes.children, indexSet);
    }
  };

  formatRoutes(routes);

  return routes;
}
