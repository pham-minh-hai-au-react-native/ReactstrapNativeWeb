import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import {Container, Row, Col, Image, buildTheme} from 'reactstrap-native-web';
import styled, {css} from 'styled-components/native';
const result = buildTheme({
  lightTheme: {
    spacer: 30,
    colors: {
      primary: 'red',
    },
  },
});
const bootstrap = StyleSheet.create(result.default.styleSheet);
const lightTheme = StyleSheet.create(result.lightTheme.styleSheet);
console.log(result);
const DemoView = styled.View`
  ${result.default.styledComponent.border8};
  ${result.default.styledComponent.borderBlue};
`;
export const PageDemo1 = () => {
  const renderItem = (info) => {
    const {index} = info;
    return (
      <Row key={index} debug>
        <Col col={4} sm={{size: 12}} md={{size: 6}} debug>
          <Text>Include content</Text>
          <Text>Include content</Text>
          <DemoView>
            <Text>content styled component</Text>
          </DemoView>
          <Text>Include content</Text>
          <Text>Include content</Text>
          <View
            style={[
              bootstrap.wScreen,
              bootstrap.bgPrimary,
              lightTheme.border3,
            ]}>
            <Text style={lightTheme.textPrimary}>Include content</Text>
          </View>
        </Col>
        <Col
          col={{size: 3, offset: 1}}
          sm={{size: 6, offset: 6}}
          md={{size: 3, offset: 3}}>
          <Image
            resizeMode={'contain'}
            source={{
              uri:
                'https://znews-photo.zadn.vn/w660/Uploaded/lce_qdhuc/2019_05_14/ynhi2.jpg',
            }}
          />
        </Col>
        <Col col={4} sm={{size: 12}} md={{size: '6'}}>
          <Image
            resizeMode={'contain'}
            source={{
              uri:
                'https://i.pinimg.com/originals/ba/a1/12/baa11222deacee474b11858b747eccd2.jpg',
            }}
          />
        </Col>
      </Row>
    );
  };
  return (
    <Container fluid debug>
      <FlatList data={['item']} renderItem={renderItem} />
      <Text>show ne</Text>
    </Container>
  );
};
