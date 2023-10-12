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
  <HtmlLang>
    <NuxtLoadingIndicator :color="MAIN_COLOR" />
    <v-app class="application">
      <echarts-config>
        <NuxtPage v-if="layoutTypes.includes('no-layout')" />
        <LayoutsContainer v-else :layout-types="layoutTypes">
          <NuxtPage />
        </LayoutsContainer>
      </echarts-config>
    </v-app>
  </HtmlLang>
</template>
<style scoped>
.application {
  background-color: rgba(var(--v-theme-primary), 0.1);
}
</style>
