<script setup lang="ts">
definePageMeta({
  layoutTypes: ['no-layout']
});

const { t } = useI18n();
const textArr = `definePageMeta({
  layoutTypes: ['no-layout']
});`.split('\n');
const highlightIndex = textArr.findIndex(txt => txt.includes('layoutTypes'));
</script>
<template>
  <div class="tw-daisy-hero tw-min-h-screen tw-bg-base-200">
    <div class="tw-daisy-hero-content tw-text-center">
      <div class="tw-max-w-md">
        <h1 class="tw-text-5xl tw-font-bold">{{ t('example.hello') }}</h1>
        <p class="tw-py-6">
          {{ t('example.LoremIpsum') }}
        </p>
        <div class="tw-daisy-mockup-code tw-text-left tw-mb-3">
          <pre
            v-for="(txt, idx) in textArr"
            :key="idx"
            :class="
              idx === highlightIndex
                ? 'tw-bg-success tw-text-success-content'
                : ''
            "
          ><code>{{ txt }}</code></pre>
        </div>
        <p>
          <el-link
            type="primary"
            :href="getRouterByName('layout-example-no-header').path"
            >{{
              t('example.backToText', { text: t('example.noHeader') })
            }}</el-link
          >
        </p>
      </div>
    </div>
  </div>
</template>
