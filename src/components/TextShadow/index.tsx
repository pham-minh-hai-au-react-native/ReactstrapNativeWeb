import React from 'react';
import {TextStyle, View} from 'react-native';
import {CssShadow, TextStyleShadow} from './types/index';
import {getListCssShadow} from './utils/index';
import {TextShadowRecurse} from './components/index';

interface Props {
  title?: string;
  shadow: string;
  style?: Omit<
    TextStyle,
    'shadowColor' | 'shadowOffset' | 'shadowOpacity' | 'shadowRadius'
  >;
}

export const TextShadow: React.FC<Props> = ({
  title = 'Text Shadow',
  shadow,
  style = {},
}: Props): React.ReactElement<View> => {
  const convertListCssShadowHaveRadiusIsZero: Array<CssShadow> = getListCssShadow(
    shadow,
  ).map((item: CssShadow) => {
    if (item.blurRadius === 0 || item.blurRadius === undefined) {
      item.blurRadius = 1; // because 0 is not support by react native
    }
    return item;
  });
  const convertTextStyle: Array<TextStyleShadow> = convertListCssShadowHaveRadiusIsZero.map(
    (item: CssShadow) => {
      return {
        textShadowOffset: {
          width: item.horizontalOffset,
          height: item.verticalOffset,
        },
        textShadowColor: item.color,
        textShadowRadius: item.blurRadius,
      };
    },
  );

  return (
    <View>
      <TextShadowRecurse
        title={title}
        style={style}
        listStyleTextShadow={convertTextStyle}
      />
    </View>
  );
};
