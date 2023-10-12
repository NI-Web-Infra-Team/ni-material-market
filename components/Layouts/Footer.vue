<script setup lang="ts">
import { UseImage } from '@vueuse/components';

const config = useRuntimeConfig();
const { t } = useI18n();
</script>

<template>
  <v-footer
    class="tw-daisy-footer tw-flex-none !tw-py-4 tw-border-t tw-border-base-300 tw-hidden md:tw-grid"
  >
    <div class="tw-items-center tw-grid-flow-col tw-self-center">
      <UseImage :src="`${config.app.baseURL}logo.svg`" class="tw-h-full">
        <template #loading>
          <v-skeleton-loader class="tw-h-8 tw-w-16" />
        </template>
        <template #error>
          {{ t('example.teamName') }}
        </template>
      </UseImage>
      <p>{{ t('example.teamName') }} <br />{{ t('example.teamSlogan') }}</p>
    </div>
  </v-footer>
</template>
