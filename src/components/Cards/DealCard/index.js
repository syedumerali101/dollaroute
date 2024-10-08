import React from 'react';
import {View, Image, ImageBackground} from 'react-native';

import styles from './styles';
import Images from '../../../theme/Images';
import Text from '../../Text';

const DealCard = ({image, name, location, wishlist}) => {
  return (
    <ImageBackground style={styles.container} source={Images.common.dealCard}>
      <Image source={Images.common.nike} style={styles.image} />

      <View>
        <Text>Nike</Text>
        <Text size="normal" style={styles.cashbackText}>
          10% Cashback
        </Text>

        <View style={styles.calendarRow}>
          <Image source={Images.common.calendar} style={styles.calendar} />
          <Text>Expires in 3 Days</Text>
        </View>
      </View>

      <View>
        <View style={styles.typeContainer}>
          <Text>Limited Time Offer</Text>
        </View>

        <Text>Activate Now</Text>
      </View>
    </ImageBackground>
  );
};

export default DealCard;
