import React, {MutableRefObject} from 'react';
import {ViewStyle} from 'react-native';
const randomColor = () => {
  const red: number = Math.floor(Math.random() * 255);
  const green: number = Math.floor(Math.random() * 255);
  const blue: number = Math.floor(Math.random() * 255);
  return `rgb(${red}, ${green}, ${blue})`;
};
export const useDebug = (debug: boolean): MutableRefObject<ViewStyle> => {
  const styleDebug = React.useRef<ViewStyle>({});
  if (debug) {
    styleDebug.current = {
      borderWidth: 1,
      borderColor: randomColor(),
    };
  }
  return styleDebug;
};
