import {TextStyle, ViewStyle, ColorValue} from 'react-native';
import {VariableColor} from './variableColor';

export interface VariableColor {
  [key: string]: ColorValue;
}

export interface VariableTextColor {
  [key: string]: Required<Pick<TextStyle, 'color'>>;
}

export interface VariableBackgroundColor {
  [key: string]: Required<Pick<ViewStyle, 'backgroundColor'>>;
}

export interface VariableBorderColor {
  [key: string]: Pick<
    ViewStyle,
    | 'borderBottomColor'
    | 'borderBottomEndRadius'
    | 'borderBottomLeftRadius'
    | 'borderBottomRightRadius'
    | 'borderBottomStartRadius'
    | 'borderBottomWidth'
    | 'borderColor'
    | 'borderEndColor'
    | 'borderLeftColor'
    | 'borderLeftWidth'
    | 'borderRadius'
    | 'borderRightColor'
    | 'borderRightWidth'
    | 'borderStartColor'
    | 'borderStyle'
    | 'borderTopColor'
    | 'borderTopEndRadius'
    | 'borderTopLeftRadius'
    | 'borderTopRightRadius'
    | 'borderTopStartRadius'
    | 'borderTopWidth'
    | 'borderWidth'
    | 'borderEndWidth'
    | 'borderStartWidth'
  >;
}

export interface VariableMargin {
  m0: Required<Pick<ViewStyle, 'margin'>>;
  m1: Required<Pick<ViewStyle, 'margin'>>;
  m2: Required<Pick<ViewStyle, 'margin'>>;
  m3: Required<Pick<ViewStyle, 'margin'>>;
  m4: Required<Pick<ViewStyle, 'margin'>>;
  m5: Required<Pick<ViewStyle, 'margin'>>;
  mx0: Required<Pick<ViewStyle, 'marginHorizontal'>>;
  mx1: Required<Pick<ViewStyle, 'marginHorizontal'>>;
  mx2: Required<Pick<ViewStyle, 'marginHorizontal'>>;
  mx3: Required<Pick<ViewStyle, 'marginHorizontal'>>;
  mx4: Required<Pick<ViewStyle, 'marginHorizontal'>>;
  mx5: Required<Pick<ViewStyle, 'marginHorizontal'>>;
  my0: Required<Pick<ViewStyle, 'marginVertical'>>;
  my1: Required<Pick<ViewStyle, 'marginVertical'>>;
  my2: Required<Pick<ViewStyle, 'marginVertical'>>;
  my3: Required<Pick<ViewStyle, 'marginVertical'>>;
  my4: Required<Pick<ViewStyle, 'marginVertical'>>;
  my5: Required<Pick<ViewStyle, 'marginVertical'>>;
  ml0: Required<Pick<ViewStyle, 'marginLeft'>>;
  ml1: Required<Pick<ViewStyle, 'marginLeft'>>;
  ml2: Required<Pick<ViewStyle, 'marginLeft'>>;
  ml3: Required<Pick<ViewStyle, 'marginLeft'>>;
  ml4: Required<Pick<ViewStyle, 'marginLeft'>>;
  ml5: Required<Pick<ViewStyle, 'marginLeft'>>;
  mr0: Required<Pick<ViewStyle, 'marginRight'>>;
  mr1: Required<Pick<ViewStyle, 'marginRight'>>;
  mr2: Required<Pick<ViewStyle, 'marginRight'>>;
  mr3: Required<Pick<ViewStyle, 'marginRight'>>;
  mr4: Required<Pick<ViewStyle, 'marginRight'>>;
  mr5: Required<Pick<ViewStyle, 'marginRight'>>;
  mt0: Required<Pick<ViewStyle, 'marginTop'>>;
  mt1: Required<Pick<ViewStyle, 'marginTop'>>;
  mt2: Required<Pick<ViewStyle, 'marginTop'>>;
  mt3: Required<Pick<ViewStyle, 'marginTop'>>;
  mt4: Required<Pick<ViewStyle, 'marginTop'>>;
  mt5: Required<Pick<ViewStyle, 'marginTop'>>;
  mb0: Required<Pick<ViewStyle, 'marginBottom'>>;
  mb1: Required<Pick<ViewStyle, 'marginBottom'>>;
  mb2: Required<Pick<ViewStyle, 'marginBottom'>>;
  mb3: Required<Pick<ViewStyle, 'marginBottom'>>;
  mb4: Required<Pick<ViewStyle, 'marginBottom'>>;
  mb5: Required<Pick<ViewStyle, 'marginBottom'>>;
}

