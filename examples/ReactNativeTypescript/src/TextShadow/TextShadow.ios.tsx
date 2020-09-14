import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Props, PropsTextShadow} from './types';

const TextShadow: React.FC<Props> = ({
  shadows,
  style = {},
  children = 'Text Shadow',
}: Props): React.ReactElement<View> => {
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
    padding: maxFlattenNumberWidthHeightRadiusInShadows,
  };
  if (firstShadow === undefined) {
    return <Text>{children}</Text>;
  }
  return (
    <View style={styles.positionRelative}>
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
});

export default TextShadow;
