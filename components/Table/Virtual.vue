<script lang="ts" setup>
import type { VDataTableVirtual } from 'vuetify/lib/labs/components.mjs';
import type { VPagination } from 'vuetify/lib/components/VPagination/VPagination.mjs';
import type { TableVirtualOptions } from '~/types/components.d';

const props = defineProps<{
  tableProps?: VDataTableVirtual['$props'];
  paginationProps?: VPagination['$props'];
  itemsPerPage: number;
  itemsLength: number;
}>();

const emit = defineEmits<{
  (e: 'update:itemsPerPage', page: number): void;
  (e: 'update:options', params: TableVirtualOptions): void;
}>();
const { t } = useI18n();
const autoHeight = ref(0);
const tableContainer = ref(null);
const page = ref(1);

const _itemsPerPage = computed({
  get() {
    return props.itemsPerPage;
  },
  set(val) {
    emit('update:itemsPerPage', val);
  }
});

const start = computed(() => {
  return (page.value - 1) * _itemsPerPage.value + 1;
});

const end = computed(() => {
  const end = start.value + _itemsPerPage.value;
  return end > props.itemsLength ? props.itemsLength : end;
});

useResizeObserver(tableContainer, entries => {
  const entry = entries[0];
  const { height } = entry.contentRect;
  autoHeight.value = height;
});

/**
 * 修改页码以及每页显示条数
 * @param type key
 * @param val 值
 */
function handleUpdateOption(type?: 'page' | 'itemsPerPage', val?: any) {
  if (process.server) return;
  let $page = page.value;
  let $itemsPerPage = _itemsPerPage.value;

  switch (type) {
    case 'page':
      $page = val;
      break;
    case 'itemsPerPage':
      page.value = 1;
      $page = 1;
      $itemsPerPage = val;
      break;
  }
  emit('update:options', {
    page: $page,
    itemsPerPage: $itemsPerPage
  });
}

onMounted(() => {
  handleUpdateOption();
});
</script>
<template>
  <div class="table-virtual">
    <div ref="tableContainer" class="table-container">
      <v-data-table-virtual v-bind="props.tableProps" :height="autoHeight">
        <template
          v-for="(item, key, index) in $slots"
          :key="index"
          #[key]="slotScope"
        >
          <slot :name="key" v-bind="slotScope"></slot>
        </template>
      </v-data-table-virtual>
    </div>
    <div class="table-pagination">
      <span>{{ t('rowsPerPage') }}</span>
      <v-select
        v-model="_itemsPerPage"
        class="table-pagination-size"
        :items="DEFAULT_PER_PAGE_OPTIONS"
        density="compact"
        variant="underlined"
        @update:model-value="val => handleUpdateOption('itemsPerPage', val)"
      ></v-select>
      <span>{{ start }}-{{ end }} {{ t('total') }} {{ itemsLength }}</span>
      <v-pagination
        v-model="page"
        size="x-small"
        :length="Math.ceil(itemsLength / _itemsPerPage)"
        :total-visible="6"
        v-bind="props.paginationProps"
        @update:model-value="val => handleUpdateOption('page', val)"
      ></v-pagination>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.table-virtual {
  @apply tw-flex tw-flex-col tw-p-3;

  ::v-deep(.v-data-table-header__content) {
    @apply tw-whitespace-nowrap;
  }
}
.table-container {
  @apply tw-flex-1 tw-overflow-hidden;
}
.table-pagination {
  @apply tw-flex tw-gap-2 tw-justify-end tw-items-center tw-min-h-fit tw-flex-wrap tw-whitespace-nowrap;
}
.table-pagination-size {
  @apply tw-max-w-fit;
}
</style>
