<script lang="ts" setup>
import { Icon } from '#components';
import type { RouteItem } from '~/types/project.d';

const { t } = useI18n();

const props = defineProps<{
  item: RouteItem;
}>();

const isSubMenu = computed(() => Array.isArray(props.item.children));
</script>
<template>
  <v-list-group v-if="isSubMenu" :value="item.index">
    <template #activator="{ props: menuProps }">
      <v-list-item
        v-bind="menuProps"
        :prepend-icon="
          item.icon ? (h(Icon, { name: item.icon }) as any) : undefined
        "
        :title="t(item.title)"
      ></v-list-item>
    </template>
    <RouteMenuItem
      v-for="child in item.children"
      :key="child.index"
      :item="child"
    />
  </v-list-group>

  <v-list-item
    v-else
    :prepend-icon="
      item.icon ? (h(Icon, { name: item.icon }) as any) : undefined
    "
    :title="t(item.title)"
    :value="item.index"
    color="primary"
  ></v-list-item>
</template>
