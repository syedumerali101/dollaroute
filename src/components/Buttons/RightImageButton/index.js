import React from 'react';
import {Image, StyleSheet, TouchableOpacity} from 'react-native';
import Images from '../../../theme/Images';
import {Colors, Metrics} from '../../../theme';
import Text from '../../Text';

const RightImageButton = props => {
  const {onPress, index, item} = props;

  return (
    <TouchableOpacity
      onPress={() => onPress(item?.route)}
      key={index}
      style={styles.optionItem}>
      <Text style={styles.optionText} size="fourteen">
        {item.title}
      </Text>
      <Image source={Images.common.rightArrow} style={styles.arrowIcon} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  optionItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: Metrics.ratio(10),
    borderBottomWidth: 1,
    borderBottomColor: Colors.lightMode.lightGray7,
    height: Metrics.ratio(40),
    width: Metrics.screenWidth * 0.9,
    borderRadius: Metrics.ratio(0.2),
    alignItems: 'center',
  },
  optionText: {
    color: Colors.TextSecondary,
    fontWeight: '500',
  },

  arrowIcon: {
    height: Metrics.ratio(15),
    width: Metrics.ratio(15),
    resizeMode: 'contain',
  },
});

export default RightImageButton;
