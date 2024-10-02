import {StyleSheet} from 'react-native';
import {Colors, Metrics} from '../../theme';
import {memo} from 'react';

const styles = StyleSheet.create({
  mainInputContainer: {
    paddingVertical: Metrics.screenHeight * 0.02,
  },

  headingTextStyle: {
    color: Colors.lightMode.black2,
    fontWeight: '500',
    fontSize: Metrics.ratio(24),
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

  codeFieldRoot: {
    marginTop: Metrics.ratio(20),
    width: Metrics.screenWidth * 0.4,
    alignItems: 'center'
  },


  defaultCellContainer: {
    backgroundColor: Colors.lightMode.grey8,
    borderRadius: Metrics.ratio(20),
    height: Metrics.screenHeight * 0.015,
    width: Metrics.screenHeight * 0.015,
    justifyContent: 'center',
    alignItems: 'center',
  },

  containerCellView: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.lightMode.white,
  },

  focusCell: {
    color: Colors.lightMode.black4,
    fontSize: Metrics.ratio(20),
    fontWeight: '700',
    alignSelf: 'center',
  },
});

export default styles;
