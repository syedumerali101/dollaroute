import React from 'react';
import {Text, View, TouchableOpacity, StyleSheet} from 'react-native';
import {Colors, Metrics} from '../../../theme';

const SubmitButton = ({title, disabled, style, type, textStyle, onPress}) => {
  return (
    <TouchableOpacity
      activeOpacity={1}
      disabled={disabled ? disabled : false}
      style={[styles.touchableButtonStyle, style]}
      onPress={onPress}>
      <Text style={[styles.titleTextStyle, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  touchableButtonStyle: {
    width: Metrics.screenWidth * 0.85,
    backgroundColor: Colors.lightMode.pink,
    height: Metrics.ratio(40),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: Metrics.ratio(10),
    marginTop: Metrics.ratio(10),
  },

  titleTextStyle: {
    color: Colors.lightMode.white4,
    fontSize: Metrics.ratio(12),
    fontWeight: '600',
    textTransform: 'capitalize'
  },
});

export default SubmitButton;
