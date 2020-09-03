import React from 'react';
import {View} from 'react-native';
import {DebugProps} from '../types/index';
import {styles} from './styles/index.style';
import {useDebug} from '../hooks/useDebug';
interface Props extends DebugProps {
  children: React.ReactNode;
}
export const Row: React.FC<Props> = ({
  children,
  debug = false,
}): React.ReactElement => {
  const styleDebug = useDebug(debug);
  return <View style={[styles.row, styleDebug.current]}>{children}</View>;
};
