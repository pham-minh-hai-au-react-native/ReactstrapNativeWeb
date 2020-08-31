import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {RuuiProvider, Tooltip} from 'react-universal-ui';
import {Demo} from 'reactstrap-native-web';
const App = () => {
  return (
    <View style={styles.container}>
      <Text>Test ruui</Text>
      <Demo />
    </View>
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
