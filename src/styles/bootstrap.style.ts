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
import {css} from 'styled-components/native';

export const buildTheme = (listTheme?: ListDynamicTheme) => {
  const themes: ListTheme = loadTheme(listTheme);
  const styledComponent = {
    ...LayoutStyledComponent,
    background: (color: string) => {
      return css`
        background-color: ${color};
      `;
    },
  };
  console.log('styled component');
  console.log(styledComponent);
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
  }
  themes.styledComponent = styledComponent;
  return themes;
};
