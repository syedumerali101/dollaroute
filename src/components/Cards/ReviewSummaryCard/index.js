import React, {memo} from 'react';
import {View, StyleSheet} from 'react-native';
import Text from '../../Text';
import {Colors, Metrics} from '../../../theme';

const ReviewSummaryCard = () => {
  return (
    <View style={styles.mainRowContainer}>
      <View style={styles.firstRowContainer}>
        <Text size="sixteen" style={styles.textHeading}>
          Withdraw Amount
        </Text>

        <Text size="sixteen" style={styles.textHeadingValue}>
          $200
        </Text>
      </View>

      <View style={styles.secondRowContainer}>
        <Text size="sixteen" style={styles.textHeading}>
          Fee
        </Text>
        <Text size="sixteen" style={styles.textHeadingValue}>
          0
        </Text>
      </View>

      <View style={styles.separator} />
      <View style={styles.thirdRowContainer}>
        <Text size="sixteen" style={styles.textHeading}>
          Total Amount
        </Text>

        <Text size="sixteen" style={styles.textHeadingHighlightedValue}>
          $200
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainRowContainer: {
    backgroundColor: Colors.white,
    padding: Metrics.ratio(20),
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.18,
    shadowRadius: 6.0,
    elevation: 4,
    borderRadius: Metrics.ratio(10),
    width: Metrics.screenWidth * 0.9,
    height: Metrics.screenHeight * 0.2,
    marginBottom: Metrics.ratio(10),
  },

  firstRowContainer: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },

  secondRowContainer: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginTop: Metrics.ratio(10)
  },

  thirdRowContainer: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginTop: Metrics.ratio(15)
  },

  textHeadingValue: {
    color: Colors.lightMode.black6,
    fontWeight: '400',
  },

  textHeading: {
    color: Colors.lightMode.grey9,
    fontWeight: '400',
  },

  textHeadingHighlightedValue: {
    color: Colors.lightMode.pink,
    fontWeight: '400',
  },

  separator: {
    borderWidth: 0.5,
    marginLeft: Metrics.ratio(3.5),
    borderColor: Colors.lightMode.separatorColor,
    marginTop: Metrics.ratio(18)
  },
});

export default ReviewSummaryCard;
