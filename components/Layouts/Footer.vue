<script setup lang="ts">
import { UseImage } from '@vueuse/components';
import type { Os } from '~/types/example.d';

const { data: osData } = await useBffExampleFetch<Os>('/os');
const config = useRuntimeConfig();
const { t } = useI18n();
</script>

<template>
  <el-footer
    class="tw-daisy-footer !tw-h-auto !tw-py-4 tw-border-t tw-border-base-300"
  >
    <div class="tw-items-center tw-grid-flow-col tw-self-center">
      <UseImage :src="`${config.app.baseURL}logo.svg`" class="tw-h-8">
        <template #loading>
          <el-skeleton animated class="tw-h-8 !tw-w-16">
            <template #template>
              <el-skeleton-item variant="image" class="!tw-h-full" />
            </template>
          </el-skeleton>
        </template>
        <template #error>
          {{ t('example.teamName') }}
        </template>
      </UseImage>
      <p>{{ t('example.teamName') }} <br />{{ t('example.teamSlogan') }}</p>
    </div>
    <div class="md:tw-place-self-center md:tw-justify-self-end">
      <div class="tw-grid tw-grid-flow-col tw-gap-4">
        <el-link type="primary" :href="osData?.repositoryUrl ?? '/'">
          Github
        </el-link>
      </div>
    </div>
  </el-footer>
</template>
