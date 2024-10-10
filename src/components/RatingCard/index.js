import React from 'react';
import {View, StyleSheet, Image} from 'react-native';
import Text from '../Text';
import {Rating} from 'react-native-ratings';
import {Colors, Metrics} from '../../theme';
import en from '../../translations/en.json';

const RatingCard = ({storeName, rating, reviews, storeImage}) => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.storeProfileView}>
        <Image source={storeImage} style={styles.storeImageStyle} />
      </View>

      <View style={styles.detailsRowView}>
        <View style={styles.storeNameView}>
          <Text size="large" style={styles.storeNameText}>
            {storeName}
          </Text>
        </View>

        <View style={styles.ratingReviewsView}>
          <Rating readonly={true} type="star" ratingCount={5} imageSize={15} />
          <Text size="twelve" style={styles.reviews}>
            ({reviews} {en.common.reviews}){' '}
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: Metrics.ratio(4),
  },

  storeProfileView: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  storeImageStyle: {
    resizeMode: 'contain',
    height: Metrics.ratio(42),
    width: Metrics.ratio(42),
  },

  detailsRowView: {
    justifyContent: 'center',
    marginLeft: Metrics.ratio(10),
  },

  storeNameView: {
    justifyContent: 'center',
  },

  storeNameText: {
    color: Colors.lightMode.black5,
    fontWeight: '600',
  },

  ratingReviewsView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: Metrics.ratio(5),
  },

  reviews: {
    color: Colors.lightMode.lightGray5,
    fontWeight: '500',
    marginLeft: Metrics.ratio(5),
  },
});

export default RatingCard;
