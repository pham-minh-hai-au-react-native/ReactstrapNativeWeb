import {StyleSheet} from 'react-native';
// flex: <'flex-grow'> <'flex-shrink'> <'flex-basis'>
export const styles = StyleSheet.create({
  col: {
    position: 'relative',
    width: '100%',
    paddingHorizontal: 15,
    flexBasis: 0,
    flexGrow: 1,
    maxWidth: '100%',
  },
  colAuto: {
    position: 'relative',
    paddingHorizontal: 15,
    width: 'auto',
    maxWidth: '100%',
  },
});
