import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {RuuiProvider, Tooltip} from 'react-universal-ui';
// import {ContainerWithDebug} from './examples/Container/containerWithDebug';
// import {TestColumn} from './examples/Col/demo';
import {PageDemo1} from './examples/PageDemo1';
import {TextShadowDemo} from './examples/TextShadow';
const App = () => {
  return (
    <SafeAreaView>
      <PageDemo1 />
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
