<script setup lang="ts">
import { Icon } from '#components';
import { useProfileStore } from '~/stores/profile';

const ChevronLeft = h(Icon, { name: 'mdi:chevron-left' });
const ChevronRight = h(Icon, { name: 'mdi:chevron-right' });

const { t } = useI18n();
const route = useRoute();
const profileStore = useProfileStore();
const isCollapsed = computed(() => profileStore.layoutSiderCollapsed);
const defaultActive = computed(() => route.path);

/**
 * 通过 name 获取路径
 * @param name 路由名称
 * @returns 路由路径
 */
function getRoutePathByName(name: string) {
  return getRouterByName(name).path;
}
</script>

<template>
  <el-aside class="aside">
    <ClientOnly>
      <el-menu
        class="aside-menu"
        router
        :default-active="defaultActive"
        :collapse="isCollapsed"
      >
        <el-menu-item :index="getRoutePathByName('index')">
          <el-icon>
            <Icon name="mdi:home" />
          </el-icon>
          <template #title>
            {{ t('example.homePage') }}
          </template>
        </el-menu-item>
        <el-menu-item :index="getRoutePathByName('about')">
          <el-icon>
            <Icon name="mdi:information-slab-circle-outline" />
          </el-icon>
          <template #title>
            {{ t('example.about') }}
          </template>
        </el-menu-item>
        <el-menu-item :index="getRoutePathByName('openapi-example')">
          <el-icon>
            <Icon name="mdi:hexagon-multiple-outline" />
          </el-icon>
          <template #title>{{ t('example.openApiExample') }}</template>
        </el-menu-item>
        <el-menu-item :index="getRoutePathByName('local-cache')">
          <el-icon>
            <Icon name="mdi:database" />
          </el-icon>
          <template #title>{{ t('example.routeCacheExample') }}</template>
        </el-menu-item>
        <el-sub-menu index="layout-example">
          <template #title>
            <el-icon><Icon name="mdi:page-layout-sidebar-left" /></el-icon>
            <span>{{ t('example.layoutExample') }}</span>
          </template>
          <el-menu-item
            :index="getRoutePathByName('layout-example-no-header')"
            >{{ t('example.noHeader') }}</el-menu-item
          >
          <el-menu-item
            :index="getRoutePathByName('layout-example-no-sider')"
            >{{ t('example.noSider') }}</el-menu-item
          >
          <el-menu-item
            :index="getRoutePathByName('layout-example-no-container')"
            >{{ t('example.noContainer') }}</el-menu-item
          >
          <el-menu-item
            :index="getRoutePathByName('layout-example-no-footer')"
            >{{ t('example.noFooter') }}</el-menu-item
          >
          <el-menu-item
            :index="getRoutePathByName('layout-example-no-layout')"
            >{{ t('example.noLayout') }}</el-menu-item
          >
        </el-sub-menu>
      </el-menu>
      <el-button
        class="tw-w-full"
        :icon="isCollapsed ? ChevronRight : ChevronLeft"
        @click="profileStore.toggleLayoutSiderCollapsed"
      />
      <template #fallback>
        <el-skeleton
          class="aside-menu el-menu--collapse tw-pl-5"
          :rows="5"
          :animated="true"
        />
      </template>
    </ClientOnly>
  </el-aside>
</template>

<style scoped lang="scss">
.aside {
  width: fit-content;
  @apply tw-flex tw-flex-col;
}
.aside-menu {
  @apply tw-flex-1 tw-overflow-auto;
}
.aside-menu:not(.el-menu--collapse) {
  width: var(--el-aside-width);
}
</style>
