import React from 'react';
import {View, useWindowDimensions} from 'react-native';
import {styles} from './styles/index.style';
import {DebugProps} from '../types/index';
import {useDebug} from '../hooks/useDebug';
type TypeContainer = 'sm' | 'md' | 'lg' | 'xl' | boolean;
interface Props extends DebugProps {
  children: React.ReactNode;
  fluid?: TypeContainer;
}

export const Container: React.FC<Props> = ({
  children,
  fluid = false,
  debug = false,
}: Props): React.ReactElement => {
  const width: number = useWindowDimensions().width;
  const styleDebug = useDebug(debug);
  if (typeof fluid === 'boolean') {
    if (fluid) {
      return <View style={styles.container}>{children}</View>;
    }
  } else {
    switch (fluid) {
      case 'md':
        return (
          <>
            {width <= 768 ? (
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
            ) : width <= 1200 ? (
              <View
                style={[
                  styles.container,
                  styles.containerPc,
                  styleDebug.current,
                ]}>
                {children}
              </View>
            ) : (
              <View style={[styles.container, styleDebug.current]}>
                {children}
              </View>
            )}
          </>
        );
      case 'lg':
        return (
          <>
            {width <= 992 ? (
              <View
                style={[
                  styles.container,
                  styles.containerLaptop,
                  styleDebug.current,
                ]}>
                {children}
              </View>
            ) : width <= 1200 ? (
              <View
                style={[
                  styles.container,
                  styles.containerPc,
                  styleDebug.current,
                ]}>
                {children}
              </View>
            ) : (
              <View style={[styles.container, styleDebug.current]}>
                {children}
              </View>
            )}
          </>
        );
      case 'xl':
        return (
          <>
            {width <= 1200 ? (
              <View
                style={[
                  styles.container,
                  styles.containerPc,
                  styleDebug.current,
                ]}>
                {children}
              </View>
            ) : (
              <View style={[styles.container, styleDebug.current]}>
                {children}
              </View>
            )}
          </>
        );
      default:
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
            ) : width <= 1200 ? (
              <View
                style={[
                  styles.container,
                  styles.containerPc,
                  styleDebug.current,
                ]}>
                {children}
              </View>
            ) : (
              <View style={[styles.container, styleDebug.current]}>
                {children}
              </View>
            )}
          </>
        );
    }
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
      ) : width <= 1200 ? (
        <View
          style={[styles.container, styles.containerPc, styleDebug.current]}>
          {children}
        </View>
      ) : (
        <View style={[styles.container, styleDebug.current]}>{children}</View>
      )}
    </>
  );
};
