import React from 'react';
import {
  View,
  Text,
  Animated,
  Dimensions,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import {StyleSheet} from 'react-native';
import {Metrics, Colors} from '../../theme';
import Images from '../../theme/Images';
import en from '../../translations/en.json';
import SubmitButton from '../../components/Buttons/SubmitButton';
import {onboarding_screens} from '../../configs/Constants';

const Welcome = () => {
  const {width} = Dimensions.get('window');
  const scrollX = React.useRef(new Animated.Value(0)).current;
  const flatListRef = React.useRef();

  const [currentIndex, setCurrentIndex] = React.useState(0);

  const onViewChangeRef = React.useRef(({viewableItems, changed}) => {
    setCurrentIndex(viewableItems[0].index);
  });

  const handleNextPress = () => {
    if (currentIndex < 2) {
      flatListRef?.current?.scrollToIndex({
        index: currentIndex + 1,
        animated: true,
      });
    } else {
      NavigationService.navigate('Welcome');
    }
  };

  const Dots = () => {
    const dotPosition = Animated.divide(scrollX, width);

    return (
      <View style={styles.mainDotsRow}>
        {onboarding_screens()?.map((item, index) => {
          const dotColor = dotPosition.interpolate({
            inputRange: [index - 1, index, index + 1],
            outputRange: [
              Colors.lightMode.lightPink,
              Colors.lightMode.pink,
              Colors.lightMode.lightPink,
            ],
            extrapolate: 'clamp',
          });

          const dotWidth = dotPosition.interpolate({
            inputRange: [index - 1, index, index + 1],
            outputRange: [8, 12, 8],
            extrapolate: 'clamp',
          });

          const dotHeight = dotPosition.interpolate({
            inputRange: [index - 1, index, index + 1],
            outputRange: [8, 12, 8],
            extrapolate: 'clamp',
          });

          return (
            <Animated.View
              key={`dot-${index}`}
              style={[
                styles.animatedDots,
                {
                  width: dotWidth,
                  backgroundColor: dotColor,
                  height: dotHeight,
                },
              ]}
            />
          );
        })}
      </View>
    );
  };

  function renderFooter() {
    return (
      <View style={styles.footerRow}>
        <SubmitButton title={en.welcomeScreens.signupBtnTitle} />
        <SubmitButton
          title={en.welcomeScreens.loginBtnTitle}
          style={styles.touchableButtonStyle}
          textStyle={styles.textStyle}
        />
      </View>
    );
  }

  return (
    <View style={styles.mainImageBackground}>
      <Animated.FlatList
        ref={flatListRef}
        horizontal
        onScrollToIndexFailed={info => {
          console.log('onboarding', info);
        }}
        pagingEnabled
        data={onboarding_screens()}
        scrollEventThrottle={16}
        snapToAlignment="center"
        showsHorizontalScrollIndicator={false}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {x: scrollX}}}],
          {useNativeDriver: false},
        )}
        onViewableItemsChanged={onViewChangeRef.current}
        keyExtractor={item => `${item.id}`}
        renderItem={({item, index}) => {
          return (
            <View
              style={{
                width: width,
              }}>
              <ImageBackground
                source={item.backgroundImage}
                resizeMode="contain"
                style={styles.imageBackgroundContainer}>
                <View style={styles.mainImageTextContainer}>
                  <Text style={styles.title}>{item.title}</Text>
                  <Text style={styles.description}>{item.description}</Text>
                </View>
              </ImageBackground>
            </View>
          );
        }}
      />

      <View style={styles.dotsRowContainer}>
        <Dots />
      </View>

      {renderFooter()}
    </View>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  mainDotsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  animatedDots: {
    borderRadius: Metrics.ratio(20),
    marginHorizontal: Metrics.ratio(5),
    height: 10,
  },

  footerRow: {
    marginVertical: Metrics.ratio(20),
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: Metrics.ratio(50),
  },

  skipPressStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    width: Metrics.ratio(40),
  },

  skipTextStyle: {
    color: Colors.TextSecondary,
    fontWeight: '400',
    fontSize: Metrics.ratio(14),
    lineHeight: Metrics.ratio(23),

    opacity: 0.4,
  },

  dotsRowContainer: {
    justifyContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginBottom: Metrics.ratio(10),
  },

  nextButtonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  nextTextStyle: {
    color: Colors.TextSecondary,
    textDecorationColor: Colors.TextSecondary,
    fontWeight: '400',
    fontSize: Metrics.ratio(14),
    lineHeight: Metrics.ratio(23),
  },

  mainImageBackground: {
    flex: 1,
    backgroundColor: Colors.white,
  },

  imageBackgroundContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    width: Metrics.screenWidth * 0.6,
    height: Metrics.screenHeight * 0.5,
    alignSelf: 'center',
  },

  mainImageTextContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 0,
    top: 0,
    marginTop: Metrics.screenHeight * 0.4,
  },

  title: {
    fontWeight: '700',
    fontSize: Metrics.ratio(22),
    color: Colors.lightMode.black1,
    textAlign: 'center',
    width: Metrics.screenWidth * 0.7,
  },

  description: {
    fontWeight: '400',
    fontSize: Metrics.ratio(12),
    color: Colors.lightMode.grey5,
    marginTop: Metrics.ratio(10),
    width: Metrics.screenWidth * 0.85,
    textAlign: 'center',
  },

  stepsDescription: {
    fontSize: Metrics.ratio(16),
    lineHeight: Metrics.ratio(20),
    color: Colors.lightMode.grey5,
    marginTop: Metrics.ratio(10),
    width: Metrics.screenWidth * 0.5,
    textAlign: 'center',
  },

  touchableButtonStyle: {
    backgroundColor: Colors.lightMode.lightPink2,
  },

  textStyle: {
    color: Colors.lightMode.pink,
  },
});
