import {StyleSheet} from 'react-native';
import { Colors, Metrics } from '../../../theme';

export default style = StyleSheet.create({
  textInputView: {
    width: Metrics.screenWidth * 1,
    height: Metrics.ratio(40),
    borderColor: 'red',
    borderWidth: Metrics.ratio(1),
    flexDirection: 'row',
    borderRadius: Metrics.ratio(2),
    marginTop: Metrics.ratio(10),
  },

  customStyle: {
    width: Metrics.screenWidth * 8,
    height:Metrics.ratio(10),
    borderColor: Colors.lightMode.grey,
    borderWidth: Metrics.ratio(2),
    flexDirection: 'row',
    borderRadius: Metrics.ratio(10),
    marginTop: Metrics.ratio(10),
  },

  textInputStyle: {
    marginLeft: Metrics.ratio(10),
    color:  Colors.lightMode.grey,
    width: Metrics.screenWidth * 0.2,
  },

  emailStyle: {
    resizeMode: 'contain',
    height: Metrics.ratio(10),
    width: Metrics.ratio(10),
  },

  emailIconView: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: Metrics.ratio(10),
  },

  eye: {
    resizeMode: 'contain',
    height: Metrics.ratio(10),
    width: Metrics.ratio(10),
    tintColor: 'black',
  },
  eyeHidden: {
    resizeMode: 'contain',
    height: Metrics.ratio(10),
    width: Metrics.ratio(10),
    tintColor: 'grey',
  },
  eyeContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: Metrics.ratio(10),
  },
});
