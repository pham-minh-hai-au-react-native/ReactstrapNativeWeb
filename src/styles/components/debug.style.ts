import styled from 'styled-components/native';
import {randomColor} from '../../utils';
import {DebugProps} from '../../types/index';

export const DebugView = styled.View<DebugProps>`
  border: ${({debug}) => (debug ? 1 : 0)}px solid ${randomColor()};
`;
