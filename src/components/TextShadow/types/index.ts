import {ColorValue, TextStyle} from 'react-native';

export type CssTextShadow = {
  horizontalOffset: number;
  verticalOffset: number;
  blurRadius?: number;
  color: ColorValue;
};
export type PropsTextShadow = Pick<
  TextStyle,
  'textShadowColor' | 'textShadowOffset' | 'textShadowRadius'
>;
export interface Props {
  children?: string;
  textShadow: string;
  style?: Omit<
    TextStyle,
    'textShadowColor' | 'textShadowOffset' | 'textShadowRadius'
  >;
}
