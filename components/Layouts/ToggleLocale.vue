<script setup lang="ts">
import { useLocale } from 'vuetify';
import type { LocaleItem } from '~/types/project.d';

const switchLocalePath = useSwitchLocalePath();
const route = useRoute();
const { locale } = useI18n();
const runtimeConfig = useRuntimeConfig();
const SUPPORT_LOCALES = runtimeConfig.public.SUPPORT_LOCALES as LocaleItem[];
const DEFAULT_LOCALE: string = runtimeConfig.public.DEFAULT_LOCALE;
const currentLocale = computed(() =>
  SUPPORT_LOCALES.find(item => item.key === locale.value)
);

const { current } = useLocale();

/**
 * 选择语言
 * @param locale 语言的 key
 */
function handleSelectLocale(locale: string) {
  current.value =
    currentLocale.value?.vuetify ??
    SUPPORT_LOCALES.find(item => item.key === DEFAULT_LOCALE)!.vuetify;
  navigateTo({
    query: route.query,
    path: switchLocalePath(locale)
  });
}
</script>

<template>
  <v-menu>
    <template #activator="{ props }">
      <v-btn v-bind="props">
        <Icon name="mdi:translate" />&nbsp;{{
          currentLocale?.label ?? '???'
        }}&nbsp;<Icon name="mdi:chevron-down" />
      </v-btn>
    </template>
    <v-list>
      <v-list-item
        v-for="item in SUPPORT_LOCALES"
        :key="item.key"
        :value="item.key"
        @click="handleSelectLocale(item.key)"
      >
        <v-list-item-title :class="{ 'text-primary': locale === item.key }">{{
          item.label
        }}</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-menu>
</template>
