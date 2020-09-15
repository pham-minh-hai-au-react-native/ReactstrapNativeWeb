import React from 'react';
import {Props} from './types/index';
import {Span} from './styles/index.style.web';
const TextShadow: React.FC<Props> = ({
  style = {},
  children = 'Text Shadow',
  textShadow,
}: Props): React.ReactElement<HTMLSpanElement> => {
  const parseStyleHtml: any = style;
  return (
    <Span style={parseStyleHtml} textShadow={textShadow}>
      {children}
    </Span>
  );
};
export default TextShadow;
