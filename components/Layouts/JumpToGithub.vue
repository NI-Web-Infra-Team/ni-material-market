<script lang="ts" setup>
import type { Os } from '~/types/example.d';

const repositoryUrl = ref('');

onMounted(async () => {
  const { data: osData } = await useBffFetch<Os>('/os');
  repositoryUrl.value = osData.value?.repositoryUrl ?? '/';
});

/**
 * 跳转到 Github
 */
function jumpToGithub() {
  window.open(repositoryUrl.value);
}
</script>

<template>
  <el-button @click="jumpToGithub">
    <Icon name="mdi:github" />
  </el-button>
</template>
