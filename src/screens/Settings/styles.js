import {StyleSheet} from 'react-native';
import {Colors, Metrics} from '../../theme';

const styles = StyleSheet.create({
  contentContainerStyle: {
    alignItems: 'center',
  },

  mainContainer: {
    flex: 1,
    backgroundColor: Colors.lightMode.white,
    alignItems: 'center',
    paddingTop: Metrics.screenHeight * 0.05,
  },

  mainRenderContainer: {
    backgroundColor: Colors.lightMode.white,
  },

  mainSwitchButtonsContainer:{
    // width: Metrics.screenWidth * 0.9,
  },

  btnTextStyle: {
    color: Colors.lightMode.black8,
    fontWeight: '500',
    fontSize: Metrics.ratio(14),
  },

  btnStyle:{
    width: Metrics.screenWidth * 0.9,
    marginTop: Metrics.ratio(10)
  }

  
});

export default styles;
