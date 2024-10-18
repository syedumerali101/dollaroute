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

  inputFieldContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: Metrics.screenHeight * 0.01,
  },

  submitButtonStyle: {
    width: Metrics.screenWidth * 0.9,
    marginTop: Metrics.ratio(30),
  },

  mainRender: {},

  expiryCvvView:{
    flexDirection: 'row',
    alignItems: 'center',
    width: Metrics.screenWidth * 0.9,
    justifyContent: 'space-between'
  },

  containerStyle:{
    width: Metrics.screenWidth * 0.44,
    alignItems: 'center'
  },

  textInputStyle:{
    width: Metrics.screenWidth * 0.35,
  }
});

export default styles;
