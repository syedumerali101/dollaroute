import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {Colors, Metrics} from '../../../theme';
import Text from '../../Text';

const DescTextButton = ({
  description,
  underlineText,
  onPress,
  btnStyle,
  textStyle,
}) => {
  return (
    <View style={styles.mainViewContainer}>
      <View style={styles.descriptionViewContainer}>
        <Text size="sixteen" style={styles.description}>
          {description}
        </Text>
      </View>

      <TouchableOpacity
        activeOpacity={1}
        onPress={onPress}
        style={styles.textBtnView}>
        <Text style={styles.textBtnStyle}> {underlineText}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  mainViewContainer: {
    flexDirection: 'row',
    width: Metrics.screenWidth * 0.7,
    alignItems: 'center',
    justifyContent: 'center',
  },

  descriptionViewContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  description: {
    color: Colors.lightMode.grey5,
    fontSize: Metrics.ratio(16),
  },

  textBtnView: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  textBtnStyle: {
    color: Colors.lightMode.pink,
    fontSize: Metrics.ratio(16),
    textDecorationLine: 'underline',
    fontWeight: '800',
  },
});

export default DescTextButton;
