import React from 'react';
import {StyleSheet, View, useWindowDimensions} from 'react-native';
interface Props {
  children: React.ReactNode;
}
export const Container: React.FC<Props> = ({
  children,
}: Props): React.ReactElement => {
  const width: number = useWindowDimensions().width;
  console.log('in ra width hien tai');
  console.log(width);
  return (
    <>
      {width <= 576 ? (
        <View style={[styles.container, styles.containerMobile]}>
          {children}
        </View>
      ) : width <= 768 ? (
        <View style={[styles.container, styles.containerTablet]}>
          {children}
        </View>
      ) : width <= 992 ? (
        <View style={[styles.container, styles.containerLaptop]}>
          {children}
        </View>
      ) : (
        <View style={[styles.container, styles.containerPc]}>{children}</View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingHorizontal: 15,
    marginHorizontal: 'auto',
    backgroundColor: 'red',
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
