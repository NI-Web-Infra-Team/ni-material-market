<script setup lang="ts">
const { t } = useI18n();
const { data: osData } = await useBffExampleFetch('/os');

const descData = computed(() =>
  Object.entries(osData.value ?? {}).map(([key, value]) => ({
    label: key,
    value: value.toString()
  }))
);
</script>

<template>
  <el-descriptions :title="t('example.systemInfo')" border>
    <el-descriptions-item v-for="item in descData" :key="item.label">
      <template #label>
        <div>{{ item.label }}</div>
      </template>
      {{ item.value }}
    </el-descriptions-item>
  </el-descriptions>
</template>
