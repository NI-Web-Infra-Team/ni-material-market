<script lang="ts" setup>
import { UseImage } from '@vueuse/components';
</script>
<template>
  <v-menu>
    <template #activator="{ props }">
      <v-btn v-bind="props" icon>
        <v-avatar>
          <v-img src="/images/favicon-32.png" alt="admin"></v-img>
        </v-avatar>
      </v-btn>
    </template>
    <v-list>
      <v-list-item>
        <div class="tw-flex tw-items-center tw-gap-3">
          <UseImage
            src="/images/favicon-32.png"
            class="tw-h-8 tw-rounded-full tw-pointer-events-none"
          >
            <template #loading>
              <v-skeleton-loader class="tw-h-8 tw-w-16" />
            </template>
            <template #error>admin</template>
          </UseImage>
          <p>admin</p>
        </div>
      </v-list-item>
    </v-list>
  </v-menu>
</template>
