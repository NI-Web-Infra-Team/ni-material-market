<script setup lang="ts">
const { t } = useI18n();
const { data: osData } = await useBffFetch('/os-example');

const descData = computed(() =>
  Object.entries(osData.value ?? {}).map(([key, value]) => ({
    label: key,
    value: value.toString()
  }))
);
</script>

<template>
  <header>
    <v-breadcrumbs :items="[t('example.systemInfo')]"></v-breadcrumbs>
  </header>
  <div class="tw-flex">
    <img
      class="tw-w-80 tw-hidden md:tw-block tw-object-cover"
      src="/example/system.webp"
      alt="system"
    />
    <v-expansion-panels>
      <v-expansion-panel
        v-for="item in descData"
        :key="item.label"
        :title="item.label"
        :text="item.value"
      >
      </v-expansion-panel>
    </v-expansion-panels>
  </div>
</template>
