import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {RuuiProvider, Tooltip} from 'react-universal-ui';
import {ContainerWithDebug} from './examples/Container/containerWithDebug';
import {TestColumn} from './examples/Col/demo';
const App = () => {
  return (
    <SafeAreaView>
      <TestColumn />
    </SafeAreaView>
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
