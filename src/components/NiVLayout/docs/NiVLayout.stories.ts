import type { Meta, StoryObj } from '@storybook/vue3';

import NiVLayout from '../src/NiVLayout.vue';

const meta = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/vue/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Vuetify/Layout',
  component: NiVLayout,
  render: (args: any) => ({
    components: { NiVLayout },
    setup() {
      return { args };
    },
    template: `<NiVLayout>
    <template #header>
      <v-app-bar>
        <template v-slot:prepend>
          <v-btn :icon="mdiMenu"></v-btn>
        </template>

        <v-app-bar-title>布局</v-app-bar-title>

        <template v-slot:append>
          <v-btn :icon="mdiAccount"></v-btn>
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
  </NiVLayout>`
  }),
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen'
  },
  // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/vue/writing-docs/autodocs
  tags: ['autodocs']
} satisfies Meta<typeof NiVLayout>;

export default meta;
type Story = StoryObj<typeof meta>;

export const FullHeight: Story = {
  args: {
    fullHeight: true
  }
};

export const FitScreen: Story = {
  args: {
    fitScreen: true
  }
};
