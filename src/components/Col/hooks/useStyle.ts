import React, {MutableRefObject} from 'react';
import {ViewStyle} from 'react-native';
import {TypeCol, TypeColOptional} from '../types';
import {getStyleColumn, getStyleOffset} from '../utils';
export interface StyleCol {
  size: ViewStyle;
  offset: ViewStyle;
}
export const useStyle = (
  col: TypeCol | TypeColOptional | undefined,
): MutableRefObject<StyleCol> => {
  const style = React.useRef<StyleCol>({
    size: {},
    offset: {},
  });
  if (typeof col === 'string') {
    style.current.size = getStyleColumn(col);
  } else if (typeof col === 'object') {
    style.current.size = col.size ? getStyleColumn(col.size) : {};
    style.current.offset = col.offset ? getStyleOffset(col.offset) : {};
  }
  return style;
};
