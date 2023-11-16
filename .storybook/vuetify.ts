import 'vuetify/styles';
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import { mdi } from 'vuetify/iconsets/mdi-svg';

export default createVuetify({
  components,
  directives,
  icons: {
    sets: {
      mdi
    }
  }
});
