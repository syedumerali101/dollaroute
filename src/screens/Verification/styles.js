import {StyleSheet} from 'react-native';
import {Colors, Metrics} from '../../theme';

const styles = StyleSheet.create({
  mainInputContainer: {
    paddingVertical: Metrics.screenHeight * 0.05,
  },

  headingTextStyle: {
    color: Colors.lightMode.black2,
    fontWeight: '500',
    fontSize: Metrics.ratio(20),
    width: Metrics.screenWidth * 0.6,
  },

  mainScrollViewStyle: {
    flex: 1,
    backgroundColor: Colors.white,
  },

  contentContainerStyle: {
    alignItems: 'center',
  },

  submitButtonStyle: {
    width: Metrics.screenWidth * 0.9,
    marginTop: Metrics.ratio(20),
  },
});

export default styles;
