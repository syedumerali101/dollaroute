import {StyleSheet} from 'react-native';

import {Colors, Metrics} from '../../theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.lightMode.white,
  },
  buttonsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: Metrics.screenHeight * 0.02,
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
    marginHorizontal: Metrics.screenWidth * 0.02,
  },
  buttonText: {
    textTransform: 'capitalize',
  },
});

export default styles;
