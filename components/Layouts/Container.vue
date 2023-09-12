<script lang="ts" setup>
import type { LayoutType } from '~/types/project.d';
const props = defineProps<{
  layoutTypes: LayoutType[];
}>();

const hasHeader = computed(() => !props.layoutTypes.includes('no-header'));
const hasSider = computed(() => !props.layoutTypes.includes('no-sider'));
const hasFooter = computed(() => !props.layoutTypes.includes('no-footer'));
const hasContainer = computed(
  () => !props.layoutTypes.includes('no-container')
);
</script>

<template>
  <el-container>
    <LayoutsHeader v-if="hasHeader" />
    <el-container v-if="hasContainer" class="tw-overflow-auto">
      <LayoutsSider v-if="hasSider" />
      <el-main>
        <slot />
      </el-main>
    </el-container>
    <slot v-else />
    <LayoutsFooter v-if="hasFooter" />
  </el-container>
</template>
