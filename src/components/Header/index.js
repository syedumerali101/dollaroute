import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {Colors, Metrics} from '../../theme';
import Images from '../../theme/Images';
import { useNavigation } from '@react-navigation/native';

const Header = ({title}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity activeOpacity={1} onPress={() => navigation?.goBack()} style={styles.headerContainer}>
      <View style={styles.leftView}>
        <Image
          style={styles.leftIconStyle}
          source={Images.loginScreen.leftArrow}
        />
      </View>

      <View style={styles.centerView}>
        <Text style={styles.centerText}>{title}</Text>
      </View>

      {/* <View style={styles.rightView}>
        <Image
          style={styles.rightIconStyle}
          source={Images.loginScreen.leftArrow}
        />
      </View> */}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    width: Metrics.screenWidth,
    height: Metrics.ratio(40),
    flexDirection: 'row',
  },

  leftView: {
    justifyContent: 'center',
    alignItems: 'center',
    width: Metrics.ratio(46),
  },

  leftIconStyle: {
    resizeMode: 'contain',
    height: Metrics.ratio(12),
    width: Metrics.ratio(40),
  },

  centerView: {
    justifyContent: 'center',
    alignItems: 'center',
    width: Metrics.screenWidth * 0.7,
  },

  centerText: {
    color: Colors.lightMode.black1,
    fontSize: Metrics.ratio(12),
    fontWeight: '600',
  },

  rightView: {
    justifyContent: 'center',
    alignItems: 'center',
    width: Metrics.ratio(46),
  },

  rightIconStyle: {
    resizeMode: 'contain',
    height: Metrics.ratio(12),
  },
});

export default Header;
