<script lang="ts" setup>
import { UseImage } from '@vueuse/components';

const config = useRuntimeConfig();
</script>

<template>
  <el-header class="tw-border-b tw-border-base-300 layout-header-container">
    <NuxtLinkLocale to="/">
      <UseImage :src="`${config.app.baseURL}logo.svg`" class="logo">
        <template #loading>
          <el-skeleton animated class="tw-h-8 !tw-w-16">
            <template #template>
              <el-skeleton-item variant="image" class="!tw-h-full" />
            </template>
          </el-skeleton>
        </template>
        <template #error> Navinfo </template>
      </UseImage>
    </NuxtLinkLocale>
    <i class="tw-grow" />
    <ClientOnly>
      <el-space :size="8">
        <LayoutsToggleTheme />
        <LayoutsToggleLocale />
      </el-space>
      <template #fallback>
        <el-skeleton class="!tw-w-24 tw-h-full" :rows="1" animated>
          <template #template>
            <el-skeleton-item variant="rect" class="!tw-h-full" />
          </template>
        </el-skeleton>
      </template>
    </ClientOnly>
  </el-header>
</template>

<style lang="scss" scoped>
.layout-header-container {
  @apply tw-flex tw-p-4;
}
.logo {
  margin: 0 16px;
  @apply tw-h-8;
}
</style>
