import React, {useRef, useState} from 'react';
import {Text, View, ScrollView, Image, Dimensions} from 'react-native';
import styles from './styles';
import ImageHeader from '../../components/ImageHeader';
import en from '../../translations/en.json';
import Carousel from 'react-native-snap-carousel';
import {bannerData} from '../../configs/Constants';
import {Colors, Metrics} from '../../theme';

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
              style={[
                styles.animatedDots,
                {
                  width:
                    activeSlide === index
                      ? Metrics.ratio(15)
                      : Metrics.ratio(10),
                  height:
                    activeSlide === index
                      ? Metrics.ratio(15)
                      : Metrics.ratio(10),
                  borderRadius: activeSlide === index ? 15 : 5,
                  backgroundColor:
                    activeSlide === index
                      ? Colors.lightMode.orange
                      : Colors.white,
                  // borderColor: dotRadiusColor
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

  const mainRender = () => {
    return <View>{renderSlideBanner()}</View>;
  };
  return (
    <ScrollView
      keyboardShouldPersistTaps="handled"
      showsVerticalScrollIndicator={false}
      ref={scrollViewRef}
      style={styles.mainScrollViewStyle}>
      <ImageHeader title={en.homeScreen.hi + ' ' + en.homeScreen.name} />
      {mainRender()}
    </ScrollView>
  );
};

export default Home;
