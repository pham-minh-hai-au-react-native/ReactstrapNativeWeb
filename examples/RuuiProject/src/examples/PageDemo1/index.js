import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import {
  Container,
  Row,
  Col,
  Image,
  layout,
  buildTheme,
} from 'reactstrap-native-web';
const result = buildTheme();
const bootstrap = StyleSheet.create(result.default.styleSheet);
export const PageDemo1 = () => {
  const renderItem = () => {
    return (
      <Row>
        <Col col={'4'} sm={{size: '12'}} md={{size: '6'}}>
          <Text>Include content</Text>
          <Text>Include content</Text>
          <Text>Include content</Text>
          <Text>Include content</Text>
          <Text>Include content</Text>
          <Text>Include content</Text>
          <Text>Include content</Text>
          <View style={[layout.w60, bootstrap.bgPrimary]}>
            <Text>Include content</Text>
          </View>
        </Col>
        <Col col={'4'} sm={{size: '12'}} md={{size: '6'}}>
          <Image
            source={{
              uri:
                'https://znews-photo.zadn.vn/w660/Uploaded/lce_qdhuc/2019_05_14/ynhi2.jpg',
            }}
          />
        </Col>
        <Col col={'4'} sm={{size: '12'}} md={{size: '6'}}>
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
    <Container>
      <View style={{flex: 1, flexDirection: 'row'}}>
        <FlatList data={['item']} renderItem={renderItem} />
      </View>
    </Container>
  );
};
