import Layout from './layout/index';
import LayoutStyledComponent from './layout/layout.style';
import Border from './border/index';
import Overflow from './overflow/index';
import Display from './display/index';
import Position from './position/index';
import ZIndex from './zindex/index';
import Font from './font/index';
import Flex from './flex/index';
import loadTheme from './utils/loadTheme';
import {ListDynamicTheme, ListTheme} from './types';

export const buildTheme = (listTheme?: ListDynamicTheme) => {
  const themes: ListTheme = loadTheme(listTheme);
  console.log('in ra themes');
  console.log(themes);
  for (const theme in themes) {
    themes[theme].styleSheet = {
      ...themes[theme].bgColor,
      ...themes[theme].textColor,
      ...themes[theme].borderColor,
      ...themes[theme].paddingSpacer,
      ...themes[theme].marginSpacer,
      ...Layout,
      ...Border,
      ...Display,
      ...Overflow,
      ...Position,
      ...ZIndex,
      ...Font,
      ...Flex,
    };
    themes[theme].styledComponent = {
      ...themes[theme].styledComponent,
      ...LayoutStyledComponent,
    };
  }
  return themes;
};
