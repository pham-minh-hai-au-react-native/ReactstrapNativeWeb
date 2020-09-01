import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {RuuiProvider, Tooltip} from 'react-universal-ui';
import {Container} from 'reactstrap-native-web';

const App = () => {
  return (
    <Container isFluid>
      <View>
        <Text>sdadsadsadsa</Text>
      </View>
    </Container>
  );
};
function AppContainer(props) {
  return (
    <RuuiProvider>
      <App />
      <Tooltip />
    </RuuiProvider>
  );
}

export default AppContainer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
