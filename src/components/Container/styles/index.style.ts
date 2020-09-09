import styled from 'styled-components/native';
import {DebugView} from '../../../styles/components/debug.style';
import {DebugProps} from '../../../types/index';
interface ContainerProps extends DebugProps {
  width: number;
}
export const FluidContainer = styled(DebugView)`
  width: 100%;
  margin-left: auto;
  margin-right: auto;
`;
export const Container = styled(FluidContainer)<ContainerProps>`
  max-width: ${({width}) =>
    width <= 576
      ? 540
      : width <= 768
      ? 720
      : width <= 992
      ? 960
      : width < 1200
      ? 1140
      : width};
`;
export const ContainerMD = styled(FluidContainer)<ContainerProps>`
  max-width: ${({width}) =>
    width <= 768 ? 720 : width <= 992 ? 960 : width < 1200 ? 1140 : width};
`;
export const ContainerLG = styled(FluidContainer)<ContainerProps>`
  max-width: ${({width}) => (width <= 992 ? 960 : width < 1200 ? 1140 : width)};
`;
export const ContainerXL = styled(FluidContainer)<ContainerProps>`
  max-width: ${({width}) => (width < 1200 ? 1140 : width)};
`;
