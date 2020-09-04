import Layout from './layout/index';
import {ColorValue, StyleSheet, TextStyle} from 'react-native';

const upperFirstLetter = (str: string): string => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};
interface VariableColor {
  [key: string]: ColorValue;
}
interface VariableTextColor {
  [key: string]: Required<Pick<TextStyle, 'color'>>;
}
interface Color {
  colors: VariableColor;
}
interface TextColor {
  textColor: VariableTextColor;
}
interface Theme extends Color, TextColor {}
interface DynamicTheme extends Color {}
interface ListTheme {
  [key: string]: Theme;
}
interface ListDynamicTheme {
  [key: string]: DynamicTheme;
}
const theme: DynamicTheme = {
  colors: {
    primary: '#007bff',
  },
};
export const buildTheme = (listTheme?: ListDynamicTheme): any => {
  const getColors = listTheme?.hasOwnProperty('default')
    ? listTheme?.default.colors
    : {};
  const {colors} = theme;
  console.log('in ra getColors');
  console.log(getColors);
  console.log('in ra colors');
  console.log(colors);
};
export const layout = StyleSheet.create(Layout);

export const bootstrap = StyleSheet.create({
  ...Layout,
});
