import {StyleSheet} from 'react-native';
import {Colors, Metrics} from '../../theme';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: Colors.lightMode.pink,
  },

  rightBtnStyle: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  rightIconStyle: {
    resizeMode: 'contain',
    height: Metrics.ratio(20),
    width: Metrics.ratio(20),
  },

  headerContainer: {
    marginTop: Metrics.ratio(30),
  },

  leftIconStyle: {
    tintColor: Colors.lightMode.white,
  },

  titleTextStyle: {
    color: Colors.lightMode.white,
  },

  mainRenderContainer: {
    width: Metrics.screenWidth,
    alignSelf: 'center',
    borderRadius: Metrics.ratio(10),
  },

  contentContainerStyle: {
    alignItems: 'center',
  },

  mainDetailsContainer: {
    backgroundColor: Colors.lightMode.white,
    width: Metrics.screenWidth * 0.9,
    height: Metrics.screenHeight * 0.75,
    borderRadius: Metrics.ratio(20),
  },

  barCodeView: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: Metrics.ratio(12),
  },

  barCodeStyle: {
    resizeMode: 'contain',
    height: Metrics.screenHeight * 0.3,
    width: Metrics.screenWidth * 0.8,
  },

  titleStyle: {
    color: Colors.lightMode.black5,
    fontWeight: '600',
    textAlign: 'center',
  },

  subTitleStyle: {
    marginTop: Metrics.ratio(10),
    color: Colors.lightMode.black6,
    fontWeight: '400',
    textAlign:'center',
    width: Metrics.screenWidth * 0.8,
    alignSelf: 'center',
    marginBottom: Metrics.ratio(20)
  },

  mainDetailsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: Metrics.screenWidth * 0.8,
    alignSelf: 'center',
    marginTop: Metrics.ratio(10)
  },

  leftTitleView: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  rightTitleViewStyle: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  leftTitleTextStyle:{
    color: Colors.lightMode.grey9,
    fontWeight: '400'
  },

  rightTitleTextStyle:{
    color: Colors.lightMode.black6,
    fontWeight: '400'
  },

  bottomTextStyle:{
    textAlign: 'center',
    color: Colors.lightMode.black6,
    width: Metrics.screenWidth * 0.8,
    alignSelf: 'center',
    marginTop: Metrics.ratio(30)
  }
});

export default styles;
