import React, { memo } from 'react';
import {TouchableOpacity, View, StyleSheet} from 'react-native';
import Text from '../../Text';
import {Colors, Metrics} from '../../../theme';

const RowButton = ({title, buttonTitle, onPress, style}) => {
  return (
    <View style={[styles.rowContainer, style]}>
      <View style={styles.titleView}>
        <Text size="large" style={styles.titleStyle}>
          {title}
        </Text>
      </View>

      <TouchableOpacity style={styles.btnStyle} onPress={onPress}>
        <Text size="twelve" style={styles.btnTextStyle}>
          {buttonTitle}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  rowContainer: {
    width: Metrics.screenWidth * 0.9,
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: Metrics.ratio(10),
    marginBottom: Metrics.ratio(10)
  },

  titleStyle: {
    color: Colors.lightMode.black5,
    fontWeight: '600',
  },

  titleView: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  btnStyle: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  btnTextStyle: {
    color: Colors.lightMode.lightGray3,
    fontWeight: '500',
  },
});

export default RowButton;
