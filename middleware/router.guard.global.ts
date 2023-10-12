import { useProfileStore } from '~/stores/profile';

export default defineNuxtRouteMiddleware(() => {
  const profileStore = useProfileStore();
  profileStore.toggleLayoutSiderCollapsed(true);
});
