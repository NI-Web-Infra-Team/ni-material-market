<script setup lang="ts">
import type { RouteItem } from '~/types/project.d';
import type { SelectedItem } from '~/types/vuetify.d';
import { useProfileStore } from '~/stores/profile';

const route = useRoute();
const router = useRouter();
const profileStore = useProfileStore();

const routes = reactive<RouteItem[]>(ROUTES());

const isCollapsed = computed({
  get() {
    return !profileStore.layoutSiderCollapsed;
  },
  set(newVal) {
    profileStore.toggleLayoutSiderCollapsed(!newVal);
  }
});
const open = ref([
  findPathInTree({ index: route.path }, routes, { key: 'index' }).path[0]?.index
]);
const selected = ref([route.path]);

/**
 * @param val 选中的菜单项
 */
async function handleSelect(val: SelectedItem) {
  await router.push(val.id as string);
  selected.value = [val.id as string];
}
</script>

<template>
  <v-navigation-drawer v-model="isCollapsed" temporary>
    <v-list
      v-model:opened="open"
      v-model:selected="selected"
      nav
      @click:select="handleSelect"
    >
      <RouteMenuItem v-for="child in routes" :key="child.index" :item="child" />
    </v-list>
  </v-navigation-drawer>
</template>

<style scoped lang="scss">
.aside-menu {
  /** 240px */
  min-width: 15rem;
  @apply tw-max-w-screen-sm tw-border-none;
}
</style>
