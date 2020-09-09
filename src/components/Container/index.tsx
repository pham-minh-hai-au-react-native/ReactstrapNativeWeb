import React from 'react';
import {useWindowDimensions} from 'react-native';
import {
  FluidContainer,
  ContainerMD,
  ContainerLG,
  ContainerXL,
  Container as ContainerSM,
} from './styles/index.style';
import {DebugProps} from '../../types';

type TypeContainer = 'sm' | 'md' | 'lg' | 'xl' | boolean;
interface Props extends DebugProps {
  children: React.ReactNode;
  fluid?: TypeContainer;
}

const components = {
  md: ContainerMD,
  lg: ContainerLG,
  xl: ContainerXL,
  sm: ContainerSM,
};
export const Container: React.FC<Props> = ({
  children,
  fluid = false,
  debug = false,
}: Props): React.ReactElement => {
  const width: number = useWindowDimensions().width;
  if (typeof fluid === 'boolean' && fluid) {
    return <FluidContainer debug={debug}>{children}</FluidContainer>;
  }
  const ContainerComponent = fluid ? components[fluid] : components.sm;
  return (
    <ContainerComponent width={width} debug={debug}>
      {children}
    </ContainerComponent>
  );
};
