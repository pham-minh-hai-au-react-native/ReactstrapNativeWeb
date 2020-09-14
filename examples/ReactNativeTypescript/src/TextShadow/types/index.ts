import {TextStyle} from 'react-native';

export type PropsTextShadow = Pick<
  TextStyle,
  'textShadowColor' | 'textShadowOffset' | 'textShadowRadius'
>;
export interface Props {
  children?: string;
  shadows: Array<PropsTextShadow>;
  style?: Omit<
    TextStyle,
    'textShadowColor' | 'textShadowOffset' | 'textShadowRadius'
  >;
}
