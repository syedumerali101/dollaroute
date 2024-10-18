import React from 'react';
import {View, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {Colors, Metrics} from '../../theme';
import Images from '../../theme/Images';
import {useNavigation} from '@react-navigation/native';
import Text from '../Text';

const Header = ({
  title,
  rightView,
  headerContainer,
  titleTextStyle,
  leftIconStyle,
  rightIcon,
}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      activeOpacity={1}
      onPress={() => navigation?.goBack()}
      style={[styles.headerContainer, headerContainer]}>
      <View style={styles.leftView}>
        <Image
          style={[styles.leftIconStyle, leftIconStyle]}
          source={Images.loginScreen.leftArrow}
        />
      </View>

      <View style={styles.centerView}>
        <Text size="eighteen" style={[styles.centerText, titleTextStyle]}>
          {title}
        </Text>
      </View>

      <TouchableOpacity activeOpacity={1} style={styles.rightView}>
        {rightIcon ? (
          <Image source={rightIcon} style={styles.rightIconStyle} />
        ) : null}
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    width: Metrics.screenWidth,
    height: Metrics.ratio(56),
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
    width: Metrics.screenWidth * 0.71,
  },

  centerText: {
    color: Colors.lightMode.black1,
    // fontSize: Metrics.ratio(12),
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

  rightIconStyle: {
    resizeMode: 'contain',
    height: Metrics.ratio(17),
    width: Metrics.ratio(17),
  },
});

export default Header;
