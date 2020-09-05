import Layout from './layout/index';
import {ColorValue, StyleSheet, TextStyle, ViewStyle} from 'react-native';

const upperFirstLetter = (str: string): string => {
    return str.charAt(0).toUpperCase() + str.slice(1);
};

interface VariableColor {
    [key: string]: ColorValue;
}

interface VariableTextColor {
    [key: string]: Required<Pick<TextStyle, 'color'>>;
}

interface VariableBackgroundColor {
    [key: string]: Required<Pick<ViewStyle, 'backgroundColor'>>;
}

interface Color {
    colors: VariableColor;
}

interface TextColor {
    textColor: VariableTextColor;
}

interface BackgroundColor {
    bgColor: VariableBackgroundColor;
}

interface Theme extends Color, TextColor, BackgroundColor {
}

interface DynamicTheme extends Color {
}

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
        result.default = {colors: {}, textColor: {}, bgColor: {}};
        result.default.colors = theme.colors;
        for (const propertyColor in theme.colors) {
            result.default.textColor[`text${upperFirstLetter(propertyColor)}`] = {
                color: theme.colors[propertyColor],
            };
            result.default.bgColor[`bg${upperFirstLetter(propertyColor)}`] = {
                backgroundColor: theme.colors[propertyColor],
            };
        }
        return result;
    }
    if(listTheme.hasOwnProperty('default')){
        listTheme.default.colors = {...listTheme.default.colors, ...theme.colors};
    }else {
        listTheme.default = { colors:{}};
        listTheme.default.colors = theme.colors;
    }

    for (const propertyTheme in listTheme) {
        result[propertyTheme] = {...listTheme[propertyTheme], ...{textColor: {}}, ...{bgColor: {}}};
        for (const propertyColor in listTheme[propertyTheme].colors) {
            result[propertyTheme].textColor[
                `text${upperFirstLetter(propertyColor)}`
                ] = {
                color: listTheme[propertyTheme].colors[propertyColor],
            };
            result[propertyTheme].bgColor[
                `bg${upperFirstLetter(propertyColor)}`
                ] = {
                backgroundColor: listTheme[propertyTheme].colors[propertyColor],
            };
        }
    }
    console.log(result);
    return result;
};
export const layout = StyleSheet.create(Layout);

export const bootstrap = StyleSheet.create({
    ...Layout,
});
