import {
  View,
  Text,
  ViewStyle,
  TextStyle,
  LayoutChangeEvent,
} from 'react-native';
import * as React from 'react';

interface Props {
  containerStyle?: ViewStyle | Array<ViewStyle>;
  textStyle?: TextStyle | Array<TextStyle>;
  title: string;
  bindingLayoutText?: Function;
}

export const TextChildShadow: React.FC<Props> = ({
  containerStyle = {},
  textStyle = {},
  title,
  bindingLayoutText,
}: Props): React.ReactElement<View> => {
  const getLayoutText = (event: LayoutChangeEvent): void => {
    if (typeof bindingLayoutText === 'function') {
      bindingLayoutText(event.nativeEvent.layout.height);
    }
  };

  return (
    <View style={containerStyle}>
      <Text onLayout={getLayoutText} style={textStyle}>
        {title}
      </Text>
    </View>
  );
};
