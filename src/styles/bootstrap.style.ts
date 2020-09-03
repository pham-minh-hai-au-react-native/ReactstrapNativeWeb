import {Layout} from './layout/index';
import {StyleSheet} from 'react-native';

export const layout = StyleSheet.create(Layout);

export const bootstrap = StyleSheet.create({
  ...layout,
});
