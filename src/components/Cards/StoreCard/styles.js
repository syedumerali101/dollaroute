import {StyleSheet} from 'react-native';

import {Colors, Metrics} from '../../../theme';

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.background,
    borderRadius: Metrics.screenWidth * 0.04,
    padding: Metrics.screenWidth * 0.02,
    paddingHorizontal: Metrics.screenWidth * 0.03,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 5},
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 10,
    marginVertical: Metrics.screenHeight * 0.01,
  },
  midContainer: {
    width: Metrics.screenWidth * 0.47,
  },
  rating: {
    paddingVertical: Metrics.screenHeight * 0.01,
  },
  ratingRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    height: Metrics.screenWidth * 0.16,
    width: Metrics.screenWidth * 0.16,
    resizeMode: 'contain',
    borderRadius: Metrics.screenWidth * 0.03,
  },
  name: {
    color: Colors.TextSecondary,
    fontWeight: 'bold',
  },
  nameRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: Metrics.screenWidth * 0.4,
  },
  offersText: {
    color: Colors.lightMode.pink,
  },
  icon: {
    height: Metrics.screenWidth * 0.06,
    width: Metrics.screenWidth * 0.06,
    resizeMode: 'contain',
  },
  iconsContainer: {
    justifyContent: 'space-between',
    height: Metrics.screenHeight * 0.09,
  },
  reviewText: {
    marginLeft: Metrics.screenWidth * 0.03,
  },
});

export default styles;
