<script setup lang="ts">
import { THEME_KEY } from 'vue-echarts';
import { useProfileStore } from '~/stores/profile';

const profile = useProfileStore();
const currentTheme = computed(() => profile.currentTheme);
provide(THEME_KEY, currentTheme);
</script>

<template>
  <slot />
</template>
