import React from 'react';
import {View} from 'react-native';
import {TextShadow} from 'reactstrap-native-web';

export const TextShadowDemo = () => {
  return (
    <View
      style={{
        paddingLeft: 20,
        flexDirection: 'row',
        backgroundColor: '#333333',
      }}>
      <View style={{flex: 1, backgroundColor: '#333333'}}>
        <TextShadow
          textShadow="0 0 5px #FFF, 0 0 10px #FFF, 0 0 15px #FFF, 0 0 20px #49ff18, 0 0 30px #49FF18, 0 0 40px #49FF18, 0 0 55px #49FF18, 0 0 75px #49ff18;"
          style={{color: '#ffffff', fontSize: 10, borderWidth: 1}}>
          Preview
        </TextShadow>
      </View>
      <View style={{flex: 1, backgroundColor: '#333333'}}>
        <TextShadow
          textShadow="0 0 5px #FFF, 0 0 10px #FFF, 0 0 15px #FFF, 0 0 20px #49ff18, 0 0 30px #49FF18, 0 0 40px #49FF18, 0 0 55px #49FF18, 0 0 75px #49ff18;"
          style={{color: '#ffffff', fontSize: 10, borderWidth: 1}}>
          Preview supert proxy
        </TextShadow>
      </View>
    </View>
  );
};
