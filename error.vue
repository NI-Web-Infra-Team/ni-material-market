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

const handleError = () =>
  clearError({ redirect: getRouterByName('index').path });
</script>

<template>
  <el-result :title="String(error.statusCode)" :sub-title="subTitle">
    <template #icon>
      <ErrorDenied v-if="[401, 403].includes(error.statusCode)" />
      <ErrorNotFound v-else-if="error.statusCode === 404" />
      <ErrorServer v-else />
    </template>
    <template #extra>
      <el-button type="primary" @click="handleError">{{
        t('error.backToHome')
      }}</el-button>
    </template>
  </el-result>
</template>
