import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Colors, Metrics} from '../../../theme';

const TextButton = ({text, onPress, btnStyle, textStyle}) => {
  return (
    <TouchableOpacity
      style={[styles.btnStyle, btnStyle]}
      activeOpacity={1}
      onPress={onPress}>
      <Text style={[styles.textStyle, textStyle]}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btnStyle: {
    justifyContent: 'center',
    marginTop: Metrics.ratio(20),
    marginBottom: Metrics.ratio(20),
  },
  textStyle: {
    color: Colors.lightMode.pink,
    fontSize: Metrics.ratio(12),
    fontWeight: '600',
  },
});

export default TextButton;
