import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  LayoutChangeEvent,
  ViewStyle,
} from 'react-native';
import {Props, PropsTextShadow} from './types';

const TextShadow: React.FC<Props> = ({
  shadows,
  style = {},
  children = 'Text Shadow',
}: Props): React.ReactElement<View> => {
  const [layoutText, setLayoutText] = React.useState<
    Pick<ViewStyle, 'width' | 'height'>
  >({
    width: 'auto',
    height: 'auto',
  });
  const flattenNumberWidthHeightRadiusInShadows: number[] = [];
  shadows.forEach((item: PropsTextShadow) => {
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
  const [firstShadow, ...restShadow] = shadows;
  const size = shadows.length;
  const styleTextLayout = {
    width: layoutText.width,
    height: layoutText.height,
    ...styles.textCenter,
  };
  const handleLayout = (event: LayoutChangeEvent) => {
    const {
      nativeEvent: {
        layout: {width, height},
      },
    } = event;
    const widthExtraRadius = width + maxFlattenNumberWidthHeightRadiusInShadows;
    const heightExtraRadius =
      height + maxFlattenNumberWidthHeightRadiusInShadows;
    if (layoutText.width === 'auto' && layoutText.height === 'auto') {
      setLayoutText({...{width: widthExtraRadius, height: heightExtraRadius}});
    }
  };
  if (firstShadow === undefined) {
    return <Text>{children}</Text>;
  }
  return (
    <View style={styles.positionRelative} onLayout={handleLayout}>
      <Text
        style={[
          style,
          firstShadow,
          {
            zIndex: size + 1,
          },
          styleTextLayout,
        ]}>
        {children}
      </Text>
      {restShadow.map((item: PropsTextShadow, index: number) => (
        <Text
          key={index}
          style={[
            style,
            styles.positionChild,
            item,
            {
              zIndex: size - index,
            },
            styleTextLayout,
          ]}>
          {children}
        </Text>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  positionRelative: {
    position: 'relative',
  },
  positionChild: {
    position: 'absolute',
    top: 0,
    left: 0,
  },
  textCenter: {
    textAlign: 'center',
    textAlignVertical: 'center',
  },
});

export default TextShadow;
