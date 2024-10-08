import {StyleSheet} from 'react-native';
import {Colors, Metrics} from '../../../theme';

const styles = StyleSheet.create({
  textInputView: {
    width: Metrics.screenWidth * 0.9,
    height: Metrics.ratio(40),
    borderColor: Colors.lightMode.grey11,
    flexDirection: 'row',
    borderRadius: Metrics.ratio(20),
    marginTop: Metrics.ratio(10),
    alignSelf: 'center',
    // shadowColor: '#000',
    // shadowOffset: {
    //   width: 0,
    //   height: 1,
    // },
    // shadowOpacity: 0.18,
    // shadowRadius: 1.0,
    // elevation: 1,
    backgroundColor: Colors.lightMode.grey12,
  },

  customStyle: {
    width: Metrics.screenWidth * 0.9,
    height: Metrics.ratio(40),
    borderColor: Colors.lightMode.pink,
    borderWidth: Metrics.ratio(1.5),
    flexDirection: 'row',
    borderRadius: Metrics.ratio(20),
    marginTop: Metrics.ratio(10),
    alignSelf: 'center',
    // shadowColor: '#000',
    // shadowOffset: {
    //   width: 0,
    //   height: 1,
    // },
    // shadowOpacity: 0.18,
    // shadowRadius: 1.0,
    // elevation: 1,
  },

  textInputStyle: {
    marginLeft: Metrics.ratio(10),
    color: Colors.lightMode.black1,
    width: Metrics.screenWidth * 0.58,
    fontSize: Metrics.ratio(12),
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

  leftView: {
    justifyContent: 'center',
    alignItems: 'center',
    width: Metrics.screenWidth * 0.12,
    left: Metrics.ratio(5),
  },

  leftIconStyle: {
    resizeMode: 'contain',
    height: Metrics.ratio(20),
    width: Metrics.ratio(20),
  },

  rightView: {
    alignItems: 'center',
    flexDirection: 'row',
    width: Metrics.screenWidth * 0.15,
    justifyContent: 'space-evenly',
  },

  rightIcon: {
    resizeMode: 'contain',
    height: Metrics.ratio(20),
    width: Metrics.ratio(20),
  },

  separatorStyle: {
    width: Metrics.ratio(0.08),
    height: Metrics.ratio(20),
    borderWidth: 0.5,
    borderColor: Colors.opacColor,
  },
});

export default styles;
