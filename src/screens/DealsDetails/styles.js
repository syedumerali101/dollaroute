import {StyleSheet} from 'react-native';
import {Colors, Metrics} from '../../theme';

const styles = StyleSheet.create({
  mainScrollViewStyle: {
    flex: 1,
    backgroundColor: Colors.lightMode.white,
  },

  mainRenderContainer: {
    backgroundColor: Colors.lightMode.white,
    height: Metrics.screenHeight * 100,
    borderTopLeftRadius: Metrics.ratio(20),
    borderTopRightRadius: Metrics.ratio(20),
    marginTop: Metrics.ratio(-20),
  },

  contentContainerStyle: {
    alignItems: 'center',
  },

  descriptionText: {
    color: Colors.lightMode.black6,
    fontWeight: '400',
  },

  descriptionView: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: Metrics.ratio(20),
  },

  mainDescriptionContainer: {
    width: Metrics.screenWidth * 0.9,
    marginTop: Metrics.ratio(10),
  },

  promoCardContainer: {
    marginBottom: Metrics.ratio(10),
  },

  mainContainerStyle: {
    width: Metrics.screenWidth * 0.9,
    marginTop: Metrics.ratio(10)
  },

  imageBackgroundStyle:{
    width: Metrics.screenWidth * 0.9
  },

  rewardsContainerStyle: {
    alignItems: 'center',
    marginTop: Metrics.ratio(10)
  },

  listStyle: {
    width: Metrics.screenWidth,
  },
});

export default styles;
