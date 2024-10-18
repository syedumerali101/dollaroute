import React from 'react';
import {View, Image, TouchableOpacity, StyleSheet} from 'react-native';
import {Colors, Metrics} from '../../../theme';
import Text from '../../Text';
import Images from '../../../theme/Images';

const PaymentButton = ({
  title,
  icon,
  id,
  onPress,
  mainBtnContainer,
  selected,
  disabled,
}) => {
  return (
    <TouchableOpacity
      disabled={disabled}
      activeOpacity={1}
      onPress={() => onPress(id)}
      style={[
        styles.mainBtnContainer,
        {
          borderColor:
            selected === id ? Colors.lightMode.pink : Colors.lightMode.grey8,
        },
        mainBtnContainer,
      ]}>
      <View style={styles.innerContainer}>
        <View style={styles.iconView}>
          <Image source={icon} style={styles.iconStyle} />
        </View>

        <View style={styles.titleView}>
          <Text size="eighteen" style={styles.titleText}>
            {title}
          </Text>
        </View>
      </View>

      {selected === id && (
        <View style={styles.tickView}>
          <Image
            style={[
              styles.tickStyle,
              {
                tintColor: selected
                  ? Colors.lightMode.pink
                  : Colors.lightMode.grey2,
              },
            ]}
            source={Images.common.tick}
          />
        </View>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  mainBtnContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: Metrics.screenWidth * 0.9,
    height: Metrics.ratio(50),
    borderRadius: Metrics.ratio(10),
    borderWidth: Metrics.ratio(1.5),
    borderColor: Colors.lightMode.grey8,
    marginTop: Metrics.ratio(5),
    marginBottom: Metrics.ratio(5),
    paddingHorizontal: Metrics.ratio(10),
    justifyContent: 'space-between',
  },

  innerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  iconView: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  iconStyle: {
    resizeMode: 'contain',
    height: Metrics.ratio(25),
    width: Metrics.ratio(25),
  },

  titleView: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: Metrics.ratio(5),
  },

  titleText: {
    color: Colors.lightMode.black1,
    // fontSize: Metrics.ratio(12),
    textTransform: 'capitalize',
  },

  tickView: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  tickStyle: {
    resizeMode: 'contain',
    height: Metrics.ratio(12),
    width: Metrics.ratio(12),
  },
});

export default PaymentButton;
