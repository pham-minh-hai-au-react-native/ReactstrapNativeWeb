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
          style={{color: '#ffffff', fontSize: 60}}
          shadows={[
            {
              textShadowOffset: {
                width: 0,
                height: 0,
              },
              textShadowRadius: 5,
              textShadowColor: '#fff',
            },
            {
              textShadowOffset: {
                width: 0,
                height: 0,
              },
              textShadowRadius: 10,
              textShadowColor: '#fff',
            },
            {
              textShadowOffset: {
                width: 0,
                height: 0,
              },
              textShadowRadius: 15,
              textShadowColor: '#fff',
            },
            {
              textShadowOffset: {
                width: 0,
                height: 0,
              },
              textShadowRadius: 20,
              textShadowColor: '#49ff18',
            },
            {
              textShadowOffset: {
                width: 0,
                height: 0,
              },
              textShadowRadius: 30,
              textShadowColor: '#49ff18',
            },
            {
              textShadowOffset: {
                width: 0,
                height: 0,
              },
              textShadowRadius: 40,
              textShadowColor: '#49ff18',
            },
            {
              textShadowOffset: {
                width: 0,
                height: 0,
              },
              textShadowRadius: 55,
              textShadowColor: '#49ff18',
            },
            {
              textShadowOffset: {
                width: 0,
                height: 0,
              },
              textShadowRadius: 75,
              textShadowColor: '#49ff18',
            },
          ]}>
          Preview
        </TextShadow>
      </SafeAreaView>
    </>
  );
};

export default App;
