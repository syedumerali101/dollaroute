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
    width: Metrics.screenWidth * 0.43,
    height: Metrics.screenHeight * 0.18,
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
    marginTop: Metrics.ratio(20),
  },

  headingText: {
    color: Colors.lightMode.grey9,
    fontWeight: '400',
    marginTop: Metrics.ratio(5),
  },

  innerRowContainer: {
    width: Metrics.screenWidth * 0.9,
    marginTop: Metrics.ratio(20),
  },

  dateText: {
    color: Colors.lightMode.lightGray3,
    fontWeight: '600',
  },

  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: Metrics.ratio(10),
  },

  itemImageView: {
    justifyContent: 'center',
    alignItems: 'center',
    width: Metrics.ratio(40),
  },

  imageStyle: {
    resizeMode: 'contain',
    height: Metrics.ratio(40),
    width: Metrics.ratio(40),
  },

  itemNameContainer: {
    justifyContent: 'center',
    marginLeft: Metrics.ratio(10),
    width: Metrics.screenWidth * 0.5,
  },

  itemNameStyle: {
    color: Colors.lightMode.black7,
    fontWeight: '500',
  },

  itemTypeStyle: {
    color: Colors.lightMode.grey10,
    fontWeight: '400',
    marginTop: Metrics.ratio(5),
  },

  itemPriceContainer: {
    justifyContent: 'center',
    alignItems: 'flex-end',
  },

  priceStyle: {
    color: Colors.lightMode.black7,
    fontWeight: '500',
  },

  cashbackStyle: {
    color: Colors.lightMode.grey10,
    fontWeight: '400',
    marginTop: Metrics.ratio(5),
  },

  submitButtonStyle: {
    width: Metrics.screenWidth * 0.9,
    backgroundColor: Colors.lightMode.lightPink2,
    marginBottom: Metrics.ratio(20)
  },

  submitBtnTextStyle: {
    color: Colors.lightMode.pink,
 
  },

  mainContainer:{
    flex: 1,
    backgroundColor: Colors.lightMode.white,
    alignItems: 'center',
    paddingTop: Metrics.screenHeight * 0.05,
  }
});

export default styles;
