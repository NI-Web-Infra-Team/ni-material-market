<script setup lang="ts">
definePageMeta({
  layoutTypes: ['no-sider']
});

const { t } = useI18n();
const textArr = `definePageMeta({
  layoutTypes: ['no-sider']
});`.split('\n');
const highlightIndex = textArr.findIndex(txt => txt.includes('layoutTypes'));
</script>
<template>
  <el-breadcrumb>
    <el-breadcrumb-item
      class="tw-mb-3"
      :to="{ path: getRouterByName('examples-layout-no-header').path }"
      >{{
        t('example.backToText', { text: t('example.noHeader') })
      }}</el-breadcrumb-item
    >
    <el-breadcrumb-item>{{ t('example.noSider') }}</el-breadcrumb-item>
  </el-breadcrumb>
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
