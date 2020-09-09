import React from 'react';
import {DebugProps} from '../../types';
import {Row as RowStyle} from './styles/index.style';
interface Props extends DebugProps {
  children: React.ReactNode;
}
export const Row: React.FC<Props> = ({
  children,
  debug = false,
}): React.ReactElement => {
  return <RowStyle debug={debug}>{children}</RowStyle>;
};
