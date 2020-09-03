import React from 'react';
import {Text} from 'react-native';
import {Container, Row, Col} from 'reactstrap-native-web';

export const TestColumn = () => {
  return (
    <Container fluid>
      <Row>
        <Col
          col={{size: '3', offset: '1'}}
          sm={{size: '6', offset: '0'}}
          md={{size: '4', offset: '0'}}
          debug>
          <Text>Col 6</Text>
        </Col>
        <Col
          col={{size: '7', offset: '1'}}
          sm={{size: '6', offset: '0'}}
          md={{size: '7', offset: '1'}}
          debug>
          <Text>Col 6</Text>
        </Col>
      </Row>
    </Container>
  );
};
