import {ColorValue, TextStyle} from 'react-native';

export type CssShadow = {
  horizontalOffset: number;
  verticalOffset: number;
  blurRadius?: number;
  color: ColorValue;
};

export type TextStyleShadow = Pick<
  TextStyle,
  'textShadowColor' | 'textShadowOffset' | 'textShadowRadius'
>;
