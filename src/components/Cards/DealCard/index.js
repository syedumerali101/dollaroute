import React from 'react';
import {View, Image, ImageBackground, TouchableOpacity} from 'react-native';

import styles from './styles';
import Images from '../../../theme/Images';
import Text from '../../Text';
import { Metrics } from '../../../theme';

const DealCard = ({image, name, cashback, action, onPress}) => {
  return (
    <TouchableOpacity activeOpacity={1} onPress={onPress}>
      <ImageBackground
        resizeMode="contain"
        style={styles.container}
        borderRadius={Metrics.ratio(10)}
        source={Images.common.dealCard}>
        <View style={styles.dealsImageView}>
          <Image source={image} style={styles.image} />
        </View>

        <View style={styles.separator} />

        <View style={styles.mainRowContainer}>
          <View style={styles.leftView}>
            <Text size='twelve' style={styles.name}>{name}</Text>
            <Text size="sixteen" style={styles.cashbackText}>
              {cashback}
            </Text>

            <View style={styles.calendarRow}>
              <Image source={Images.common.calendar} style={styles.calendar} />
              <Text size="twelve" style={styles.expiry}>
                Expires in 3 Days
              </Text>
            </View>
          </View>

          <View style={styles.thirdContainer}>
            <View style={styles.typeContainer}>
              <Text size="ten" style={styles.typeText}>
                Limited Time Offer
              </Text>
            </View>

            <Text size="ten" style={styles.activateText}>
              {action}
            </Text>
          </View>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
};

export default DealCard;
