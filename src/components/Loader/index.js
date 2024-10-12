// @flow

import React from 'react';
import {
  View,
  StatusBar,
  //   ActivityIndicator,
  StyleSheet,
  Modal,
  Alert,
} from 'react-native';
import {Colors, Metrics} from '../../theme';
import Text from '../Text';
import {MaterialIndicator} from 'react-native-indicators';

const Loader = props => {
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
          <View style={styles.loaderSpinngerView}>
            <MaterialIndicator color={Colors.lightMode.pink} />
          </View>

          <Text size="sixteen" style={styles.redeemingPointsText}>
            Redeeming Points...
          </Text>
        </View>
      </View>
    </Modal>
  );
};

export default Loader;

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
    height: Metrics.screenHeight * 0.18,
    borderRadius: Metrics.ratio(10),
    justifyContent: 'center',
  },

  redeemingPointsText: {
    color: Colors.lightMode.black5,
    fontWeight: '600',
    marginTop: Metrics.ratio(20),
  },

  loaderSpinngerView: {
    backgroundColor: Colors.lightMode.white,
    width: Metrics.ratio(35),
    height: Metrics.ratio(35),
    borderWidth: Metrics.ratio(5),
    borderRadius: Metrics.ratio(20),
    borderColor: Colors.lightMode.lightPink4,
  },
});
