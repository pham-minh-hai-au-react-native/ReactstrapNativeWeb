import React from 'react';
import {View, Text} from 'react-native';
import {Container} from 'reactstrap-native-web';

export const ContainerWithDebug = () => {
  return (
    <Container debug>
      <View>
        <Text>Container</Text>
      </View>
    </Container>
  );
};
