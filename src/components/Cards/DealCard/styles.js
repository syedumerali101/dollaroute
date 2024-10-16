import {StyleSheet} from 'react-native';

import {Colors, Metrics} from '../../../theme';

const styles = StyleSheet.create({
  container: {
    // borderRadius: Metrics.screenWidth * 0.04,
    // paddingHorizontal: Metrics.screenWidth * 0.03,
    // paddingVertical: Metrics.screenWidth * 0.045,
    // flexDirection: 'row',
    // alignItems: 'center',
    // justifyContent: 'space-between',
    // // shadowColor: '#000',
    // // shadowOffset: {width: 0, height: 5},
    // // shadowOpacity: 0.3,
    // // shadowRadius: 10,
    // // elevation: 1,
    // marginVertical: Metrics.screenHeight * 0.01,
    // marginHorizontal: Metrics.screenWidth * 0.02,
    height: Metrics.screenHeight * 0.11,
    width: Metrics.screenWidth * 0.95,
    backgroundColor: 'transparent',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: Metrics.ratio(2),
  },
  image: {
    height: Metrics.screenWidth * 0.14,
    width: Metrics.screenWidth * 0.14,
    resizeMode: 'contain',
    borderRadius: Metrics.screenWidth * 0.03,
  },
  calendar: {
    height: Metrics.screenWidth * 0.04,
    width: Metrics.screenWidth * 0.04,
    resizeMode: 'contain',
  },
  calendarRow: {
    flexDirection: 'row',
  },
  typeContainer: {
    backgroundColor: '#FFF8E6',
    borderRadius: Metrics.screenWidth * 0.04,
    paddingVertical: Metrics.screenWidth * 0.012,
    paddingHorizontal: Metrics.screenWidth * 0.03,
    marginBottom: Metrics.ratio(25)
  },
  cashbackText: {
    color: Colors.TextSecondary,
    fontWeight: '500',
  },
  expiry: {
    marginLeft: Metrics.screenWidth * 0.02,
    color: Colors.lightMode.grey10,
  },
  activateText: {
    color: Colors.lightMode.pink,
    fontWeight: 'bold',
    alignSelf: 'flex-end',
    marginRight: Metrics.screenWidth * 0.02,
    textTransform: 'capitalize',
    bottom: Metrics.ratio(8)
  },
  thirdContainer: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  name: {
    textTransform: 'capitalize',
    color: Colors.lightMode.grey10
  },

  separator: {
    height: Metrics.ratio(40),
    borderWidth: 0.8,
    borderStyle: 'dashed',
    marginLeft: Metrics.ratio(3.5),
    borderColor: Colors.opacColor
  },

  dealsImageView: {
    justifyContent: 'center',
    alignItems: 'center',
    width: Metrics.screenWidth * 0.21,
  },

  leftView:{
    marginLeft: Metrics.ratio(5),
    marginBottom: Metrics.ratio(5)
  },

  mainRowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: Metrics.ratio(12),
    width: Metrics.screenWidth * 0.65,
    justifyContent: 'space-between',
  },

  typeText:{
    color: Colors.lightMode.orange,
    fontWeight: '500'
  }
});

export default styles;
