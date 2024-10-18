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

  
});

export default styles;
