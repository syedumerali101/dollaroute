import React, {memo} from 'react';
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import Text from '../../Text';
import {Colors, Metrics} from '../../../theme';

const CategoryCard = ({item}) => {
  const {image, icon, title, points, name} = item;
  return (
    <TouchableOpacity style={styles.mainContainer}>
      <ImageBackground
        borderTopLeftRadius={Metrics.ratio(10)}
        borderTopRightRadius={Metrics.ratio(10)}
        source={image}
        style={styles.mainImageContainer}>
        <View style={styles.iconView}>
          <Image source={icon} style={styles.iconStyle} />
        </View>
      </ImageBackground>

      <View style={styles.detailsView}>
        <Text size="fourteen" style={styles.titleText}>
          {title}
        </Text>

        <Text size="ten" style={styles.pointsText}>
          {points}{' '}
          <Text size="ten" style={styles.singleDotStyle}>
            .
          </Text>
          <Text size="ten" style={styles.nameTextStyle}>
            {' '}
            {name}
          </Text>
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: Colors.lightMode.white,
    width: Metrics.screenWidth * 0.75,
    borderRadius: Metrics.ratio(10),
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,
    elevation: 1,
    height: Metrics.screenHeight * 0.2,
  },

  mainImageContainer: {
    resizeMode: 'contain',
    height: Metrics.screenHeight * 0.13,
    width: Metrics.screenWidth * 0.75,
  },

  iconView: {
    justifyContent: 'center',
    borderWidth: 3,
    borderColor: Colors.white,
    height: Metrics.ratio(18),
    width: Metrics.ratio(18),
    borderRadius: Metrics.ratio(20),
    alignItems: 'center',
    marginLeft: Metrics.ratio(10),
    marginTop: Metrics.ratio(60),
  },

  iconStyle: {
    resizeMode: 'contain',
    height: Metrics.ratio(15),
    width: Metrics.ratio(15),
  },

  detailsView: {
    justifyContent: 'center',
  },

  pointsText: {
    color: Colors.lightMode.grey10,
    fontWeight: '400',
    marginHorizontal: Metrics.ratio(10),
    marginTop: Metrics.ratio(5)
  },

  singleDotStyle: {
    color: Colors.lightMode.grey10,
    fontWeight: '400',
  },

  nameTextStyle: {
    color: Colors.lightMode.pink3,
    fontWeight: '400',
  },

  titleText: {
    color: Colors.lightMode.black1,
    marginTop: Metrics.ratio(8),
    marginHorizontal: Metrics.ratio(10)
  },


});

export default CategoryCard;
