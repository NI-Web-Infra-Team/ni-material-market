<script setup lan="ts">
const locales = import.meta.glob(
  '/node_modules/element-plus/dist/locale/*.min.mjs'
);

const { locale: currentLocale } = useI18n();

const locale = ref((await useAsyncData(loadLocale)).data);

/**
 * @returns {Promise<import('element-plus').ElLocale>} element-plus 的语言包
 */
async function loadLocale() {
  return (
    await locales[
      `/node_modules/element-plus/dist/locale/${currentLocale.value.toLocaleLowerCase()}.min.mjs`
    ]()
  ).default;
}

watch(currentLocale, async () => {
  locale.value = await loadLocale();
});
</script>

<template>
  <el-config-provider :locale="locale">
    <slot />
  </el-config-provider>
</template>
