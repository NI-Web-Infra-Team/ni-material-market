<script setup lang="ts">
definePageMeta({
  layoutTypes: ['no-container']
});
const { t } = useI18n();
const textArr = `definePageMeta({
  layoutTypes: ['no-container']
});`.split('\n');
const highlightIndex = textArr.findIndex(txt => txt.includes('layoutTypes'));
</script>
<template>
  <el-row :gutter="12" class="tw-py-3">
    <el-col :span="8">
      <el-card shadow="hover">
        <p>{{ t('example.noContainer') }}</p>
        <p>
          <el-link
            type="primary"
            :href="getRouterByName('layout-example-no-header').path"
            >{{
              t('example.backToText', { text: t('example.noHeader') })
            }}</el-link
          >
        </p>
      </el-card>
    </el-col>
    <el-col :span="8">
      <el-card shadow="hover">
        <div class="tw-daisy-mockup-code">
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
      </el-card>
    </el-col>
  </el-row>
</template>
