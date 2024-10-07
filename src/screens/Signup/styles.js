import {StyleSheet} from 'react-native';
import {Colors, Metrics} from '../../theme';
import { memo } from 'react';

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1
  },
  mainScrollViewStyle: {
    flex: 1,
    backgroundColor: Colors.white,
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

  seperatorText:{
    color: Colors.lightMode.grey5,
    fontSize: Metrics.ratio(11),
    fontWeight: '700',
    marginTop: Metrics.ratio(10),
  }
});

export default styles;
