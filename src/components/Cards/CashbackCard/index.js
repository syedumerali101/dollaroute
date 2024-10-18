import React from 'react';
import {Image, StyleSheet, View, TouchableOpacity} from 'react-native';
import Text from '../../Text';
import {Colors, Metrics} from '../../../theme';

const CashbackCard = props => {
  const {item, leftImageStyle, leftImageViewStyle, onPress} = props;
  return (
    <TouchableOpacity activeOpacity={1} onPress={onPress} style={styles.innerRowContainer}>
      <Text size="fourteen" style={styles.dateText}>
        {item?.date}
      </Text>
      {item?.data?.map((dataItem, dataIndex) => (
        <View style={styles.itemContainer}>
          <View style={[styles.itemImageView, leftImageViewStyle]}>
            <Image style={[styles.imageStyle, leftImageStyle]} source={dataItem?.image} />
          </View>

          <View style={styles.itemNameContainer}>
            <Text size="fourteen" style={styles.itemNameStyle}>
              {dataItem?.name}
            </Text>
            <Text size="ten" style={styles.itemTypeStyle}>
              {dataItem?.type}
            </Text>
          </View>

          <View style={styles.itemPriceContainer}>
            <Text size="fourteen" style={styles.priceStyle}>
              {dataItem?.price}
            </Text>
            <Text size="ten" style={styles.cashbackStyle}>
              {dataItem?.cashback}
            </Text>
          </View>
        </View>
      ))}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  innerRowContainer: {
    width: Metrics.screenWidth * 0.9,
    marginTop: Metrics.ratio(20),
  },

  dateText: {
    color: Colors.lightMode.lightGray3,
    fontWeight: '600',
  },

  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: Metrics.ratio(10),
  },

  itemImageView: {
    justifyContent: 'center',
    alignItems: 'center',
    width: Metrics.ratio(40),
  },

  imageStyle: {
    resizeMode: 'contain',
    height: Metrics.ratio(40),
    width: Metrics.ratio(40),
  },

  itemNameContainer: {
    justifyContent: 'center',
    marginLeft: Metrics.ratio(10),
    width: Metrics.screenWidth * 0.5,
  },

  itemNameStyle: {
    color: Colors.lightMode.black7,
    fontWeight: '500',
  },

  itemTypeStyle: {
    color: Colors.lightMode.grey10,
    fontWeight: '400',
    marginTop: Metrics.ratio(5),
  },

  itemPriceContainer: {
    justifyContent: 'center',
    alignItems: 'flex-end',
  },

  priceStyle: {
    color: Colors.lightMode.black7,
    fontWeight: '500',
  },

  cashbackStyle: {
    color: Colors.lightMode.grey10,
    fontWeight: '400',
    marginTop: Metrics.ratio(5),
  },
});

export default CashbackCard;
