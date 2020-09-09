import React from 'react';
import {useWindowDimensions} from 'react-native';
import {DebugProps} from '../../types';
import {TypeCol, TypeColOptional} from './types';
import {
  ColAuto,
  Col1,
  Col2,
  Col3,
  Col4,
  Col5,
  Col6,
  Col7,
  Col8,
  Col9,
  Col10,
  Col11,
  Col12,
} from './styles/index.style';

interface Props extends DebugProps {
  col: TypeCol;
  sm?: TypeColOptional;
  md?: TypeColOptional;
  lg?: TypeColOptional;
  xl?: TypeColOptional;
  children: React.ReactNode;
}

const colComponents: any = {
  colauto: ColAuto,
  col1: Col1,
  col2: Col2,
  col3: Col3,
  col4: Col4,
  col5: Col5,
  col6: Col6,
  col7: Col7,
  col8: Col8,
  col9: Col9,
  col10: Col10,
  col11: Col11,
  col12: Col12,
};
const getCol = (col: TypeCol | TypeColOptional) => {
  let Component: any;
  let offset;
  if (typeof col === 'string' || typeof col === 'number') {
    const key = `col${col}`;
    Component = colComponents[key];
  } else {
    const key = `col${col.size}`;
    offset = col.offset ?? undefined;
    Component = colComponents[key];
  }
  return {
    component: Component,
    offset: offset,
  };
};
export const Col: React.FC<Props> = ({
  children,
  col,
  xl,
  lg,
  md,
  sm,
}): React.ReactElement => {
  const width: number = useWindowDimensions().width;
  const commonCol = getCol(col);
  const colXL = xl ? getCol(xl) : commonCol;
  const colLG = lg ? getCol(lg) : commonCol;
  const colMD = md ? getCol(md) : commonCol;
  const colSM = sm ? getCol(sm) : commonCol;

  const ComponentCol = commonCol.component;
  const ComponentXL = colXL.component;
  const ComponentLG = colLG.component;
  const ComponentMD = colMD.component;
  const ComponentSM = colSM.component;

  const offsetCol = commonCol.offset;
  const offsetXL = colXL.offset ?? offsetCol;
  const offsetLG = colLG.offset ?? offsetCol;
  const offsetMD = colMD.offset ?? offsetCol;
  const offsetSM = colSM.offset ?? offsetCol;
  return (
    <>
      {width <= 576 ? (
        <ComponentSM offset={offsetSM}>{children}</ComponentSM>
      ) : width <= 768 ? (
        <ComponentMD offset={offsetMD}>{children}</ComponentMD>
      ) : width <= 992 ? (
        <ComponentLG offset={offsetLG}>{children}</ComponentLG>
      ) : width <= 1200 ? (
        <ComponentXL offset={offsetXL}>{children}</ComponentXL>
      ) : (
        <ComponentCol offset={offsetCol}>{children}</ComponentCol>
      )}
    </>
  );
};
