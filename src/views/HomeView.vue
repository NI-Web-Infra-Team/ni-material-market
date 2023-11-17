<script setup lang="ts">
import NiVLayout from '@/components/NiVLayout';
import IconMdiAccount from '~icons/mdi/account';
import IconMdiMenu from '~icons/mdi/menu';
</script>

<template>
  <NiVLayout>
    <template #header>
      <v-app-bar>
        <template v-slot:prepend>
          <v-btn :icon="IconMdiMenu"></v-btn>
        </template>

        <v-app-bar-title>布局</v-app-bar-title>

        <template v-slot:append>
          <v-btn :icon="IconMdiAccount"></v-btn>
        </template>
      </v-app-bar>
    </template>

    <v-main class="ni-v-layout__main" scrollable>
      <v-container class="ni-v-layout__content">
        内容1 <br />
        内容 <br />
        内容 <br />
        内容 <br />
        内容 <br />
        内容 <br />
        内容 <br />
        内容 <br />
        内容 <br />
        内容 <br />
        内容 <br />
        内容 <br />
        内容 <br />
        内容 <br />
        内容 <br />
        内容 <br />
        内容 <br />
        内容 <br />
        内容 <br />
        内容 <br />
        内容 <br />
        内容 <br />
        内容 <br />
        内容 <br />
        内容 <br />
        内容 <br />
        内容 <br />
        内容 <br />
        内容 <br />
        内容 <br />
        内容 <br />
        内容 <br />
        内容 <br />
        内容 <br />
        内容 <br />
        内容 <br />
        内容 <br />
        内容 <br />
        内容 <br />
        内容 <br />
        内容 <br />
        内容 <br />
        内容 <br />
        内容 <br />
        内容 <br />
        内容 <br />
        内容 <br />
        内容 <br />
        内容 <br />
        内容 <br />
        内容 <br />
        内容 <br />
        内容 <br />
        内容 <br />
        内容 <br />
        内容 <br />
        内容 <br />
        内容 <br />
        内容 <br />
        内容 <br />
        内容 <br />
        内容 <br />
        内容 <br />
        内容 <br />
        内容 <br />
        内容 <br />
        内容 <br />
        内容 <br />
        内容 <br />
        内容 <br />
        内容 <br />
        内容 <br />
        内容 <br />
        内容 <br />
        内容 <br />
        内容 <br />
        内容 <br />
        内容 <br />
        内容 <br />
        内容 <br />
        内容 <br />
        内容 <br />
        内容 <br />
        内容 <br />
        内容 <br />
        内容 <br />
        内容 <br />
        内容 <br />
        内容 <br />
        内容 <br />
        内容 <br />
        内容 <br />
        内容 <br />
        内容 <br />
        内容 <br />
        内容 <br />
        内容 <br />
        内容 <br />
        内容 <br />
        内容 <br />
        内容 <br />
        内容 <br />
        内容 <br />
        内容 <br />
        内容 <br />
        内容 <br />
        内容 <br />
        内容 <br />
        内容3 <br />
      </v-container>
    </v-main>

    <template #footer>
      <v-footer inset app border> footer </v-footer>
    </template>
  </NiVLayout>
</template>
