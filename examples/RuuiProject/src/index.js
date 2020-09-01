import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {RuuiProvider, Tooltip} from 'react-universal-ui';
import {ContainerWithDebug} from './examples/Container/containerWithDebug';

const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <ContainerWithDebug />
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
