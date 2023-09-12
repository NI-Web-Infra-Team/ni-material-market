<script setup lang="ts">
const { data: petsData } = await useOpenapiFetch<Record<string, string>[]>(
  `/findByStatus?${new URLSearchParams({
    status: 'available'
  }).toString()}`
);

const columns = ['id', 'name', 'status', 'category', 'tags'].map(key => ({
  key,
  dataKey: key,
  title: key,
  width: 300
}));
</script>

<template>
  <client-only>
    <el-auto-resizer>
      <template #default="{ height, width }">
        <el-table-v2
          :columns="columns"
          :data="petsData ?? []"
          :width="width"
          :height="height"
          fixed
        />
      </template>
    </el-auto-resizer>
  </client-only>
</template>
