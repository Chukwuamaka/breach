import { extendTheme } from '@chakra-ui/react';
import colors from './colors';
import buttonTheme from './components/button';
import typography from './typography';
import inputTheme from './components/input';
import customLinkTheme from './components/custom_link';

const overrides = {
  colors,
  ...typography,
  components: {
    Button: buttonTheme,
    CustomLink: customLinkTheme,
    Input: inputTheme,
  }
}

const theme = extendTheme(overrides);

export default theme;