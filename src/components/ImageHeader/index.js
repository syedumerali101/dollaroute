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

const ImageHeader = ({
  title,
  totalCashback = '$50',
  pendingCashback = '$50',
}) => {
  return (
    <ImageBackground
      style={styles.mainHeaderStyle}
      source={Images.common.imageBackground}>
      <View style={styles.mainHeaderRow}>
        <View style={styles.leftViewContainer}>
          <Text size="large" style={styles.leftText}>
            {title}
          </Text>

          {/* Add Cashback and Pending Section */}
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
      <View style={styles.cashbackContainer}>
        <View style={styles.cashbackSection}>
          <Image source={Images.common.coin} style={styles.cashbackIcon} />
          <Text style={styles.cashbackText}>Total Cashback</Text>
          <Text style={styles.cashbackAmount}>{totalCashback}</Text>
        </View>

        <View style={styles.separator} />

        <View style={styles.cashbackSection}>
          <Image source={Images.common.pending} style={styles.pendingIcon} />
          <Text style={styles.cashbackText}>Pending</Text>
          <Text style={styles.cashbackAmount}>{pendingCashback}</Text>
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
    fontWeight: '600',
  },

  cashbackContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: Metrics.ratio(10),
    width: Metrics.screenWidth * 1,
    alignSelf: 'center',
    bottom: 0,
    height: Metrics.ratio(58),
    backgroundColor: 'rgba(255,222,226,0.12)',
    alignItems: 'center',
    borderTopRightRadius: Metrics.ratio(16),
    borderTopLeftRadius: Metrics.ratio(16),
  },

  cashbackSection: {
    alignItems: 'center',
    flexDirection: 'row',
    width:'40%',
  },

  cashbackIcon: {
    height: Metrics.ratio(20),
    width: Metrics.ratio(20),
    marginRight: Metrics.ratio(5),
    resizeMode: 'contain',
  },

  cashbackText: {
    color: Colors.white,
    fontWeight: '500',
    marginRight: Metrics.ratio(5),
  },

  cashbackAmount: {
    color: Colors.white,
    fontWeight: '600',
  },

  separator: {
    width: 1,
    height: Metrics.ratio(30),
    backgroundColor: Colors.white,
    marginHorizontal: Metrics.ratio(10),
  },

  pendingIcon: {
    height: Metrics.ratio(15),
    width: Metrics.ratio(15),
    marginRight: Metrics.ratio(5),
    resizeMode: 'contain',
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
