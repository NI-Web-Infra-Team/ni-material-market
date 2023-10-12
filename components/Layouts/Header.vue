<script lang="ts" setup>
import { UseImage } from '@vueuse/components';
import { Icon } from '#components';
import { useProfileStore } from '~/stores/profile';

defineProps<{
  hasSider: boolean;
}>();

const config = useRuntimeConfig();
const profileStore = useProfileStore();
const canOpenMenu = ref(false);

const isCollapsed = computed(() => profileStore.layoutSiderCollapsed);
const CloseIcon = h(Icon, { name: 'mdi:close' }) as any;
const MenuIcon = h(Icon, { name: 'mdi:menu' }) as any;
onMounted(async () => {
  await nextTick();
  canOpenMenu.value = true;
});
</script>

<template>
  <v-app-bar class="tw-px-2 md:tw-px-6 !tw-relative">
    <v-btn
      v-if="hasSider && canOpenMenu"
      :disabled="!canOpenMenu"
      class="tw-mr-4"
      :icon="isCollapsed ? MenuIcon : CloseIcon"
      @click="profileStore.toggleLayoutSiderCollapsed"
    >
    </v-btn>
    <NuxtLinkLocale to="/">
      <UseImage :src="`${config.app.baseURL}logo.svg`" class="logo logo-device">
        <template #loading>
          <v-skeleton-loader class="tw-w-16 logo-device" />
        </template>
        <template #error>Navinfo</template>
      </UseImage>
      <UseImage
        :src="`${config.app.baseURL}logo-icon-only.svg`"
        class="logo-icon-only logo-icon-only-device"
      >
        <template #loading>
          <v-skeleton-loader class="tw-w-16 logo-icon-only-device" />
        </template>
        <template #error>Navinfo</template>
      </UseImage>
    </NuxtLinkLocale>
    <template #append>
      <ClientOnly>
        <LayoutsToggleLocale />
        <LayoutsToggleTheme />
        <LayoutsJumpToGithub />
        <LayoutsUserInfo />
        <template #fallback>
          <v-skeleton-loader class="tw-w-32 tw-h-full" />
        </template>
      </ClientOnly>
    </template>
  </v-app-bar>
</template>

<style lang="scss" scoped>
.layout-header-container {
  @apply tw-flex tw-p-4;
}
.logo,
.logo-icon-only {
  @apply tw-h-8;
}

.logo-device {
  @apply tw-hidden md:tw-block;
}

.logo-icon-only-device {
  @apply tw-block md:tw-hidden;
}
</style>
