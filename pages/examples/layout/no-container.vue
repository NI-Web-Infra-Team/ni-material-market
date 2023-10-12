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
  <v-row class="tw-p-3">
    <v-col cols="auto">
      <v-card class="mx-auto" variant="elevated">
        <v-card-item>
          <p>{{ t('example.noContainer') }}</p>
        </v-card-item>

        <v-card-actions>
          <NuxtLinkLocale to="/examples/layout/no-header">
            {{ t('example.backToText', { text: t('example.noHeader') }) }}
          </NuxtLinkLocale>
        </v-card-actions>
      </v-card>
    </v-col>
    <v-col cols="auto">
      <v-card class="mx-auto" max-width="344" variant="elevated">
        <v-card-item>
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
        </v-card-item>
      </v-card>
    </v-col>
  </v-row>
</template>
