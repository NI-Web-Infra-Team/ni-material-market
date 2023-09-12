<script lang="ts" setup>
const { locale } = useI18n();
</script>
<template>
  <Html :lang="locale"></Html>
  <slot />
</template>
