import {StyleSheet} from 'react-native';
import {Colors, Metrics} from '../../theme';

const styles = StyleSheet.create({
  contentContainerStyle: {
    alignItems: 'center',
  },
  mainRenderContainer: {
    backgroundColor: Colors.lightMode.white,
  },

  mainRowContainer: {
    flexDirection: 'row',
    width: Metrics.screenWidth * 0.9,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  totalCashbackEarnedView: {
    backgroundColor: Colors.lightMode.lightPink6,
    borderRadius: Metrics.ratio(10),
    width: Metrics.screenWidth * 0.9,
    height: Metrics.screenHeight * 0.2,
    paddingHorizontal: Metrics.ratio(15),
    paddingVertical: Metrics.ratio(15),
  },

  availableCashView: {
    backgroundColor: Colors.lightMode.lightPink6,
    borderRadius: Metrics.ratio(10),
    width: Metrics.screenWidth * 0.43,
    height: Metrics.screenHeight * 0.18,
    paddingHorizontal: Metrics.ratio(15),
    paddingVertical: Metrics.ratio(15),
  },

  dollarsIconStyle: {
    resizeMode: 'contain',
    height: Metrics.ratio(25),
    width: Metrics.ratio(25),
  },

  cashTextStyle: {
    color: Colors.lightMode.pink,
    fontWeight: '600',
    marginTop: Metrics.ratio(5),
  },

  headingText:{
    color: Colors.lightMode.grey9,
    fontWeight: '400'
  },

  mainContainer: {
    flex: 1,
    backgroundColor: Colors.lightMode.white,
    alignItems: 'center',
    paddingTop: Metrics.screenHeight * 0.05,
  },

  rowBtnContainer: {
    marginTop: Metrics.ratio(30),
  },

  leftImageStyle: {
    resizeMode: 'contain',
    height: Metrics.ratio(28),
    width: Metrics.ratio(28),
  },

  leftImageViewStyle: {
    backgroundColor: Colors.lightMode.lightPink6,
    padding: Metrics.ratio(5),
    borderRadius: Metrics.ratio(10),
  },

  submitButtonStyle: {
    width: Metrics.screenWidth * 0.8,
    backgroundColor: Colors.lightMode.lightPink2,
    marginTop: Metrics.ratio(15),
  },

  submitBtnTextStyle: {
    color: Colors.lightMode.pink,
  },
});

export default styles;
