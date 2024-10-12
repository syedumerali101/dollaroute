import React from 'react';
import {
  ImageBackground,
  View,
  TouchableOpacity,
  Image,
  StyleSheet,
} from 'react-native';
import Images from '../../theme/Images';
import {Colors, Metrics} from '../../theme';
import {useNavigation} from '@react-navigation/native';
import Text from '../Text';

const ImageBackgroundHeader = ({title, image, onPress}) => {
  const navigation = useNavigation();
  const handleOnPress = () => {
    if (onPress) {
      onPress;
    } else {
      navigation.goBack();
    }
  };
  return (
    <ImageBackground style={styles.mainHeaderContainer} source={image}>
      <TouchableOpacity
        activeOpacity={1}
        onPress={onPress ? onPress : handleOnPress}
        style={styles.btnStyle}>
        <Image style={styles.iconStyle} source={Images.loginScreen.leftArrow} />
      </TouchableOpacity>

      <View style={styles.titleView}>
        <Text size="eighteen" style={styles.titleText}>
          {title}
        </Text>
      </View>

      <View style={styles.rightViewStyle} />
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  mainHeaderContainer: {
    resizeMode: 'contain',
    height: Metrics.screenHeight * 0.25,
    width: Metrics.screenWidth,
    zIndex: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: Metrics.ratio(60),
  },

  iconStyle: {
    resizeMode: 'contain',
    height: Metrics.ratio(8),
    width: Metrics.ratio(30),
  },

  btnStyle: {
    justifyContent: 'center',
    backgroundColor: Colors.lightMode.white,
    width: Metrics.screenWidth * 0.08,
    height: Metrics.screenWidth * 0.08,
    borderRadius: Metrics.ratio(20),
    alignItems: 'center',
    // marginBottom: Metrics.ratio(50),
    marginLeft: Metrics.screenWidth * 0.05,
  },

  rightViewStyle: {
    justifyContent: 'center',
    width: Metrics.screenWidth * 0.08,
    height: Metrics.screenWidth * 0.08,
    borderRadius: Metrics.ratio(20),
    alignItems: 'center',
    marginLeft: Metrics.screenWidth * 0.05,
  },

  titleView: {
    alignItems: 'center',
  },

  titleText: {
    color: Colors.lightMode.white,
    fontWeight: '800',
  },
});

export default ImageBackgroundHeader;