export interface VariablePadding {
  p0: Required<Pick<ViewStyle, 'padding'>>;
  p1: Required<Pick<ViewStyle, 'padding'>>;
  p2: Required<Pick<ViewStyle, 'padding'>>;
  p3: Required<Pick<ViewStyle, 'padding'>>;
  p4: Required<Pick<ViewStyle, 'padding'>>;
  p5: Required<Pick<ViewStyle, 'padding'>>;
  px0: Required<Pick<ViewStyle, 'paddingHorizontal'>>;
  px1: Required<Pick<ViewStyle, 'paddingHorizontal'>>;
  px2: Required<Pick<ViewStyle, 'paddingHorizontal'>>;
  px3: Required<Pick<ViewStyle, 'paddingHorizontal'>>;
  px4: Required<Pick<ViewStyle, 'paddingHorizontal'>>;
  px5: Required<Pick<ViewStyle, 'paddingHorizontal'>>;
  py0: Required<Pick<ViewStyle, 'paddingVertical'>>;
  py1: Required<Pick<ViewStyle, 'paddingVertical'>>;
  py2: Required<Pick<ViewStyle, 'paddingVertical'>>;
  py3: Required<Pick<ViewStyle, 'paddingVertical'>>;
  py4: Required<Pick<ViewStyle, 'paddingVertical'>>;
  py5: Required<Pick<ViewStyle, 'paddingVertical'>>;
  pl0: Required<Pick<ViewStyle, 'paddingLeft'>>;
  pl1: Required<Pick<ViewStyle, 'paddingLeft'>>;
  pl2: Required<Pick<ViewStyle, 'paddingLeft'>>;
  pl3: Required<Pick<ViewStyle, 'paddingLeft'>>;
  pl4: Required<Pick<ViewStyle, 'paddingLeft'>>;
  pl5: Required<Pick<ViewStyle, 'paddingLeft'>>;
  pr0: Required<Pick<ViewStyle, 'paddingRight'>>;
  pr1: Required<Pick<ViewStyle, 'paddingRight'>>;
  pr2: Required<Pick<ViewStyle, 'paddingRight'>>;
  pr3: Required<Pick<ViewStyle, 'paddingRight'>>;
  pr4: Required<Pick<ViewStyle, 'paddingRight'>>;
  pr5: Required<Pick<ViewStyle, 'paddingRight'>>;
  pt0: Required<Pick<ViewStyle, 'paddingTop'>>;
  pt1: Required<Pick<ViewStyle, 'paddingTop'>>;
  pt2: Required<Pick<ViewStyle, 'paddingTop'>>;
  pt3: Required<Pick<ViewStyle, 'paddingTop'>>;
  pt4: Required<Pick<ViewStyle, 'paddingTop'>>;
  pt5: Required<Pick<ViewStyle, 'paddingTop'>>;
  pb0: Required<Pick<ViewStyle, 'paddingBottom'>>;
  pb1: Required<Pick<ViewStyle, 'paddingBottom'>>;
  pb2: Required<Pick<ViewStyle, 'paddingBottom'>>;
  pb3: Required<Pick<ViewStyle, 'paddingBottom'>>;
  pb4: Required<Pick<ViewStyle, 'paddingBottom'>>;
  pb5: Required<Pick<ViewStyle, 'paddingBottom'>>;
}

export interface Color {
  colors: VariableColor;
}

export interface TextColor {
  textColor: VariableTextColor;
}

export interface BorderColor {
  borderColor: VariableBorderColor;
}

export interface BackgroundColor {
  bgColor: VariableBackgroundColor;
}

export interface MarginSpacer {
  marginSpacer: VariableMargin;
}

export interface PaddingSpacer {
  paddingSpacer: VariablePadding;
}

export interface Theme
  extends Color,
    TextColor,
    BackgroundColor,
    BorderColor,
    MarginSpacer,
    PaddingSpacer {
  spacer?: number;
  styleSheet: any;
}

export interface DynamicTheme extends Color {
  spacer?: number;
}

export interface ListTheme {
  styledComponent?: any;
  [key: string]: Theme;
}

export interface ListDynamicTheme {
  [key: string]: DynamicTheme;
}
