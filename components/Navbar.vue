<template>
  <div class="tw-daisy-navbar">
    <div class="tw-flex-1">
      <slot />
    </div>
    <div v-if="$slots.right" class="flex-none">
      <slot name="right" />
    </div>
  </div>
</template>
