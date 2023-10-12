<script lang="ts" setup>
import { UseImage } from '@vueuse/components';

const { t } = useI18n();
const router = useRouter();
const dialog = ref(false);

/**
 * 退出登录
 */
async function handleSignOut() {
  try {
    dialog.value = false;
    await router.replace({ path: getRouterByName('index').path });
  } catch {}
}
</script>
<template>
  <v-menu>
    <template #activator="{ props }">
      <v-btn v-bind="props" icon>
        <v-avatar>
          <v-img src="/images/favicon-32.png" alt="admin"></v-img>
        </v-avatar>
      </v-btn>
    </template>
    <v-list>
      <v-list-item>
        <div class="tw-flex tw-items-center tw-gap-3">
          <UseImage
            src="/images/favicon-32.png"
            class="tw-h-8 tw-rounded-full tw-pointer-events-none"
          >
            <template #loading>
              <v-skeleton-loader class="tw-h-8 tw-w-16" />
            </template>
            <template #error>admin</template>
          </UseImage>
          <p>admin</p>
        </div>
      </v-list-item>
      <v-divider></v-divider>
      <v-list-item @click="dialog = true">
        <v-list-item-title>{{ t('signIn.signOut') }}</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-menu>
  <v-dialog v-model="dialog" persistent class="tw-w-96">
    <v-card>
      <v-card-title class="text-h5">{{ t('signIn.signOut') }}</v-card-title>
      <v-card-text>{{ t('signIn.signOutConfirm') }}</v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn variant="text" @click="dialog = false">{{ t('cancel') }}</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
