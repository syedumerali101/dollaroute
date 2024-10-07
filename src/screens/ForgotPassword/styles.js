import {StyleSheet} from 'react-native';
import {Colors, Metrics} from '../../theme';

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
  },
  mainScrollViewStyle: {
    flex: 1,
    backgroundColor: Colors.white,
  },

  contentContainerStyle: {
    alignItems: 'center',
  },

  mainRender: {},

  headingTextStyle: {
    color: Colors.lightMode.black2,
    fontWeight: '600',
    // fontSize: Metrics.ratio(16),
    width: Metrics.screenWidth * 0.8,
  },

  mainInputContainer: {
    paddingVertical: Metrics.screenHeight * 0.05,
  },

  containerStyle: {
    marginTop: Metrics.ratio(30),
  },

  submitButtonStyle: {
    width: Metrics.screenWidth * 0.9,
    marginTop: Metrics.ratio(20),
  },
});

export default styles;
