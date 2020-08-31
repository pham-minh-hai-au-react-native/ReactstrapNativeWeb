import {Layout, LayoutFollowParent, LayoutFollowViewport} from './layout/index';
import {StyleSheet} from 'react-native';

export const layoutFollowParent = StyleSheet.create(LayoutFollowParent);
export const layoutFollowViewport = StyleSheet.create(LayoutFollowViewport);
export const layout = StyleSheet.create(Layout);

export const bootstrap = StyleSheet.create({
  ...Layout,
});
