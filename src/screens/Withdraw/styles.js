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
    paddingVertical: Metrics.screenHeight * 0.05,
  },

  submitButtonStyle: {
    width: Metrics.screenWidth * 0.9,
    marginTop: Metrics.ratio(50),
    backgroundColor: Colors.lightMode.white,
    // alignSelf: 'center',
    // marginBottom: Metrics.ratio(20)
  },

  mainRender: {},

  mainContainer: {
    flex: 1,
    backgroundColor: Colors.lightMode.pink,
  },

  titleTextStyle: {
    color: Colors.lightMode.white,
  },

  leftIconStyle: {
    tintColor: Colors.lightMode.white,
  },

  textStyle:{
    color: Colors.lightMode.pink
  },

  textInputStyle:{
    fontSize: Metrics.ratio(48),
    color: Colors.lightMode.white,
    fontWeight:'500'
  },

  textInputRow:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: Metrics.screenWidth * 0.9,
    alignSelf: 'center',
    marginTop: Metrics.ratio(40)
  },

  dollarSignText:{
    fontSize: Metrics.ratio(48),
    color: Colors.lightMode.white,
    fontWeight:'500'
  },

  enterAmountText:{
    color: Colors.lightMode.white,
    fontWeight: '500'
  },

  availableAmountText:{
    color: Colors.lightMode.white,
    fontWeight: '500',
    marginTop: Metrics.ratio(30)
  },
});

export default styles;
