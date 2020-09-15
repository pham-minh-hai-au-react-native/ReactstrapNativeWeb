import React from 'react';
import {Props} from './types/index';

const TextShadow: React.FC<Props> = ({
  style = {},
  children = 'Text Shadow',
  textShadow,
}: Props): React.ReactElement<HTMLSpanElement> => {
  const styleSpan: any = {...style, ...{textShadow}};
  return <span style={styleSpan}>{children}</span>;
};
export default TextShadow;
