import {Layout, LayoutFollowParent, LayoutFollowViewport} from './layout/index';
import {StyleSheet} from 'react-native';

export const layoutFollowParent = StyleSheet.create(LayoutFollowParent);
export const layoutFollowViewport = (width: number, height: number) => {
  const newLayoutFollowViewport: object = LayoutFollowViewport(width, height);
  return StyleSheet.create(newLayoutFollowViewport);
};
export const layout = (width: number, height: number) => {
  const newLayout: object = Layout(width, height);
  return StyleSheet.create(newLayout);
};

export const bootstrap = (width: number, height: number) => {
  const newLayout: object = Layout(width, height);
  return StyleSheet.create({
    ...newLayout,
  });
};
