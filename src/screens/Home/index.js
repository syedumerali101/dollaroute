import React, {useRef, useState} from 'react';
import {
  View,
  ScrollView,
  Image,
  Dimensions,
  FlatList,
  TouchableOpacity,
  ImageBackground,
  StatusBar,
} from 'react-native';
import styles from './styles';
import ImageHeader from '../../components/ImageHeader';
import en from '../../translations/en.json';
import Carousel from 'react-native-snap-carousel';
import {bannerData, featuredShops, promoRewards} from '../../configs/Constants';
import {Colors, Metrics} from '../../theme';
import Text from '../../components/Text';
import RowButton from '../../components/Buttons/RowButton';
import Images from '../../theme/Images';
import CategoryCard from '../../components/Cards/CategoryCard';

const Home = () => {
  const windowWidth = Dimensions.get('window').width;
  const scrollViewRef = useRef(null);
  const [activeSlide, setActiveSlide] = useState(0);

  const renderDots = () => {
    return (
      <View style={styles.dotsView}>
        {bannerData()?.map((item, index) => {
          return (
            <View
              key={item?.id + index + Date.now()}
              style={[
                styles.animatedDots,
                {
                  width:
                    activeSlide === index
                      ? Metrics.ratio(20)
                      : Metrics.ratio(10),
                  height:
                    activeSlide === index ? Metrics.ratio(4) : Metrics.ratio(2),
                  borderRadius: activeSlide === index ? 15 : 5,
                  backgroundColor:
                    activeSlide === index
                      ? Colors.lightMode.pink2
                      : Colors.lightMode.lightPink2,
                },
              ]}
            />
          );
        })}
      </View>
    );
  };

  const renderItem = ({item}) => {
    return (
      <View key={item?.id} style={styles.homeBannerView}>
        <Image style={styles.homeBannerStyle} source={item?.image} />
      </View>
    );
  };

  const renderSlideBanner = () => {
    return (
      <View style={styles.sliderBannerView}>
        <Carousel
          data={bannerData()}
          renderItem={renderItem}
          sliderWidth={windowWidth + 1}
          itemWidth={Metrics.screenWidth}
          layout="default"
          onSnapToItem={index => setActiveSlide(index)}
          keyExtractor={(item, index) => item?.lineId + index}
          swipeThreshold={3}
        />
        {bannerData()?.length > 1 && renderDots()}
      </View>
    );
  };

  const featuredShopItem = ({item}) => {
    return (
      <TouchableOpacity activeOpacity={1} style={styles.featuredStyle}>
        <Image style={styles.imageStyle} source={item?.image} />
        <Text size="fourteen" style={styles.featuredTitleStyle}>
          {item?.title}
        </Text>
      </TouchableOpacity>
    );
  };

  const renderFeaturedShops = () => {
    return (
      <FlatList
        horizontal={true}
        style={styles.listStyle}
        data={featuredShops()}
        renderItem={featuredShopItem}
        contentContainerStyle={styles.featuredContentContainerStyle}
        showsHorizontalScrollIndicator={false}
      />
    );
  };

  const renderReferBanner = () => {
    return (
      <View style={styles.referBannerContainer}>
        <View style={styles.leftBannerView}>
          <View style={styles.referDetailsView}>
            <Text style={styles.referFriendTextStyle} size="fourteen">
              {en.homeScreen.referAFriend}{' '}
            </Text>
            <Text style={styles.earnTextStyle} size="sixteen">
              {en.homeScreen.earnAmount}
            </Text>

            <TouchableOpacity activeOpacity={1} style={styles.referNowBtn}>
              <Text style={styles.referBtnText} size="xxxSmall">
                {en.homeScreen.referNow}
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <ImageBackground
          borderTopRightRadius={Metrics.ratio(10)}
          borderBottomRightRadius={Metrics.ratio(10)}
          source={Images.dummy.referBanner}
          style={styles.rightBannerImageView}
        />
      </View>
    );
  };

  const promoItem = ({item}) => {
    return (
      <View style={styles.promoCardContainer}>
        <CategoryCard item={item} />
      </View>
    );
  };

  const renderPromoRewards = () => {
    return (
      <FlatList
        data={promoRewards()}
        horizontal={true}
        style={styles.promoListStyle}
        contentContainerStyle={styles.promoContentContainerStyle}
        showsHorizontalScrollIndicator={false}
        renderItem={promoItem}
      />
    );
  };

  const mainRender = () => {
    return (
      <ScrollView
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
        ref={scrollViewRef}
        style={styles.mainRenderContainer}>
        <RowButton
          title="Recommended Offers"
          buttonTitle={'See all'}
        />
        {renderSlideBanner()}
        <RowButton
          style={styles.rowBtnStyle}
          title="Featured Stores"
          buttonTitle={'See all'}
        />
        {renderFeaturedShops()}
        {renderReferBanner()}
        <RowButton
          style={styles.rowBtnStyle}
          title="Promo & Rewards"
          buttonTitle={'See all'}
        />
        {renderPromoRewards()}
      </ScrollView>
    );
  };
  return (
    <>
      <StatusBar
        backgroundColor={'transparent'}
        barStyle={'dark-content'}
        translucent={true}
      />

      <View style={styles.mainScrollViewStyle}>
        <ImageHeader title={en.homeScreen.hi + ' ' + en.homeScreen.name} />
        <View style={styles.whiteSeparatorHeader} />
        {mainRender()}
      </View>
    </>
  );
};

export default Home;
