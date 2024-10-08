import React from 'react';
import {View, Image} from 'react-native';
import {Rating} from 'react-native-ratings';

import styles from './styles';
import Images from '../../../theme/Images';
import Text from '../../Text';

const StoreCard = ({image, name, location, wishlist}) => {
  return (
    <View style={styles.container}>
      <Image source={image} style={styles.image} />

      <View style={styles.midContainer}>
        <View style={styles.nameRow}>
          <Text size="normal" style={styles.name}>
            {name}
          </Text>
          <Text style={styles.offersText}>Best Offers</Text>
        </View>
        <Text>{location}</Text>
        <View style={styles.ratingRow}>
          <Rating
            type="star"
            ratingCount={5}
            imageSize={15}
            style={styles.rating}
          />
          <Text>(895 reviews)</Text>
        </View>
      </View>

      <View style={styles.iconsContainer}>
        <Image
          source={wishlist ? Images.common.heartFill : Images.common.heart}
          style={styles.icon}
        />
        <Image source={Images.common.share} style={styles.icon} />
      </View>
    </View>
  );
};

export default StoreCard;
