import React, {memo} from 'react';
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
  profile,
  phone,
  earned,
}) => {
  if (profile) {
    return (
      <ImageBackground
        style={styles.mainHeaderStyle}
        source={Images.common.imageBackground}>
        <View style={styles.mainHeaderRow}>
          <View style={styles.avatarView}>
            <Image style={styles.avatarStyle} source={Images.dummy.avatar} />
          </View>

          <View style={styles.centerViewStyle}>
            <Text size="large" style={styles.leftText}>
              {title}
            </Text>
            <Text size="fourteen" style={styles.leftSubTextStyle}>
              {phone}
            </Text>
          </View>

          <TouchableOpacity activeOpacity={1} style={styles.rightBtnContainer}>
            <Image
              style={styles.rightBtnIconStyle}
              source={Images.common.scan}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.mainOuterContainer}>
          <View style={styles.mainInnerContainer}>
            <View style={styles.innerLeftView}>
              <Image style={styles.innerLeftIcon} source={Images.common.coin} />
            </View>

            <View style={styles.centerView}>
              <Text size='twelve' style={styles.innerHeading}>Total Cashback Earned</Text>
              <Text size='sixteen' style={styles.innerSubHeading}>{earned}</Text>
            </View>

            <TouchableOpacity activeOpacity={1} style={styles.innerRightView}>
              <Image source={Images.common.rightArrow} style={styles.innerRightIcon}/>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    );
  } else {
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
        <View style={styles.cashbackContainer}>
          <View style={styles.cashbackSection}>
            <Image source={Images.common.coin} style={styles.cashbackIcon} />
            <View>
              <Text size="xxxSmall" style={styles.cashbackText}>
                Total Cashback
              </Text>
              <Text size="fourteen" style={styles.cashbackAmount}>
                {totalCashback}
              </Text>
            </View>
          </View>

          <View style={styles.separator} />

          <View style={styles.pendingView}>
            <Image source={Images.common.pending} style={styles.pendingIcon} />
            <View>
              <Text size="xxxSmall" style={styles.cashbackText}>
                Pending
              </Text>
              <Text size="fourteen" style={styles.cashbackAmount}>
                {pendingCashback}
              </Text>
            </View>
          </View>
        </View>
      </ImageBackground>
    );
  }
};

const styles = StyleSheet.create({
  mainHeaderStyle: {
    resizeMode: 'contain',
    height: Metrics.screenHeight * 0.25,
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
    marginTop: Metrics.ratio(20),
    width: Metrics.screenWidth * 1,
    alignSelf: 'center',
    bottom: 0,
    height: Metrics.screenHeight * 0.2,
    backgroundColor: 'rgba(255,222,226,0.12)',
    borderTopRightRadius: Metrics.ratio(16),
    borderTopLeftRadius: Metrics.ratio(16),
    justifyContent: 'center',
  },

  cashbackSection: {
    alignItems: 'center',
    flexDirection: 'row',
    width: Metrics.screenWidth * 0.4,
    marginBottom: Metrics.screenHeight * 0.11,
  },

  pendingView: {
    alignItems: 'center',
    flexDirection: 'row',
    width: Metrics.screenWidth * 0.4,
    justifyContent: 'center',
    marginBottom: Metrics.screenHeight * 0.11,
  },

  cashbackIcon: {
    height: Metrics.ratio(28),
    width: Metrics.ratio(28),
    marginRight: Metrics.ratio(2),
    resizeMode: 'contain',
  },

  cashbackText: {
    color: Colors.lightMode.lightPink3,
    fontWeight: '600',
  },

  cashbackAmount: {
    color: Colors.white,
    fontWeight: '600',
  },

  separator: {
    width: Metrics.ratio(1),
    height: Metrics.ratio(30),
    backgroundColor: 'rgba(255,222,226,0.12)',
    marginTop: Metrics.ratio(18),
  },

  pendingIcon: {
    height: Metrics.ratio(20),
    width: Metrics.ratio(20),
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

  leftSubTextStyle: {
    color: Colors.lightMode.white,
    fontWeight: '400',
    marginTop: Metrics.ratio(4),
  },

  rightBtnContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  rightBtnIconStyle: {
    resizeMode: 'contain',
    height: Metrics.ratio(20),
    width: Metrics.ratio(20),
  },

  centerViewStyle: {
    width: Metrics.screenWidth * 0.6,
    justifyContent: 'center',
  },

  avatarView: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  avatarStyle: {
    resizeMode: 'contain',
    height: Metrics.ratio(50),
    width: Metrics.ratio(50),
  },

  mainOuterContainer: {
    backgroundColor: Colors.lightMode.lightPink3,
    width: Metrics.screenWidth,
    height: Metrics.screenHeight * 0.12,
    borderTopLeftRadius: Metrics.ratio(10),
    borderTopRightRadius: Metrics.ratio(10),
    marginTop: Metrics.ratio(12),
    alignItems: 'center',
  },

  mainInnerContainer: {
    width: Metrics.screenWidth * 0.9,
    height: Metrics.screenHeight * 0.07,
    backgroundColor: Colors.lightMode.white,
    borderRadius: Metrics.ratio(10),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: Metrics.ratio(10)
  },

  innerLeftView:{
    justifyContent: 'center',
    alignItems: 'center',
  },

  innerLeftIcon:{
    resizeMode: 'contain',
    height: Metrics.ratio(30),
    width: Metrics.ratio(30),
    marginLeft: Metrics.ratio(10)
  },

  innerRightView:{
    justifyContent: 'center',
    alignItems: 'center',
    width: Metrics.screenWidth * 0.15,
  },

  innerRightIcon:{
    resizeMode: 'contain',
    height: Metrics.ratio(20),
    width: Metrics.ratio(20)
  },

  innerHeading:{
    color: Colors.lightMode.lightGray6,
    fontWeight: '400'
  },

  innerSubHeading:{
    color: Colors.lightMode.black1,
    fontWeight: '600'
  },

  centerView:{
    width: Metrics.screenWidth * 0.6,
  }
});

export default ImageHeader;
