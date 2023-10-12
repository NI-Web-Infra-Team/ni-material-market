<script setup lang="ts">
import { Icon } from '#components';
import type { ThemeValue } from '~/types/profile';
import { useProfileStore } from '~/stores/profile';

const { t } = useI18n();

const profile = useProfileStore();
const currentTheme = computed(() => ({
  ...profile.currentTheme,
  icon: h(Icon, { name: profile.currentTheme.icon })
}));

/**
 * 切换主题
 * @param theme 主题
 */
function handleSelect(theme: ThemeValue) {
  if (theme === profile.currentTheme.value) return;
  profile.setTheme(theme);
}
</script>

<template>
  <v-menu>
    <template #activator="{ props }">
      <!-- @vue-skip -->
      <v-btn v-bind="props" :icon="currentTheme.icon" />
    </template>
    <v-list>
      <v-list-item
        v-for="item in THEMES"
        :key="item.value"
        :value="item.value"
        @click="handleSelect(item.value)"
      >
        <v-list-item-title
          :class="{ 'text-primary': currentTheme.value === item.value }"
          >{{ t(item.labelKey) }}</v-list-item-title
        >
      </v-list-item>
    </v-list>
  </v-menu>
</template>
