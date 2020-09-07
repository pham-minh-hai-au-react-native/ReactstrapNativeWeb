import Layout from './layout/index';
import {StyleSheet} from 'react-native';
import loadTheme from './scripts/loadTheme';
import {ListDynamicTheme} from './types';

export const layout = StyleSheet.create(Layout);
export const buildTheme = (listTheme?: ListDynamicTheme) => {
  return loadTheme(listTheme);
};
