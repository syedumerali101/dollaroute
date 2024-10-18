import {StyleSheet} from 'react-native';
import {Colors, Metrics} from '../../theme';

const styles = StyleSheet.create({
  contentContainerStyle: {
    alignItems: 'center',
  },

  submitButtonStyle: {
    width: Metrics.screenWidth * 0.9,
    backgroundColor: Colors.lightMode.pink,
    marginBottom: Metrics.ratio(20),
  },

  submitBtnTextStyle: {
    color: Colors.lightMode.white,
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

  inviteFriendStyle: {
    resizeMode: 'contain',
    height: Metrics.screenHeight * 0.3,
    width: Metrics.screenWidth * 0.9,
  },

  inviteFriendsAmountView: {
    backgroundColor: Colors.lightMode.grey13,
    borderRadius: Metrics.ratio(20),
    width: Metrics.screenWidth * 0.8,
    padding: Metrics.ratio(15),
    justifyContent: 'center',
    alignItems: 'center',
  },

  inviteFriendText: {
    color: Colors.lightMode.black5,
    fontWeight: '500',
  },

  amountText: {
    color: Colors.lightMode.pink,
    fontWeight: '600',
  },

  mainRowContainer: {
    flexDirection: 'row',
    // alignItems: 'center',
    width: Metrics.screenWidth * 0.9,
    marginTop: Metrics.ratio(12)
  },

  imageView: {
    // justifyContent: 'center',
    alignItems: 'center',
  },

  imageStyle: {
    resizeMode: 'contain',
    height: Metrics.ratio(25),
    width: Metrics.ratio(25),
  },

  textsView: {
    justifyContent: 'center',
    marginTop: Metrics.ratio(3),
    marginLeft: Metrics.ratio(5)
  },

  titleStyle: {
    color: Colors.lightMode.black1,
    fontWeight: '600',
  },

  descriptionStyle: {
    color: Colors.lightMode.black6,
    fontWeight: '400',
    marginTop: Metrics.ratio(5),
    width: Metrics.screenWidth * 0.8
  },

  mainWhiteContainer:{
    height: Metrics.screenHeight * 0.42
  },

  secondBtnStyle:{
    marginTop: Metrics.ratio(30)
  }
});

export default styles;
