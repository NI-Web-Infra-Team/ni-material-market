<script setup lang="ts">
definePageMeta({
  layoutTypes: ['no-header']
});
const textArr = `definePageMeta({
  layoutTypes: ['no-header']
});`.split('\n');
const highlightIndex = textArr.findIndex(txt => txt.includes('layoutTypes'));
</script>
<template>
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
