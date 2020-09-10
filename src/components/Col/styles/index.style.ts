import {StyleSheet} from 'react-native';
import styled from 'styled-components/native';
import {NumberOffsetColumn} from '../types/index';
import {DebugView} from '../../../styles/components/index';
import {DebugProps} from '../../../types/index';

interface ColProps extends DebugProps {
  offset?: NumberOffsetColumn;
}

const Col = styled(DebugView)<ColProps>`
  position: relative;
  width: 100%;
  margin-left: ${({offset}) =>
    offset === 1
      ? 8.333333
      : offset === 2
      ? 16.666667
      : offset === 3
      ? 25
      : offset === 4
      ? 33.333333
      : offset === 5
      ? 41.666667
      : offset === 6
      ? 50
      : offset === 7
      ? 58.333333
      : offset === 8
      ? 66.666667
      : offset === 9
      ? 75
      : offset === 10
      ? 83.333333
      : offset === 11
      ? 91.666667
      : 0}%;
`;

export const ColAuto = styled(Col)`
  width: 100%;
  height: auto;
  max-width: 100%;
`;
export const Col1 = styled(Col)`
  flex: 0 0 8.333333%;
  max-width: 8.333333%;
`;
export const Col2 = styled(Col)`
  flex: 0 0 16.666667%;
  max-width: 16.666667%;
`;
export const Col3 = styled(Col)`
  flex: 0 0 25%;
  max-width: 25%;
`;
export const Col4 = styled(Col)`
  flex: 0 0 33.333333%;
  max-width: 33.333333%;
`;
export const Col5 = styled(Col)`
  flex: 0 0 41.666667%;
  max-width: 41.666667%;
`;
export const Col6 = styled(Col)`
  flex: 0 0 50%;
  max-width: 50%;
`;
export const Col7 = styled(Col)`
  flex: 0 0 58.333333%;
  max-width: 58.333333%;
`;
export const Col8 = styled(Col)`
  flex: 0 0 66.666667%;
  max-width: 66.666667%;
`;
export const Col9 = styled(Col)`
  flex: 0 0 75%;
  max-width: 75%;
`;
export const Col10 = styled(Col)`
  flex: 0 0 83.333333%;
  max-width: 83.333333%;
`;
export const Col11 = styled(Col)`
  flex: 0 0 91.666667%;
  max-width: 91.666667%;
`;
export const Col12 = styled(Col)`
  flex: 0 0 100%;
  max-width: 100%;
`;
export const styles = StyleSheet.create({
  col: {
    position: 'relative',
    width: '100%',
    paddingHorizontal: 15,
    flexBasis: 0,
    flexGrow: 1,
    maxWidth: '100%',
  },
  colAuto: {
    position: 'relative',
    paddingHorizontal: 15,
    width: 'auto',
    maxWidth: '100%',
  },
});
