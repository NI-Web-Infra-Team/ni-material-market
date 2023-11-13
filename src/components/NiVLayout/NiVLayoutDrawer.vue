<script setup lang="ts">
import { computed } from 'vue';
import type { NiVLayoutDrawerProps } from './NiVLayout';
const props = withDefaults(defineProps<NiVLayoutDrawerProps>(), {
  drawer: false
});

const emit = defineEmits<{
  'update:drawer': [value: boolean];
}>();

const _drawer = computed({
  get() {
    return props.drawer;
  },
  set(val) {
    emit('update:drawer', val);
  }
});
</script>
<template>
  <v-navigation-drawer v-model="_drawer"> 645 </v-navigation-drawer>
</template>
