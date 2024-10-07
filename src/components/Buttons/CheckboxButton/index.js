import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import {Colors, Metrics} from '../../../theme';

const CheckboxButton = ({onPress, text, mainText, checked, onSubBtnPress}) => {
  return (
    <View style={styles.mainContainer}>
      <TouchableOpacity
        onPress={onPress}
        activeOpacity={1}
        style={[
          styles.squareView,
          {
            backgroundColor: checked
              ? Colors.lightMode.pink
              : Colors.lightMode.white,
          },
        ]}
      />

      <TouchableOpacity onPress={onSubBtnPress} style={styles.mainDescriptionBtn} activeOpacity={1}>
        <Text style={styles.textStyle}>
          {text}
          <Text style={styles.mainTextStyle}> {mainText}</Text>
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: Metrics.screenWidth * 0.9,
    marginTop: Metrics.ratio(15),
  },

  squareView: {
    borderWidth: 1.5,
    width: Metrics.ratio(10),
    height: Metrics.ratio(10),
    padding: Metrics.ratio(7),
    borderRadius: Metrics.ratio(4),
    borderColor: Colors.lightMode.pink,
  },

  textStyle: {
    marginLeft: Metrics.ratio(8),
    width: Metrics.screenWidth * 0.7,
    fontSize: Metrics.ratio(10),
    color: Colors.lightMode.black1
  },

  mainTextStyle: {
    color: Colors.lightMode.pink,
    fontSize: Metrics.ratio(10),
  },

  mainDescriptionBtn: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default CheckboxButton;
