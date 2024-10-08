import React, {memo} from 'react';
import {TouchableOpacity, View, StyleSheet} from 'react-native';
import Text from '../../Text';
import {Colors, Metrics} from '../../../theme';

const RowButton = ({title, buttonTitle, onPress, style, deals}) => {
  return (
    <View style={[styles.rowContainer, style]}>
      <View style={styles.titleView}>
        <Text size="large" style={styles.titleStyle}>
          {title}
        </Text>
        {deals && (
          <View style={styles.dealsView}>
            <Text size="fourteen" style={styles.dealsStyle}>
              {deals}
            </Text>
          </View>
        )}
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
    marginBottom: Metrics.ratio(10),
  },

  titleStyle: {
    color: Colors.lightMode.black5,
    fontWeight: '600',
  },

  titleView: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },

  btnStyle: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  btnTextStyle: {
    color: Colors.lightMode.lightGray3,
    fontWeight: '500',
  },

  dealsStyle: {
    color: Colors.lightMode.pink,
    fontWeight: '500',
  },

  dealsView: {
    backgroundColor: Colors.lightMode.grey12,
    padding: Metrics.ratio(2),
    paddingHorizontal: Metrics.ratio(10),
    borderRadius: Metrics.ratio(40),
    marginLeft: Metrics.ratio(5),
    justifyContent: 'center',
    alignItems: 'center'
  },
});

export default RowButton;
