import Layout from './layout/index';
import {StyleSheet} from 'react-native';
import loadTheme from './scripts/loadTheme';
import {ListDynamicTheme, ListTheme} from './types';

export const layout = StyleSheet.create(Layout);
export const buildTheme = (listTheme?: ListDynamicTheme) => {
  const themes: ListTheme = loadTheme(listTheme);
  for (const theme in themes) {
    themes[theme].styleSheet = {
      ...themes[theme].bgColor,
      ...themes[theme].textColor,
      ...themes[theme].borderColor,
      ...themes[theme].paddingSpacer,
      ...themes[theme].marginSpacer,
      ...Layout,
    };
  }
  return themes;
};
