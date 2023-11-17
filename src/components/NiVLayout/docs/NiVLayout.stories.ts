import type { Meta, StoryObj } from '@storybook/vue3';
import { computed } from 'vue';
import IconMdiAccount from '~icons/mdi/account';
import IconMdiMenu from '~icons/mdi/menu';
import type { Merge } from 'type-fest';
import NiVLayout from '../src/NiVLayout.vue';

const Header = /* HTML */ `<v-app-bar>
  <template v-slot:prepend>
    <v-btn :icon="IconMdiMenu"></v-btn>
  </template>

  <v-app-bar-title>App Bar</v-app-bar-title>

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
    <v-btn :icon="IconMdiMenu"></v-btn>
  </template>

  <v-app-bar-title>App Bar</v-app-bar-title>

  <template v-slot:append>
    <v-btn :icon="IconMdiAccount"></v-btn>
  </template>
</v-app-bar>`;

const Content = /* HTML */ `<v-main class="ni-v-layout__main" scrollable>
  <v-container class="ni-v-layout__content">
    <div
      class="tw-daisy-hero tw-min-h-screen"
      style="background-image: url(images/5927666b31231563b86ee07b786e0fa8.jpg);"
    >
      <div class="tw-daisy-hero-overlay tw-bg-opacity-60"></div>
      <div class="tw-daisy-hero-content tw-text-center tw-text-neutral-content">
        <div class="tw-max-w-md">
          <h1 class="tw-mb-5 tw-text-5xl tw-font-bold">布局 (NiVLayout)</h1>
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
  name: '完整布局',
  args: {
    fitScreen: true,
    fullHeight: true
  },
  render: (args: any) => ({
    components: { NiVLayout },
    setup() {
      return { args, IconMdiAccount, IconMdiMenu };
    },
    template: /* HTML */ `<NiVLayout v-bind="args">
      <template #header>${Header}</template>
      ${Content}
      <template #footer>${Footer}</template>
    </NiVLayout>`
  })
};

export const FitScreen: Merge<Story, { args: Record<string, any>; argTypes: Record<string, any> }> =
  {
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
        const scrollThreshold = computed(() => args.scrollThreshold);
        const scrollBehavior = computed(() => args.scrollBehavior);
        const image = computed(() =>
          args.scrollBehavior === 'fade-image'
            ? 'images/5927666b31231563b86ee07b786e0fa8.jpg'
            : undefined
        );
        return { args, scrollBehavior, scrollThreshold, IconMdiAccount, IconMdiMenu, image };
      },
      template: /* HTML */ `<NiVLayout>
        <template #header>${InteractionsHeader}</template>
        <v-main class="ni-v-layout__main">
          <v-container class="ni-v-layout__content">
            <header class="tw-text-2xl">scroll-behavior为：{{scrollBehavior}}。</header>
            <header class="tw-text-2xl">scroll-threshold为：{{scrollThreshold}}。</header>
            <p v-for="item in Array.from({length:500},(_,idx)=>idx)">向下滚动查看效果</p>
          </v-container>
        </v-main>
        <template #footer>${Footer}</template>
      </NiVLayout>`
    }),
    parameters: {
      docs: { story: { inline: false, iframeHeight: 600 } }
    }
  };
