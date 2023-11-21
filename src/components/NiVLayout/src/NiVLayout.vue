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
    <!-- @slot 推荐使用 v-app-bar 组件 @types asd -->
    <slot name="header"></slot>
    <!-- @slot 内容区域，推荐使用 v-main 嵌套 v-container -->
    <slot></slot>
    <!-- @slot 推荐使用 v-footer 组件 -->
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
  overflow: auto;
}
</style>
