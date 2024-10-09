import {StyleSheet} from 'react-native';

import {Colors, Metrics} from '../../theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.lightMode.white,
    paddingTop: Metrics.screenHeight * 0.05,
  },
  buttonsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: Metrics.screenHeight * 0.02,
    marginTop: Metrics.screenHeight * 0.03,
    marginHorizontal: Metrics.screenWidth * 0.03,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.lightMode.white,
    borderColor: '#EDEDED',
    borderWidth: 1,
    paddingVertical: Metrics.screenWidth * 0.015,
    paddingHorizontal: Metrics.screenWidth * 0.04,
    borderRadius: Metrics.screenHeight * 0.02,
    marginHorizontal: Metrics.screenWidth * 0.01,
  },
  buttonText: {
    textTransform: 'capitalize',
  },
});

export default styles;
