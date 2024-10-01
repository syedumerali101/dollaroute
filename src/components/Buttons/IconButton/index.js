import React from 'react';
import {Text, View, Image, TouchableOpacity, StyleSheet} from 'react-native';
import {Colors, Metrics} from '../../../theme';

const IconButton = ({title, icon, onPress}) => {
  return (
    <TouchableOpacity activeOpacity={1} style={styles.mainBtnContainer}>
      <View style={styles.iconView}>
        <Image source={icon} style={styles.iconStyle} />
      </View>

      <View style={styles.titleView}>
        <Text style={styles.titleText}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  mainBtnContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: Metrics.screenWidth * 0.9,
    height: Metrics.ratio(40),
    justifyContent: 'center',
    borderRadius: Metrics.ratio(10),
    borderWidth: Metrics.ratio(1.5),
    borderColor: Colors.lightMode.grey6,
    marginTop: Metrics.ratio(10),
    marginBottom: Metrics.ratio(20)
  },

  iconView: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  iconStyle: {
    resizeMode: 'contain',
    height: Metrics.ratio(20),
    width: Metrics.ratio(20),
  },

  titleView: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: Metrics.ratio(5),
  },

  titleText: {
    color: Colors.lightMode.black1,
    fontSize: Metrics.ratio(12),
    textTransform: 'capitalize',
  },
});

export default IconButton;
