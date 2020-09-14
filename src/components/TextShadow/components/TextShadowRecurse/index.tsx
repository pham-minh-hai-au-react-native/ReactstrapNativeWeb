import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Platform,
  TextStyle,
  LayoutRectangle,
  LayoutChangeEvent,
} from 'react-native';
import {TextChildShadow} from './components/TextChildShadow';
import {findCssShadowMax} from '../../utils/index';
import type {TextStyleShadow} from '../../types/index';

interface Props {
  title: string;
  listStyleTextShadow: TextStyleShadow | Array<TextStyleShadow>;
  style?: Omit<
    TextStyle,
    'shadowColor' | 'shadowOffset' | 'shadowOpacity' | 'shadowRadius'
  >;
}

export const TextShadowRecurse: React.FC<Props> = ({
  title,
  listStyleTextShadow,
  style = {},
}: Props): React.ReactElement<View> => {
  const [layoutExpect, setLayoutExpect] = React.useState<
    Pick<LayoutRectangle, 'width' | 'height'>
  >({width: 0, height: 0});
  const [paddingVerticalText, setPaddingVerticalText] = React.useState<number>(
    0,
  );
  const convertListStyleTextShadowToArray: any = listStyleTextShadow;
  const size = convertListStyleTextShadowToArray.length;
  const getMaxCssShadow = findCssShadowMax([convertListStyleTextShadowToArray]);
  if (size === 1) {
    return (
      <Text style={[style, convertListStyleTextShadowToArray[0]]}>{title}</Text>
    );
  }
  const getLayout = (event: LayoutChangeEvent): void => {
    const {
      nativeEvent: {
        layout: {width, height},
      },
    } = event;
    if (width !== 0 && height !== 0) {
      const widthIncludeRadius = Math.ceil(width + getMaxCssShadow * 2);
      const heightIncludeRadius = Math.ceil(height + getMaxCssShadow * 2);
      setLayoutExpect({
        width: widthIncludeRadius,
        height: heightIncludeRadius,
      });
    }
  };
  const getLayoutText = (height: number): void => {
    setPaddingVerticalText(height);
  };
  return (
    <View style={[styles.positionRelative]}>
      <View
        onLayout={getLayout}
        style={[styles.positionAbsolute, styles.opacity0]}>
        <Text
          style={[
            style,
            {zIndex: size + 1},
            convertListStyleTextShadowToArray[0],
          ]}>
          {title}
        </Text>
      </View>
      <TextChildShadow
        containerStyle={[
          styles.containerCenter,
          {
            width: layoutExpect.width,
            height: layoutExpect.height,
          },
        ]}
        textStyle={[
          style,
          {zIndex: size + 1},
          convertListStyleTextShadowToArray[0],
        ]}
        title={title}
      />

      {convertListStyleTextShadowToArray
        .slice(1)
        .map((item: TextStyleShadow, index: number) => {
          return (
            <TextChildShadow
              key={index}
              containerStyle={[styles.positionAbsolute, styles.flexCenter]}
              textStyle={[
                style,
                {zIndex: size - index},
                item,
                {
                  width: layoutExpect.width,
                  height: layoutExpect.height,
                  textAlignVertical: 'center',
                  textAlign: 'center',
                  lineHeight:
                    Platform.OS === 'android' ? undefined : paddingVerticalText,
                },
              ]}
              bindingLayoutText={getLayoutText}
              title={title}
            />
          );
        })}
    </View>
  );
};

const styles = StyleSheet.create({
  positionRelative: {
    position: 'relative',
  },
  positionAbsolute: {
    position: 'absolute',
  },
  containerCenter: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  opacity0: {
    opacity: 0,
  },
  flexCenter: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
