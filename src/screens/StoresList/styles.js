import {Colors, Metrics} from '../../theme';

const {StyleSheet} = require('react-native');

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
    bottom: Metrics.screenHeight * 0.1,
    right: Metrics.screenWidth * 0.03,
    alignSelf: 'center',
  },
  heading: {
    fontWeight: 'bold',
    color: Colors.TextSecondary,
  },
});

export default styles;
