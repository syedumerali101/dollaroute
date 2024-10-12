// @flow

import React from 'react';
import {View, StyleSheet, Modal, Image} from 'react-native';
import {Colors, Metrics} from '../../../theme';
import Text from '../../Text';
import {MaterialIndicator} from 'react-native-indicators';
import Images from '../../../theme/Images';
import SubmitButton from '../../Buttons/SubmitButton';

const ConfirmationPopup = props => {
  const {loading, width, height} = props;
  return (
    <Modal
      style={{margin: 0}}
      transparent={true}
      backdropOpacity={0.9}
      animationIn="fadeIn"
      visible={loading}>
      <View
        style={[
          styles.container,
          {
            width,
            height,
          },
        ]}>
        <View style={styles.loaderView}>
          <Image
            style={styles.redeemIconStyle}
            source={Images.common.redeemIcon}
          />

          <Text size="eighteen" style={styles.titleText}>
            Yaay! Your Voucher is Ready!
          </Text>
          <Text size="fourteen" style={styles.descStyle}>
            Time to treat yourself! Flash E- Voucher at the and redeem your
            reward.
          </Text>

          <SubmitButton
            title={'View E-Voucher'}
            style={styles.firstBtnStyle}
            textStyle={styles.firstBtnTextStyle}
          />

          <SubmitButton
            title={'Go to Home'}
            style={styles.secondBtnStyle}
            textStyle={styles.textStyle}
          />
        </View>
      </View>
    </Modal>
  );
};

export default ConfirmationPopup;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    width: Metrics.screenWidth,
    height: Metrics.screenHeight,
    flex: 1,
    backgroundColor: Colors.modalBackground,
  },
  imageLoader: {
    height: Metrics.ratio(100),
    width: Metrics.ratio(100),
  },

  loaderView: {
    alignItems: 'center',
    backgroundColor: Colors.lightMode.white,
    width: Metrics.screenWidth * 0.8,
    padding: Metrics.ratio(10),
    height: Metrics.screenHeight * 0.5,
    borderRadius: Metrics.ratio(10),
  },

  redeemIconStyle: {
    resizeMode: 'contain',
    height: Metrics.ratio(90),
    width: Metrics.ratio(90),
    marginTop: Metrics.ratio(5)
  },

  firstBtnStyle: {
    width: Metrics.screenWidth * 0.6,
    height: Metrics.screenHeight * 0.05,
    marginTop: Metrics.ratio(30)
  },

  secondBtnStyle: {
    width: Metrics.screenWidth * 0.6,
    height: Metrics.screenHeight * 0.05,
    backgroundColor: Colors.lightMode.lightPink2,
    marginTop: Metrics.ratio(15)

  },

  textStyle: {
    color: Colors.lightMode.pink,
    fontSize: Metrics.ratio(12),
  },

  firstBtnTextStyle: {
    fontSize: Metrics.ratio(12),
  },

  titleText: {
    textAlign: 'center',
    color: Colors.lightMode.black5,
    fontWeight: '600',
    marginTop: Metrics.ratio(10)
  },

  descStyle: {
    textAlign: 'center',
    color: Colors.lightMode.black6,
    fontWeight: '400',
    width: Metrics.screenWidth * 0.6,
    marginTop: Metrics.ratio(20)

  },
});
