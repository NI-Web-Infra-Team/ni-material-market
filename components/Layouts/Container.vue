<script lang="ts" setup>
import type { LayoutType } from '~/types/project.d';
const props = defineProps<{
  layoutTypes: LayoutType[];
}>();

const hasHeader = computed(() => !props.layoutTypes.includes('no-header'));
const hasSider = computed(() => !props.layoutTypes.includes('no-sider'));
const hasFooter = computed(() => props.layoutTypes.includes('has-footer'));
const hasContainer = computed(
  () => !props.layoutTypes.includes('no-container')
);
const withoutGap = computed(() =>
  props.layoutTypes.includes('container-without-gap')
);
const containerFull = computed(() =>
  props.layoutTypes.includes('container-full')
);
</script>

<template>
  <LayoutsHeader v-if="hasHeader" :has-sider="hasSider" />
  <ClientOnly>
    <LayoutsSider v-if="hasSider" />
  </ClientOnly>
  <v-container
    v-if="hasContainer"
    class="layout-container"
    :class="{
      'layout-container-full': containerFull,
      'layout-container-gap': !withoutGap
    }"
  >
    <slot />
  </v-container>
  <slot v-else />
  <LayoutsFooter v-if="hasFooter" />
</template>
<style lang="scss" scoped>
.layout-container {
  @apply tw-flex tw-flex-col tw-flex-1 tw-overflow-auto tw-relative tw-px-5 tw-pb-5 tw-my-5;

  ::v-deep(> *) {
    @apply tw-rounded-2xl tw-bg-white tw-shadow md:tw-shadow-xl;
  }
}
.layout-container-full {
  @apply tw-p-0 tw-max-w-none tw-my-0;
}
.layout-container-gap {
  @apply tw-gap-3 md:tw-gap-6;
}
</style>
