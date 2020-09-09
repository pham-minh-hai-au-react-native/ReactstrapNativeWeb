import React from 'react';
import {ImageResizeMode, ImageSourcePropType, ImageStyle} from 'react-native';
import FitImage from 'react-native-fit-image';

interface Props {
  source: ImageSourcePropType;
  style?: ImageStyle;
  resizeMode?: ImageResizeMode;
  originalWidth?: number;
  originalHeight?: number;
}
export const Image: React.FC<Props> = ({
  source,
  style = {},
  resizeMode = 'cover',
  originalWidth,
  originalHeight,
}): React.ReactElement => {
  return (
    <FitImage
      style={style}
      source={source}
      resizeMode={resizeMode}
      {...(originalWidth ? {originalWidth: originalWidth} : {})}
      {...(originalHeight ? {originalHeight: originalHeight} : {})}
    />
  );
};
