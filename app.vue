<script lang="ts" setup>
import type { LayoutType } from '~/types/project.d';
const route = useRoute();

const layoutTypes = computed(() => {
  const metaData =
    (route.meta.layoutTypes as LayoutType | LayoutType[]) ?? 'default';
  return Array.isArray(metaData) ? metaData : [metaData];
});
</script>
<template>
  <LocalHead>
    <NuxtLoadingIndicator :color="MAIN_COLOR" />
    <el-config>
      <echarts-config>
        <NuxtPage v-if="layoutTypes.includes('no-layout')" />
        <LayoutsContainer v-else :layout-types="layoutTypes">
          <NuxtPage />
        </LayoutsContainer>
      </echarts-config>
    </el-config>
  </LocalHead>
</template>
