<script setup lang="ts">
const clientTime = ref(new Date().toLocaleString());
const { data: osData } =
  await useBffExampleFetch<Record<string, string>>('/os');

const serverTime = computed(() => {
  return osData.value?.serverTime;
});
</script>
<template>
  <div>
    <h1>此页面在示例中使用内存进行缓存，缓存时间为 10 秒</h1>
    <h1>
      多次刷新页面，客户端时间会随着 js 的执行变化，服务端会因为缓存不会改变
    </h1>
    <p>客户端时间：{{ clientTime }}</p>
    <p>服务端时间：{{ serverTime }}</p>
  </div>
</template>
