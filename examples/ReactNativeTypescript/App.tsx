/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {Container} from './src';
const App = () => {
  return (
    <>
      <View style={styles.container}>
        <Container>
          <View>
            <Text>Demo Container</Text>
          </View>
          <View>
            <Text>Demo Container</Text>
          </View>
        </Container>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default App;
