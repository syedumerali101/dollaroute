import {StyleSheet} from 'react-native';
import {Metrics} from '../../theme';

const styles = StyleSheet.create({
  mainScrollViewStyle: {
    flex: 1,
  },

  contentContainerStyle: {
    alignItems: 'center',
  },

  inputFieldContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: Metrics.screenHeight * 0.05
  },

  submitButtonStyle: {
    width: Metrics.screenWidth * 0.9,
    marginTop: Metrics.ratio(30),
  },

  mainRender: {},
});

export default styles;
