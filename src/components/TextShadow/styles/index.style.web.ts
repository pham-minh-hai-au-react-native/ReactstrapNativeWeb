import styled from 'styled-components';
interface PropsTextShadow {
  textShadow: string;
}
export const Span = styled.span<PropsTextShadow>`
  text-shadow: ${({textShadow}) => textShadow};
`;
