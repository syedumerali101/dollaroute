import {StyleSheet} from 'react-native';
import {Colors, Metrics} from '../../theme';

const styles = StyleSheet.create({
  contentContainerStyle: {
    alignItems: 'center',
  },

  mainContainer: {
    flex: 1,
    backgroundColor: Colors.lightMode.white,
    alignItems: 'center',
    paddingTop: Metrics.screenHeight * 0.05,
  },

  mainRenderContainer: {
    backgroundColor: Colors.lightMode.white,
  },

  mainSwitchButtonsContainer: {
    // width: Metrics.screenWidth * 0.9,
  },

  btnTextStyle: {
    color: Colors.lightMode.black8,
    fontWeight: '500',
    fontSize: Metrics.ratio(14),
  },

  btnStyle: {
    width: Metrics.screenWidth * 0.9,
    marginTop: Metrics.ratio(10),
  },

  mainInnerContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: Metrics.screenWidth * 0.9,
  },

  submitButtonStyle: {
    marginTop: 0,
    justifyContent: 'flex-start',
    paddingHorizontal: Metrics.ratio(12)
  },

  submitBtnTextStyle:{
    fontSize: Metrics.ratio(14),
    fontWeight: '600',
    color: Colors.lightMode.black6,
    marginLeft: Metrics.ratio(5)
  },

  descriptionTextStyle:{
    color: Colors.lightMode.lightGray4,
    fontWeight: '400',
    marginTop: Metrics.ratio(10),
    marginBottom: Metrics.ratio(20)

  }
});

export default styles;
