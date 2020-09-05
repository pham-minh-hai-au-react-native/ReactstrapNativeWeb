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
export const buildTheme = (listTheme?: ListDynamicTheme): ListTheme => {
  const result: ListTheme = {};
  if (listTheme === undefined) {
    result.default = {colors: {}, textColor: {}};
    result.default.colors = theme.colors;
    for (const propertyColor in theme.colors) {
      result.default.textColor[`text${upperFirstLetter(propertyColor)}`] = {
        color: theme.colors[propertyColor],
      };
    }
    return result;
  }
  listTheme.default.colors = listTheme.hasOwnProperty('default')
    ? {...listTheme.default.colors, ...theme.colors}
    : theme.colors;

  for (const propertyTheme in listTheme) {
    result[propertyTheme] = {...listTheme[propertyTheme], ...{textColor: {}}};
    for (const propertyColor in listTheme[propertyTheme].colors) {
      result[propertyTheme].textColor[
        `text${upperFirstLetter(propertyColor)}`
      ] = {
        color: listTheme[propertyTheme].colors[propertyColor],
      };
    }
  }
  return result;
};
export const layout = StyleSheet.create(Layout);

export const bootstrap = StyleSheet.create({
  ...Layout,
});
