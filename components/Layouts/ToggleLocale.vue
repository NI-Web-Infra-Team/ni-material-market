<script setup lang="ts">
import type { LocaleItem } from '~/types/project';

const switchLocalePath = useSwitchLocalePath();
const route = useRoute();
const { locale } = useI18n();
const SUPPORT_LOCALES = useRuntimeConfig().public
  .SUPPORT_LOCALES as LocaleItem[];
const currentLocaleLabel = computed(
  () => SUPPORT_LOCALES.find(item => item.key === locale.value)?.label ?? '???'
);

/**
 * 切换语言
 * @param locale 语言
 */
function handleSelectLocale(locale: string) {
  navigateTo({
    query: route.query,
    path: switchLocalePath(locale)
  });
}
</script>

<template>
  <el-dropdown
    class="tw-min-w-fit tw-items-center"
    @command="handleSelectLocale"
  >
    <span class="tw-cursor-pointer">
      <Icon name="mdi:translate" />&nbsp;{{ currentLocaleLabel }}&nbsp;<Icon
        name="mdi:chevron-down"
      />
    </span>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item
          v-for="item in SUPPORT_LOCALES"
          :key="item.key"
          :command="item.key"
        >
          {{ item.label }}
        </el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>
