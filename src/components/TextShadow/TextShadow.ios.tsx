import React from 'react';
import {View, Text} from 'react-native';
import {ViewRelative, TextIos, TextAbsoluteIos} from './styles/index.style';
import {Props, PropsTextShadow} from './types/index';
import {getArrayTextShadow} from './utils/index';
const TextShadow: React.FC<Props> = ({
  style = {},
  children = 'Text Shadow',
  textShadow,
}: Props): React.ReactElement<View> => {
  const arrTextShadow: Array<PropsTextShadow> = getArrayTextShadow(textShadow);
  const flattenNumberWidthHeightRadiusInShadows: number[] = [];
  arrTextShadow.forEach((item: PropsTextShadow) => {
    flattenNumberWidthHeightRadiusInShadows.push(
      item?.textShadowOffset?.width || 0,
    );
    flattenNumberWidthHeightRadiusInShadows.push(
      item?.textShadowOffset?.height || 0,
    );
    flattenNumberWidthHeightRadiusInShadows.push(item?.textShadowRadius || 1);
  });
  const maxFlattenNumberWidthHeightRadiusInShadows = Math.max(
    ...flattenNumberWidthHeightRadiusInShadows,
  );
  const [firstShadow, ...restShadow] = arrTextShadow;
  const size = arrTextShadow.length;
  if (firstShadow === undefined) {
    return <Text>{children}</Text>;
  }
  return (
    <ViewRelative>
      <TextIos
        zIndex={size + 1}
        padding={maxFlattenNumberWidthHeightRadiusInShadows}
        style={[style, firstShadow]}>
        {children}
      </TextIos>
      {restShadow.map((item: PropsTextShadow, index: number) => (
        <TextAbsoluteIos
          zIndex={size - index}
          padding={maxFlattenNumberWidthHeightRadiusInShadows}
          key={index}
          style={[style, item]}>
          {children}
        </TextAbsoluteIos>
      ))}
    </ViewRelative>
  );
};

export default TextShadow;
