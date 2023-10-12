<script setup lang="ts">
definePageMeta({
  layoutTypes: ['no-sider']
});

const { t } = useI18n();
const textArr = `definePageMeta({
  layoutTypes: ['no-sider']
});`.split('\n');
const highlightIndex = textArr.findIndex(txt => txt.includes('layoutTypes'));

const breadcrumbs = [
  {
    title: t('example.backToText', { text: t('example.noHeader') }),
    href: getRouterByName('examples-layout-no-header').path
  },
  {
    title: t('example.noSider')
  }
];
</script>
<template>
  <header>
    <v-breadcrumbs :items="breadcrumbs"></v-breadcrumbs>
  </header>
  <div class="tw-daisy-mockup-code">
    <pre
      v-for="(txt, idx) in textArr"
      :key="idx"
      :class="
        idx === highlightIndex ? 'tw-bg-success tw-text-success-content' : ''
      "
    ><code>{{ txt }}</code></pre>
  </div>
</template>
