<script setup lang="ts">
const { t } = useI18n();
const clientTime = ref(new Date().toLocaleString());
const { data: osData } =
  await useBffFetch<Record<string, string>>('/os-example');

const serverTime = computed(() => {
  return osData.value?.serverTime;
});
</script>
<template>
  <header>
    <v-breadcrumbs :items="[t('example.routeCacheExample')]"></v-breadcrumbs>
  </header>
  <div class="tw-p-3">
    <p class="tw-whitespace-pre-wrap tw-font-bold">
      {{ t('example.localCacheDesc') }}
    </p>
    <p>{{ t('example.clientTime') }}: {{ clientTime }}</p>
    <p>{{ t('example.serverTime') }}: {{ serverTime }}</p>
  </div>
</template>
