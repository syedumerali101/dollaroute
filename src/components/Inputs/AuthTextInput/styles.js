import {StyleSheet} from 'react-native';
import {Colors, Metrics} from '../../../theme';

export default style = StyleSheet.create({
  textInputView: {
    width: Metrics.screenWidth * 0.9,
    height: Metrics.ratio(52),
    borderColor: Colors.lightMode.grey8,
    borderWidth: Metrics.ratio(1.5),
    flexDirection: 'row',
    borderRadius: Metrics.ratio(8),
    marginTop: Metrics.ratio(10),
  },

  customStyle: {
    width: Metrics.screenWidth * 0.9,
    height: Metrics.ratio(52),
    borderColor: Colors.lightMode.pink,
    borderWidth: Metrics.ratio(1.5),
    flexDirection: 'row',
    borderRadius: Metrics.ratio(10),
    marginTop: Metrics.ratio(10),
  },

  textInputStyle: {
    marginLeft: Metrics.ratio(10),
    color: Colors.lightMode.black1,
    width: Metrics.screenWidth * 0.8,
    fontSize: Metrics.ratio(14),
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
