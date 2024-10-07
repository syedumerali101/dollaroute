import {StyleSheet} from 'react-native';
import {Colors, Metrics} from '../../theme';

const styles = StyleSheet.create({
  mainScrollViewStyle: {
    flex: 1,
    color: Colors.lightMode.white,
  },

  sliderBannerView: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  homeBannerView: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  homeBannerStyle: {
    resizeMode: 'contain',
    height: Metrics.screenWidth * 0.37,
    width: Metrics.screenWidth * 0.94,
  },
});

export default styles;
