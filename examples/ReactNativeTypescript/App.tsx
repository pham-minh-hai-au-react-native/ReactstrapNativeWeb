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
import {SafeAreaView, Text, View} from 'react-native';
import {TextDemo} from './src/Text';
import {TextShadow} from './src/TextShadow';
import {ContainerWithDebug} from './src/examples/Container/containerWithDebug';

const App = () => {
  return (
    <>
      <SafeAreaView
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#333333',
        }}>
        <TextShadow
          textShadow="0 0 5px #FFF, 0 0 10px #FFF, 0 0 15px #FFF, 0 0 20px #49ff18, 0 0 30px #49FF18, 0 0 40px #49FF18, 0 0 55px #49FF18, 0 0 75px #49ff18;"
          style={{color: '#ffffff', fontSize: 60}}>
          Preview
        </TextShadow>
      </SafeAreaView>
    </>
  );
};

export default App;
