import {StyleSheet} from 'react-native';
import {Colors, Metrics} from '../../theme';

const styles = StyleSheet.create({
  mainScrollViewStyle: {
    flex: 1,
    backgroundColor: Colors.lightMode.white,
  },

  sliderBannerView: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: Metrics.ratio(5),
  },

  homeBannerView: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  homeBannerStyle: {
    resizeMode: 'contain',
    height: Metrics.screenWidth * 0.37,
    width: Metrics.screenWidth * 0.94,
  },

  animatedDots: {
    borderRadius: 5,
    marginHorizontal: 6,
    height: Metrics.ratio(10),
    width: Metrics.ratio(10),
  },

  dotsView: {
    flexDirection: 'row',
    marginTop: Metrics.ratio(10),
    marginBottom: Metrics.ratio(5),
    alignItems: 'center',
  },

  mainRenderContainer: {
    backgroundColor: Colors.lightMode.white,
    height: Metrics.screenHeight,
    borderTopLeftRadius: Metrics.ratio(20),
    borderTopRightRadius: Metrics.ratio(20),
  },

  rowBtnStyle: {
    marginTop: Metrics.ratio(20),
  },

  listStyle: {
    marginLeft: Metrics.ratio(10),
  },

  featuredStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: Metrics.ratio(10),
  },

  imageStyle: {
    resizeMode: 'contain',
    height: Metrics.ratio(40),
    width: Metrics.ratio(40),
  },

  featuredTitleStyle: {
    color: Colors.lightMode.black3,
    fontWeight: '400',
    marginTop: Metrics.ratio(4),
  },

  featuredContentContainerStyle: {
    justifyContent: "center",
    alignItems: "center",
  },

  referBannerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    // backgroundColor: Colors.lightMode.pink,
    width: Metrics.screenWidth * 0.9,
    height: Metrics.screenHeight * 0.16,
    alignSelf: 'center',
    borderRadius: Metrics.ratio(10),
    marginTop: Metrics.ratio(10),
  },

  leftBannerView: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.lightMode.pink,
    height: Metrics.screenHeight * 0.16,
    width: Metrics.screenWidth * 0.55,
    borderTopRightRadius: Metrics.ratio(60),
    borderBottomRightRadius: Metrics.ratio(60),
    borderTopLeftRadius: Metrics.ratio(10),
    borderBottomLeftRadius: Metrics.ratio(10),
    zIndex: 1,
  },

  rightBannerImageView: {
    resizeMode: 'contain',
    height: Metrics.screenHeight * 0.16,
    width: Metrics.screenWidth * 0.51,
    right: Metrics.ratio(60),
  },

  referDetailsView: {
    justifyContent: 'center',
    marginRight: Metrics.ratio(30),
  },

  referFriendTextStyle: {
    color: Colors.lightMode.white,
  },

  earnTextStyle: {
    color: Colors.lightMode.white,
    fontWeight: '700',
  },

  referBtnText: {
    color: Colors.lightMode.pink,
    fontWeight: '600',
  },

  referNowBtn: {
    backgroundColor: Colors.lightMode.white,
    borderRadius: Metrics.ratio(20),
    justifyContent: 'center',
    alignItems: 'center',
    width: Metrics.screenWidth * 0.25,
    height: Metrics.screenHeight * 0.04,
    marginTop: Metrics.ratio(10),
  },

  promoListStyle: {
    width: Metrics.screenWidth,
  },

  promoContentContainerStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: Metrics.ratio(20),
    paddingHorizontal: Metrics.ratio(10)
    
  },

  promoCardContainer: {
    marginLeft: Metrics.ratio(10),
    marginBottom: Metrics.ratio(10),
  },

  whiteSeparatorHeader:{
    backgroundColor: Colors.lightMode.white,
    width: Metrics.screenWidth,
    height: Metrics.screenHeight * 0.05,
    borderTopLeftRadius: Metrics.ratio(25),
    borderTopRightRadius: Metrics.ratio(25),
    position: 'absolute',
    bottom: 0,
    top: Metrics.screenHeight * 0.22
  },

 
});

export default styles;
