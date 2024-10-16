import React from 'react';
import {View, Image, TouchableOpacity, StyleSheet} from 'react-native';
import Text from '../../Text';
import {Colors, Metrics} from '../../../theme';
import Images from '../../../theme/Images';

const AddressCard = ({data, title, onPress}) => {
  return (
    <TouchableOpacity style={styles.mainBtnContainer} activeOpacity={1}>
      <View style={styles.titleView}>
        <Text size="sixteen" style={styles.titleStyle}>
          {title}
        </Text>
      </View>

      {data?.map((item, index) => {
        return (
          <View style={styles.detailsRoewView}>
            <View style={styles.iconView}>
              <Image style={styles.iconStyle} source={item?.icon} />
            </View>

            <View style={styles.detailTitleView}>
              <Text size="fourteen" style={styles.titleTextStyle}>
                {item?.title}
              </Text>
            </View>
          </View>
        );
      })}

      <TouchableOpacity onPress={onPress} style={styles.sendBtnStyle}>
        <Image style={styles.sendIconStyle} source={Images.common.send} />
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  mainBtnContainer: {
    width: Metrics.screenWidth * 0.9,
    borderWidth: 0.3,
    borderColor: Colors.lightMode.lightGray4,
    borderRadius: Metrics.ratio(10),
    marginTop: Metrics.ratio(10),
    paddingHorizontal: Metrics.ratio(12),
    paddingVertical: Metrics.ratio(15),
  },

  titleView: {
    justifyContent: 'center',
    marginBottom: Metrics.ratio(10),
  },

  detailTitleView: {
    justifyContent: 'center',
    marginLeft: Metrics.ratio(8),
  },

  addressTitle: {
    justifyContent: 'center',
    marginLeft: Metrics.ratio(10),
  },

  titleStyle: {
    color: Colors.lightMode.black7,
    fontWeight: '500',
  },

  titleTextStyle: {
    color: Colors.lightMode.grey10,
  },

  detailsRoewView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: Metrics.ratio(10),
  },

  iconView: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  iconStyle: {
    resizeMode: 'contain',
    height: Metrics.ratio(15),
    width: Metrics.ratio(15),
  },

  sendBtnStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.lightMode.pink,
    borderRadius: Metrics.ratio(20),
    width: Metrics.screenWidth * 0.08,
    height: Metrics.screenWidth * 0.08,
    alignSelf: 'flex-end',
    position: 'absolute',
    bottom: 0,
    right: 0,
    marginRight: Metrics.ratio(12),
    marginBottom: Metrics.ratio(10),
  },

  sendIconStyle: {
    resizeMode: 'contain',
    height: Metrics.ratio(12),
    width: Metrics.ratio(12),
  },
});

export default AddressCard;
