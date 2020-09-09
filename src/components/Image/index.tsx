import React from 'react';
import {ImageResizeMode, ImageSourcePropType, ImageStyle} from 'react-native';
import FitImage from 'react-native-fit-image';

interface Props {
  source: ImageSourcePropType;
  style?: ImageStyle;
  resizeMode?: ImageResizeMode;
}
export const Image: React.FC<Props> = ({
  source,
  style = {},
  resizeMode = 'cover',
}): React.ReactElement => {
  return <FitImage style={style} source={source} resizeMode={resizeMode} />;
};
