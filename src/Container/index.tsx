import React from 'react';
import {StyleSheet, View, useWindowDimensions, ViewStyle} from 'react-native';
import {DebugProps} from '../types/index';
interface Props extends DebugProps {
  children: React.ReactNode;
  fluid?: boolean;
}

export const Container: React.FC<Props> = ({
  children,
  fluid = false,
  debug = false,
}: Props): React.ReactElement => {
  const width: number = useWindowDimensions().width;
  const styleDebug = React.useRef<ViewStyle>({
    borderWidth: 0,
    borderColor: 'transparent',
  });
  if (debug) {
    styleDebug.current = {
      borderWidth: 1,
      borderColor: 'black',
    };
  }
  if (fluid) {
    return (
      <View style={[styles.container, styleDebug.current]}>{children}</View>
    );
  }
  return (
    <>
      {width <= 576 ? (
        <View
          style={[
            styles.container,
            styles.containerMobile,
            styleDebug.current,
          ]}>
          {children}
        </View>
      ) : width <= 768 ? (
        <View
          style={[
            styles.container,
            styles.containerTablet,
            styleDebug.current,
          ]}>
          {children}
        </View>
      ) : width <= 992 ? (
        <View
          style={[
            styles.container,
            styles.containerLaptop,
            styleDebug.current,
          ]}>
          {children}
        </View>
      ) : (
        <View
          style={[styles.container, styles.containerPc, styleDebug.current]}>
          {children}
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingHorizontal: 15,
    marginHorizontal: 'auto',
    borderWidth: 1,
  },
  containerMobile: {
    maxWidth: 540,
  },
  containerTablet: {
    maxWidth: 720,
  },
  containerLaptop: {
    maxWidth: 960,
  },
  containerPc: {
    maxWidth: 1140,
  },
});
