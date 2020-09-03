import React from 'react';
import {View, useWindowDimensions} from 'react-native';
import {DebugProps} from '../types/index';
import {useDebug} from '../hooks/useDebug';
import {TypeCol, TypeColOptional} from './types/index';
import {useStyle} from './hooks/useStyle';

interface Props extends DebugProps {
  col: TypeCol;
  sm?: TypeColOptional;
  md?: TypeColOptional;
  lg?: TypeColOptional;
  xl?: TypeColOptional;
  children: React.ReactNode;
}

export const Col: React.FC<Props> = ({
  children,
  debug = false,
  col,
  xl,
  lg,
  md,
  sm,
}): React.ReactElement => {
  const width: number = useWindowDimensions().width;
  const styleDebug = useDebug(debug);
  const styleCol = useStyle(col);
  const styleLG = useStyle(lg);
  const styleXL = useStyle(xl);
  const styleMD = useStyle(md);
  const styleSM = useStyle(sm);
  const styleCommon = [
    styleCol.current.size,
    styleCol.current.offset,
    styleDebug.current,
  ];
  return (
    <>
      {width <= 576 ? (
        <View
          style={[styleCommon, styleSM.current.size, styleSM.current.offset]}>
          {children}
        </View>
      ) : width <= 768 ? (
        <View
          style={[styleCommon, styleMD.current.size, styleMD.current.offset]}>
          {children}
        </View>
      ) : width <= 992 ? (
        <View
          style={[styleCommon, styleLG.current.size, styleLG.current.offset]}>
          {children}
        </View>
      ) : width <= 1200 ? (
        <View
          style={[styleCommon, styleXL.current.size, styleXL.current.offset]}>
          {children}
        </View>
      ) : (
        <View style={styleCommon}>{children}</View>
      )}
    </>
  );
};
