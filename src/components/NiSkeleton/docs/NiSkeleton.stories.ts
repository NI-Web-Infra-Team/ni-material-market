import type { Meta, StoryObj } from '@storybook/vue3';

import type { Merge } from 'type-fest';
import NiSkeletonAvatar from '../src/NiSkeletonAvatar.vue';
import NiSkeletonButtonPrimary from '../src/NiSkeletonButtonPrimary.vue';
import NiSkeletonButtonSecondary from '../src/NiSkeletonButtonSecondary.vue';
import NiSkeletonCard1 from '../src/NiSkeletonCard1.vue';
import NiSkeletonCard2 from '../src/NiSkeletonCard2.vue';
import NiSkeletonCard3 from '../src/NiSkeletonCard3.vue';
import NiSkeletonCTASection from '../src/NiSkeletonCTASection.vue';
import NiSkeletonFile1_1 from '../src/NiSkeletonFile1_1.vue';
import NiSkeletonFile4_3 from '../src/NiSkeletonFile4_3.vue';
import NiSkeletonFile16_9 from '../src/NiSkeletonFile16_9.vue';
import NiSkeletonHeading from '../src/NiSkeletonHeading.vue';
import NiSkeletonImage1_1 from '../src/NiSkeletonImage1_1.vue';
import NiSkeletonImage4_3 from '../src/NiSkeletonImage4_3.vue';
import NiSkeletonImage16_9 from '../src/NiSkeletonImage16_9.vue';
import NiSkeletonInput from '../src/NiSkeletonInput.vue';
import NiSkeletonInputActive from '../src/NiSkeletonInputActive.vue';
import NiSkeletonListClosed from '../src/NiSkeletonListClosed.vue';
import NiSkeletonListOpen from '../src/NiSkeletonListOpen.vue';
import NiSkeletonLoader from '../src/NiSkeletonLoader.vue';
import NiSkeletonTextBody1 from '../src/NiSkeletonTextBody1.vue';
import NiSkeletonTextBody2 from '../src/NiSkeletonTextBody2.vue';
import NiSkeletonTextBody3 from '../src/NiSkeletonTextBody3.vue';
import NiSkeletonVideo1_1 from '../src/NiSkeletonVideo1_1.vue';
import NiSkeletonVideo4_3 from '../src/NiSkeletonVideo4_3.vue';
import NiSkeletonVideo16_9 from '../src/NiSkeletonVideo16_9.vue';

const meta = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/vue/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: '通用/骨架屏 (NiSkeleton)',
  component: NiSkeletonAvatar,
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen'
  }
} satisfies Meta<typeof NiSkeletonAvatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Layout: Story = {
  name: '全部示例',
  render: (args: any) => ({
    components: {
      NiSkeletonAvatar,
      NiSkeletonButtonPrimary,
      NiSkeletonButtonSecondary,
      NiSkeletonInputActive,
      NiSkeletonInput,
      NiSkeletonListClosed,
      NiSkeletonListOpen,
      NiSkeletonLoader,
      NiSkeletonHeading,
      NiSkeletonTextBody1,
      NiSkeletonTextBody2,
      NiSkeletonTextBody3,
      NiSkeletonCard1,
      NiSkeletonCard2,
      NiSkeletonCard3,
      NiSkeletonCTASection,
      NiSkeletonImage1_1,
      NiSkeletonImage4_3,
      NiSkeletonImage16_9,
      NiSkeletonVideo1_1,
      NiSkeletonVideo4_3,
      NiSkeletonVideo16_9,
      NiSkeletonFile1_1,
      NiSkeletonFile4_3,
      NiSkeletonFile16_9
    },
    setup() {
      return { args };
    },
    template: /* HTML */ `<div style="display:flex;flex-wrap:wrap;">
      <NiSkeletonAvatar style="width: 200px" />
      <NiSkeletonButtonPrimary style="width: 200px" />
      <NiSkeletonButtonSecondary style="width: 200px" />
      <NiSkeletonInput style="width: 200px" />
      <NiSkeletonInputActive style="width: 200px" />
      <NiSkeletonListClosed style="width: 200px" />
      <NiSkeletonListOpen style="width: 200px" />
      <NiSkeletonLoader style="width: 200px" />
      <NiSkeletonHeading style="width: 200px" />
      <NiSkeletonTextBody1 style="width: 200px" />
      <NiSkeletonTextBody2 style="width: 200px" />
      <NiSkeletonTextBody3 style="width: 200px" />
      <NiSkeletonCard1 style="width: 200px" />
      <NiSkeletonCard2 style="width: 200px" />
      <NiSkeletonCard3 style="width: 200px" />
      <NiSkeletonCTASection style="width: 200px" />
      <NiSkeletonImage1_1 style="width: 200px" />
      <NiSkeletonImage4_3 style="width: 200px" />
      <NiSkeletonImage16_9 style="width: 200px" />
      <NiSkeletonVideo1_1 style="width: 200px" />
      <NiSkeletonVideo4_3 style="width: 200px" />
      <NiSkeletonVideo16_9 style="width: 200px" />
      <NiSkeletonFile1_1 style="width: 200px" />
      <NiSkeletonFile4_3 style="width: 200px" />
      <NiSkeletonFile16_9 style="width: 200px" />
    </div>`
  })
};

export const Avatar: Merge<Story, { args: Record<string, any>; argTypes: Record<string, any> }> = {
  name: '头像',
  args: {
    color: '#000000'
  },
  argTypes: {
    color: {
      control: { type: 'color' }
    }
  },
  render: (args: any) => ({
    components: { NiSkeletonAvatar },
    setup() {
      return {
        args,
        NiSkeletonAvatar
      };
    },
    template: /* HTML */ `<NiSkeletonAvatar style="width:200px" :style="{color:args.color}" />`
  })
};
