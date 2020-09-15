import styled, {css} from 'styled-components/native';
interface PropsZindex {
  zIndex: number;
}
interface PropsTextIos extends PropsZindex {
  padding: number;
}
interface PropsTextAndroid extends PropsZindex {
  width: number | string | undefined;
  height: number | string | undefined;
}
const styleAbsolute = css`
  position: absolute;
  top: 0;
  left: 0;
`;
export const ViewRelative = styled.View`
  position: relative;
`;
const TextZIndex = styled.Text<PropsZindex>`
  z-index: ${({zIndex}) => zIndex};
`;
export const TextIos = styled(TextZIndex)<PropsTextIos>`
  padding: ${({padding}) => padding}px;
`;
export const TextAndroid = styled(TextZIndex)<PropsTextAndroid>`
  width: ${({width}) => (typeof width === 'string' ? width : `${width}px`)};
  height: ${({height}) =>
    typeof height === 'string' ? height : `${height}px`};
  text-align: center;
  text-align-vertical: center;
`;
export const TextAbsoluteIos = styled(TextIos)`
  ${styleAbsolute}
`;
export const TextAbsoluteAndroid = styled(TextAndroid)`
  ${styleAbsolute}
`;
