<script setup lang="ts">
import type { ThemeValue } from '~/types/profile';
import { useProfileStore } from '~/stores/profile';

const { t } = useI18n();

const profile = useProfileStore();
const currentTheme = computed(() => profile.currentTheme);

/**
 * 切换主题
 * @param theme 主题
 */
function handleSelect(theme: ThemeValue) {
  profile.setTheme(theme);
}
</script>

<template>
  <el-dropdown @command="handleSelect">
    <el-button>
      <Icon :name="currentTheme.icon" />
    </el-button>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item
          v-for="themeItem in THEMES"
          :key="themeItem.value"
          :command="themeItem.value"
        >
          <el-text
            :type="
              themeItem.value === currentTheme.value ? 'primary' : undefined
            "
          >
            {{ t(themeItem.labelKey) }}
          </el-text>
        </el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>
