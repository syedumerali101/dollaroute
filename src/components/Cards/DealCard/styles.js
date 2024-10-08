import {StyleSheet} from 'react-native';

import {Colors, Metrics} from '../../../theme';

const styles = StyleSheet.create({
  container: {
    borderRadius: Metrics.screenWidth * 0.04,
    paddingHorizontal: Metrics.screenWidth * 0.03,
    paddingVertical: Metrics.screenWidth * 0.045,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    // shadowColor: '#000',
    // shadowOffset: {width: 0, height: 5},
    // shadowOpacity: 0.3,
    // shadowRadius: 10,
    // elevation: 1,
    marginVertical: Metrics.screenHeight * 0.01,
    marginHorizontal: Metrics.screenWidth * 0.02,
    width: Metrics.screenWidth * 1,
  },
  image: {
    height: Metrics.screenWidth * 0.16,
    width: Metrics.screenWidth * 0.16,
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
    alignItems: 'center',
  },
  typeContainer: {
    backgroundColor: '#FFF8E6',
    borderRadius: Metrics.screenWidth * 0.04,
    padding: Metrics.screenWidth * 0.02,
  },
  cashbackText: {
    color: Colors.TextSecondary,
    fontWeight: '700',
  },
});

export default styles;
