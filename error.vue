<script setup lang="ts">
const props = defineProps<{
  error: {
    message: string;
    stack: string;
    statusCode: number;
    statusMessage: string;
    url: string;
  };
}>();
const { t } = useI18n();

const subTitle = computed(() => {
  if ([401, 403].includes(props.error.statusCode)) {
    return t('error.unauthorizedOrForbidden');
  }
  if (props.error.statusCode === 404) {
    return t('error.notFound');
  }
  if (props.error.statusCode >= 500 && props.error.statusCode < 600) {
    return t('error.internalServerError');
  }
  return props.error.message || props.error.statusMessage;
});

onMounted(() => {
  if (process.client) {
    // eslint-disable-next-line no-console
    console.error(props.error);
  }
});

const handleError = () =>
  clearError({ redirect: getRouterByName('index').path });
</script>

<template>
  <div class="tw-daisy-hero tw-h-full">
    <div class="tw-daisy-hero-overlay"></div>
    <div class="tw-daisy-hero-content tw-text-center tw-text-neutral-content">
      <div class="tw-max-w-md">
        <div class="icon">
          <ErrorDenied v-if="[401, 403].includes(error.statusCode)" />
          <ErrorNotFound v-else-if="error.statusCode === 404" />
          <ErrorServer v-else />
        </div>
        <h1 class="tw-mb-5 tw-text-5xl tw-font-bold">
          {{ String(error.statusCode) }}
        </h1>
        <p class="tw-mb-5">{{ subTitle }}</p>
        <p class="tw-mb-5">
          <v-btn color="primary" @click="handleError">{{
            t('error.backToHome')
          }}</v-btn>
        </p>
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
.icon {
  @apply tw-w-32 tw-mx-auto tw-mb-3;
}
</style>
