import type { Meta, StoryObj } from '@storybook/vue3';
import { computed, ref } from 'vue';
import IconMdiAccount from '~icons/mdi/account';
import IconMdiMenu from '~icons/mdi/menu';
import type { Merge } from 'type-fest';
import NiVLayout from '../src/NiVLayout.vue';
import { html } from 'js-beautify';

const Header = /* HTML */ `<v-app-bar>
  <template v-slot:prepend>
    <v-btn :icon="IconMdiMenu" @click="drawer=true"></v-btn>
  </template>

  <v-app-bar-title>应用名称</v-app-bar-title>

  <template v-slot:append>
    <v-btn :icon="IconMdiAccount"></v-btn>
  </template>
</v-app-bar>`;

const InteractionsHeader = /* HTML */ `<v-app-bar
  :scroll-threshold="scrollThreshold"
  :scroll-behavior="scrollBehavior"
  :image="image"
>
  <template v-slot:prepend>
    <v-btn :icon="IconMdiMenu" @click="drawer=true"></v-btn>
  </template>

  <v-app-bar-title>应用名称</v-app-bar-title>

  <template v-slot:append>
    <v-btn :icon="IconMdiAccount"></v-btn>
  </template>
</v-app-bar>`;

const drawer = `<v-navigation-drawer v-model="drawer" temporary>
<v-list-item title="Ni"></v-list-item>
<v-divider></v-divider>
<v-list density="compact" nav>
  <v-list-item title="首页" value="home"></v-list-item>
  <v-list-item title="关于" value="about"></v-list-item>
</v-list>
</v-navigation-drawer>`;
const Content = /* HTML */ `${drawer}<v-main class="ni-v-layout__main" scrollable>
    <v-container class="ni-v-layout__content">
      <div
        class="tw-daisy-hero tw-min-h-screen"
        style="background-image: url(images/5927666b31231563b86ee07b786e0fa8.jpg);"
      >
        <div class="tw-daisy-hero-overlay tw-bg-opacity-60"></div>
        <div class="tw-daisy-hero-content tw-text-center tw-text-neutral-content">
          <div class="tw-max-w-md">
            <h1 class="tw-mb-5 tw-text-5xl tw-font-bold">NI Web Infra Team</h1>
            <p class="tw-mb-5">
              滚滚长江东逝水，浪花淘尽英雄。是非成败转头空，青山依旧在，几度夕阳红。白发渔樵江渚上，惯看秋月春风。一壶浊酒喜相逢，古今多少事，
              都付笑谈中。
            </p>
          </div>
        </div>
      </div>
    </v-container>
  </v-main>`;

const Footer = /* HTML */ `<v-footer inset app border>NI Web Infra Team</v-footer>`;

const meta = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/vue/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'vuetify/布局 (NiVLayout)',
  component: NiVLayout,
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen'
  }
} satisfies Meta<typeof NiVLayout>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Layout: Story = {
  name: '传统布局',
  args: {
    fitScreen: true,
    fullHeight: true
  },
  render: (args: any) => ({
    components: { NiVLayout },
    setup() {
      const drawer = ref(false);
      return { args, IconMdiAccount, IconMdiMenu, drawer };
    },
    template: /* HTML */ `<NiVLayout :fit-screen="args.fitScreen" :full-height="args.fullHeight">
      <template #header>${Header}</template>
      ${Content}
      <template #footer>${Footer}</template>
    </NiVLayout>`
  })
};

export const Appbar: Merge<Story, { args: Record<string, any>; argTypes: Record<string, any> }> = {
  name: '应用栏的滚动行为',
  args: {
    scrollThreshold: 300,
    scrollBehavior: 'hide'
  },
  argTypes: {
    scrollThreshold: { control: { type: 'range', min: 0, max: 1000, step: 1 } },
    scrollBehavior: {
      options: [undefined, 'hide', 'collapse', 'elevate', 'fade-image'],
      control: {
        type: 'select',
        labels: {
          undefined: '默认',
          hide: 'hide: 默认插槽内容会随用户向下滚动而隐藏。而 extension 插槽则会保留。',
          collapse: '会在角落收缩成一团。',
          elevate:
            '当向下滚动时，会在应用栏添加阴影效果。忽略 scroll-threshold 属性，任意的滚动都会添加阴影。',
          'fade-image': '背景图片会随着滚动条下拉而渐隐。'
        }
      }
    }
  },
  render: (args: any) => ({
    components: { NiVLayout },
    setup() {
      const drawer = ref(false);
      const scrollThreshold = computed(() => args.scrollThreshold);
      const scrollBehavior = computed(() => args.scrollBehavior);
      const image = computed(() =>
        args.scrollBehavior === 'fade-image'
          ? 'images/5927666b31231563b86ee07b786e0fa8.jpg'
          : undefined
      );
      return {
        args,
        scrollBehavior,
        scrollThreshold,
        IconMdiAccount,
        IconMdiMenu,
        image,
        drawer
      };
    },
    template: /* HTML */ `<NiVLayout>
      <template #header>${InteractionsHeader}</template>
      ${drawer}
      <v-main class="ni-v-layout__main">
        <v-container class="ni-v-layout__content">
          <header class="tw-text-xl">scroll-behavior为：{{scrollBehavior}}。</header>
          <header class="tw-text-xl">
            scroll-threshold{{scrollThreshold}}，会在卷起 {{scrollThreshold}} px 的时候显示对应的
            scroll-behavior 效果
          </header>
          <p v-for="item in Array.from({length:500},(_,idx)=>idx)">向下滚动查看效果</p>
        </v-container>
      </v-main>
      <template #footer>${Footer}</template>
    </NiVLayout>`
  }),
  parameters: {
    docs: {
      story: { inline: false, iframeHeight: 600 },
      source: {
        transform(_, item) {
          return html(item.moduleExport.render().template, { indent_size: '2' });
        }
      }
    }
  }
};
