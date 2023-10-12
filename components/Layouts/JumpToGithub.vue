<script lang="ts" setup>
import { Icon } from '#components';
import type { Os } from '~/types/example.d';

const repositoryUrl = ref('');
const Github = h(Icon, { name: 'mdi:github' }) as any;

onMounted(async () => {
  const { data: osData } = await useBffFetch<Os>('/os-example');
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
  <v-btn :icon="Github" @click="jumpToGithub" />
</template>
