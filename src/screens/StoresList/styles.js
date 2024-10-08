import {Colors, Metrics} from '../../theme';

import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  map: {
    height: Metrics.screenHeight,
    width: Metrics.screenWidth,
  },
  contentContainer: {
    backgroundColor: Colors.lightMode.white4,
    width: Metrics.screenWidth * 0.95,
    borderRadius: Metrics.screenHeight * 0.03,
    padding: Metrics.screenHeight * 0.03,
    position: 'absolute',
    bottom: Metrics.screenHeight * 0.05,
    right: Metrics.screenWidth * 0.03,
    alignSelf: 'center',
  },
  heading: {
    fontWeight: '900',
    color: Colors.TextSecondary,
  },
  iconCircle: {
    height: Metrics.screenWidth * 0.11,
    width: Metrics.screenWidth * 0.11,
    borderRadius: (Metrics.screenWidth * 0.11) / 2,
    backgroundColor: Colors.lightMode.white,
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    height: Metrics.screenWidth * 0.065,
    width: Metrics.screenWidth * 0.065,
    resizeMode: 'contain',
  },
  iconsContainer: {
    width: Metrics.screenWidth * 0.2,
    right: 0,
    paddingTop: Metrics.screenHeight * 0.06,
    position: 'absolute',
    height: Metrics.screenHeight * 0.35,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  location: {
    marginBottom: Metrics.screenHeight * 0.02,
    marginTop: Metrics.screenHeight * 0.01,
  },
});

export default styles;
