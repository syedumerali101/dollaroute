import React, {useRef, useState} from 'react';
import {
  View,
  ScrollView,
  Image,
  Dimensions,
  FlatList,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import styles from './styles';
import ImageHeader from '../../components/ImageHeader';
import en from '../../translations/en.json';
import Carousel from 'react-native-snap-carousel';
import {
  bannerData,
  categoriesTags,
  featuredShops,
  promoRewards,
} from '../../configs/Constants';
import {Colors, Metrics} from '../../theme';
import Text from '../../components/Text';
import RowButton from '../../components/Buttons/RowButton';
import Images from '../../theme/Images';
import CategoryCard from '../../components/Cards/CategoryCard';
import SafeAreaWrapper from '../../components/Wrappers/SafeAreaWrapper';
import SearchTextInput from '../../components/Inputs/SearchTextInput';

const Categories = () => {
  const windowWidth = Dimensions.get('window').width;
  const scrollViewRef = useRef(null);
  const [activeSlide, setActiveSlide] = useState(0);

  const renderSearchBox = () => {
    return <SearchTextInput placeHolder={en.categoriesScreen.search} />;
  };

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
      <View key={item?.lineId} style={styles.homeBannerView}>
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
        <Text size="twelve" style={styles.featuredTitleStyle}>
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
        data={categoriesTags()}
        renderItem={featuredShopItem}
        contentContainerStyle={styles.featuredContentContainerStyle}
        showsHorizontalScrollIndicator={false}
      />
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

  return (
    <ScrollView
      keyboardShouldPersistTaps="handled"
      showsVerticalScrollIndicator={false}
      ref={scrollViewRef}
      style={styles.mainRenderContainer}>
      {renderSearchBox()}
      {renderFeaturedShops()}
      <RowButton
        style={styles.rowBtnStyle}
        title="Recommended Offers"
        buttonTitle={'See all'}
      />

      {renderSlideBanner()}
      <RowButton
        style={styles.rowBtnStyle}
        title="Electronics"
        buttonTitle={'See all'}
      />
      {renderPromoRewards()}

      <RowButton
        style={styles.catgoriesRowStyle}
        title="Electronics"
        buttonTitle={'See all'}
      />
      {renderPromoRewards()}

      <RowButton
        style={styles.catgoriesRowStyle}
        title="Electronics"
        buttonTitle={'See all'}
      />
      {renderPromoRewards()}

      <RowButton
        style={styles.catgoriesRowStyle}
        title="Electronics"
        buttonTitle={'See all'}
      />
      {renderPromoRewards()}
    </ScrollView>
  );
};

export default Categories;
