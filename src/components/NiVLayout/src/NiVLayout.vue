<script setup lang="ts">
import type { NiVLayoutProps } from './NiVLayout';

withDefaults(defineProps<NiVLayoutProps>(), {
  fitScreen: true,
  fullHeight: false
});
</script>
<template>
  <v-layout
    :full-height="fullHeight"
    class="ni-v-layout"
    :class="{ 'ni-v-layout--fit-screen': fitScreen, 'ni-v-layout--full-height': fullHeight }"
  >
    <slot name="header"></slot>
    <slot></slot>
    <slot name="footer"></slot>
  </v-layout>
</template>

<style lang="scss" scoped>
.ni-v-layout {
  display: flex;
  flex-direction: column;

  :deep(.ni-v-layout__footer) {
    flex: 0;
  }
  :deep(.ni-v-layout__content) {
    flex: 1;
  }
}

.ni-v-layout--full-height {
  height: 100%;
  flex: 1;
}

.ni-v-layout--fit-screen {
  min-height: 100dvh;
  min-width: 100dvw;
  overflow: auto;
}
</style>
