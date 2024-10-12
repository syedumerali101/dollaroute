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
    paddingBottom: Metrics.ratio(10)
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

  headingMainView:{
    justifyContent: 'center',
    marginTop: Metrics.ratio(5),
  },

  detailsHeading:{
    color: Colors.lightMode.black5,
    fontWeight: '600'
  },

  subTitleStyle:{
    color: Colors.lightMode.grey9,
    fontWeight: '500',
    marginTop: Metrics.ratio(5)
  },

  loadingView:{
    backgroundColor: Colors.lightMode.lightPink4,
    width: Metrics.screenWidth * 0.9,
    height: Metrics.ratio(7),
    borderRadius: Metrics.ratio(20),
    marginTop: Metrics.ratio(10),
    justifyContent: 'center'
  },

  innerLoading:{
    backgroundColor: Colors.lightMode.pink,
    width: Metrics.screenWidth * 0.7,
    height: Metrics.ratio(4),
    borderRadius: Metrics.ratio(20),
    marginHorizontal: Metrics.ratio(3) 
  },

  loadingNumbersView:{
    justifyContent: 'center',
    marginTop: Metrics.ratio(5)
  },

  highlightedText:{
    color: Colors.lightMode.pink,
    fontWeight: '400'
  },

  unhighlightedText:{
    color: Colors.lightMode.lightGray4,
     fontWeight: '400'
  },

  welcomeDesc:{
    color: Colors.lightMode.black6,
    fontWeight: '400'
  },

  descriptionContainer:{
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: Metrics.ratio(20)
  },

  loaderDescContainer:{
    width: Metrics.screenWidth * 0.9
  },

  pointText: {
    color: Colors.lightMode.black6,
    fontWeight: '400'
  },

  pointViewText:{
 color: Colors.lightMode.black6,
    fontWeight: '400',
    marginHorizontal: Metrics.ratio(5),
  },

  pointRowView:{
    flexDirection: 'row',
    marginTop: Metrics.ratio(5)
  },

  pointViewContainer:{
    justifyContent: 'center',
  },

  headingText:{
    color: Colors.lightMode.black6,
    fontWeight: '700'
  },

  pointsMainContainer:{
    marginTop: Metrics.ratio(20)
  },

  submitButtonStyle: {
    width: Metrics.screenWidth * 0.9,
    marginTop: Metrics.ratio(10),
  },


});

export default styles;
