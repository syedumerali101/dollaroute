import React from 'react';
import {
  StyleSheet,
  View,
  ImageBackground,
  TouchableOpacity,
  Image,
} from 'react-native';
import Images from '../../theme/Images';
import {Colors, Metrics} from '../../theme';
import Text from '../Text';

const ImageHeader = ({title}) => {
  return (
    <ImageBackground
      style={styles.mainHeaderStyle}
      source={Images.common.imageBackground}>
      <View style={styles.mainHeaderRow}>
        <View style={styles.leftViewContainer}>
          <Text size="large" style={styles.leftText}>
            {title}
          </Text>
        </View>

        <View style={styles.rightViewContainer}>
          <TouchableOpacity activeOpacity={1} style={styles.scanBtnStyle}>
            <Image source={Images.common.scan} style={styles.scanIconStyle} />
          </TouchableOpacity>

          <TouchableOpacity activeOpacity={1} style={styles.notificationsBtn}>
            <Image
              source={Images.common.notification}
              style={styles.notificationIcon}
            />

            <View style={styles.notificationCountView}>
              <Text style={styles.countText}>1</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  mainHeaderStyle: {
    resizeMode: 'contain',
    height: Metrics.screenHeight * 0.18,
    width: Metrics.screenWidth,
  },

  mainHeaderRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: Metrics.screenWidth * 0.9,
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: Metrics.ratio(50),
  },

  leftViewContainer: {
    alignItems: 'center',
  },

  leftText: {
    color: Colors.white,
    // fontSize: Metrics.ratio(13),
    fontWeight: '600',
  },

  rightViewContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    width: Metrics.screenWidth * 0.15,
    justifyContent: 'space-around',
  },

  scanBtnStyle: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  scanIconStyle: {
    resizeMode: 'contain',
    height: Metrics.ratio(18),
    width: Metrics.ratio(18),
  },

  notificationsBtn: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  notificationIcon: {
    resizeMode: 'contain',
    height: Metrics.ratio(18),
    width: Metrics.ratio(18),
  },

  notificationCountView: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.lightMode.pink,
    borderWidth: 1,
    borderRadius: Metrics.ratio(20),
    borderColor: Colors.lightMode.white,
    height: Metrics.ratio(12),
    width: Metrics.ratio(12),
    position: 'absolute',
    bottom: 0,
    top: -10,
    left: 10,
  },

  countText: {
    color: Colors.lightMode.white,
    fontSize: Metrics.ratio(8),
    fontWeight: '600',
  },
});

export default ImageHeader;
