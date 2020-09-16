import React from 'react';
import {View, Text, LayoutChangeEvent, ViewStyle} from 'react-native';
import {
  ViewRelative,
  TextAndroid,
  TextAbsoluteAndroid,
} from './styles/index.style';
import {Props, PropsTextShadow} from './types';
import {getArrayTextShadow} from './utils';

const TextShadow: React.FC<Props> = ({
  style = {},
  children = 'Text Shadow',
  textShadow,
}: Props): React.ReactElement<View> => {
  const arrTextShadow: Array<PropsTextShadow> = getArrayTextShadow(textShadow);
  const [layoutText, setLayoutText] = React.useState<
    Pick<ViewStyle, 'width' | 'height'>
  >({
    width: 'auto',
    height: 'auto',
  });
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
  const handleLayout = (event: LayoutChangeEvent) => {
    const {
      nativeEvent: {
        layout: {width, height},
      },
    } = event;
    const widthExtraRadius = width;
    const heightExtraRadius =
      height + maxFlattenNumberWidthHeightRadiusInShadows / 2;
    if (layoutText.width === 'auto' && layoutText.height === 'auto') {
      setLayoutText({...{width: widthExtraRadius, height: heightExtraRadius}});
    }
  };
  if (firstShadow === undefined) {
    return <Text style={style}>{children}</Text>;
  } else if (firstShadow && restShadow.length === 0) {
    return <Text style={[style, firstShadow]}>{children}</Text>;
  }
  return (
    <ViewRelative onLayout={handleLayout}>
      <TextAndroid
        width={layoutText.width}
        height={layoutText.height}
        zIndex={size + 1}
        style={[style, firstShadow]}>
        {children}
      </TextAndroid>
      {restShadow.map((item: PropsTextShadow, index: number) => (
        <TextAbsoluteAndroid
          zIndex={size - index}
          width={layoutText.width}
          height={layoutText.height}
          key={index}
          style={[style, item]}>
          {children}
        </TextAbsoluteAndroid>
      ))}
    </ViewRelative>
  );
};

export default TextShadow;
