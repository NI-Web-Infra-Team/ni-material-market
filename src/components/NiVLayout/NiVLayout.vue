<script setup lang="ts">
import { computed, ref, watch } from 'vue';
import type { NiVLayoutProps } from './NiVLayout';
import NiVLayoutHeader from './NiVLayoutHeader.vue';
import NiVLayoutFooter from './NiVLayoutFooter.vue';
import NiVLayoutDrawer from './NiVLayoutDrawer.vue';
import { useSlots } from 'vue';

const props = withDefaults(defineProps<NiVLayoutProps>(), {
  fitScreen: true,
  fullHeight: false,
  view: 'hhh lpr fff'
});

const slots = useSlots();

const emit = defineEmits<{
  'update:drawer': [value: boolean];
}>();

const _drawer = ref(false);

watch(
  () => props.drawer,
  (val) => {
    _drawer.value = val;
  }
);

watch(_drawer, (val) => {
  emit('update:drawer', val);
});

if (import.meta.env.DEV) {
  const pattern = /^(h|l)h(h|r) lpr (f|l)f(f|r)$/;
  const isValidView = (propValue: string) => pattern.test(propValue.toLowerCase());

  console.assert(
    isValidView(props.view),
    `\n非法的 view 参数：${props.view}\n不满足条件：${pattern}.test(propValue.toLowerCase())`
  );
}
</script>
<template>
  <v-layout
    :full-height="fullHeight"
    class="ni-v-layout"
    :class="{ 'ni-v-layout--fit-screen': fitScreen, 'ni-v-layout--full-height': fullHeight }"
  >
    <NiVLayoutHeader v-if="slots.header">
      <slot name="header"></slot>
    </NiVLayoutHeader>
    <NiVLayoutDrawer v-if="slots.drawer" v-model:drawer="_drawer">
      <slot name="drawer"></slot>
    </NiVLayoutDrawer>
    <v-main class="ni-v-layout__main">
      <v-container class="ni-v-layout__content">
        <slot></slot>
      </v-container>
    </v-main>
    <NiVLayoutFooter>
      <slot name="footer" v-if="slots.footer"></slot>
    </NiVLayoutFooter>
  </v-layout>
</template>

<style lang="scss" scoped>
.ni-v-layout {
  display: flex;
  flex-direction: column;
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

.ni-v-layout__content {
  flex: 1;
}
</style>
