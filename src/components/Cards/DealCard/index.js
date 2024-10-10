import React from 'react';
import {View, Image, ImageBackground, TouchableOpacity} from 'react-native';

import styles from './styles';
import Images from '../../../theme/Images';
import Text from '../../Text';

const DealCard = ({image, name, cashback, action, onPress}) => {
  return (
    <TouchableOpacity activeOpacity={1} onPress={onPress}>
      <ImageBackground style={styles.container} source={Images.common.dealCard}>
        <Image source={image} style={styles.image} />

        <View>
          <Text style={styles.name}>{name}</Text>
          <Text size="normal" style={styles.cashbackText}>
            {cashback}
          </Text>

          <View style={styles.calendarRow}>
            <Image source={Images.common.calendar} style={styles.calendar} />
            <Text size="xxSmall" style={styles.expiry}>
              Expires in 3 Days
            </Text>
          </View>
        </View>

        <View style={styles.thirdContainer}>
          <View style={styles.typeContainer}>
            <Text size="xxSmall" style={styles.typeText}>
              Limited Time Offer
            </Text>
          </View>

          <Text size="xxSmall" style={styles.activateText}>
            {action}
          </Text>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
};

export default DealCard;
