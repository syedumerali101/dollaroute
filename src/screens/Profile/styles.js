import {StyleSheet} from 'react-native';
import {Metrics, Colors} from '../../theme';

export default StyleSheet.create({
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
    flexDirection: 'row',
  },
  profileImageContainer: {
    height: Metrics.ratio(64),
    width: Metrics.ratio(64),
    borderRadius: Metrics.ratio(64 / 2),
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  profileImage: {
    height: '100%',
    width: '100%',
    resizeMode: 'cover',
  },
  userInfo: {
    marginLeft: Metrics.ratio(10),
  },
  leftText: {
    color: Colors.white,
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
  mainContainer: {
    flex: 1,
    backgroundColor: Colors.lightMode.white,
  },
  profileHeaderContainer: {
    backgroundColor: Colors.lightMode.pink2,
    padding: Metrics.ratio(50),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  profileInfoView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileImageStyle: {
    width: Metrics.ratio(50),
    height: Metrics.ratio(20),
    borderRadius: Metrics.ratio(20) / 2,
  },
  userInfoView: {
    marginLeft: Metrics.ratio(10),
  },
  userNameStyle: {
    fontSize: Metrics.ratio(2),
    color: Colors.lightMode.white,
  },
  userPhoneStyle: {
    fontSize: Metrics.ratio(1),
    color: Colors.lightMode.white,
  },
  notificationIcon: {
    padding: Metrics.ratio(2),
  },
  cashbackContainer: {
    backgroundColor: Colors.lightMode.lightPink3,
    padding: Metrics.ratio(15),
    alignItems: 'center',
    borderTopLeftRadius: Metrics.ratio(16),
    borderTopRightRadius: Metrics.ratio(16),
    marginTop: -Metrics.ratio(10),
  },
  cashbackInnerContainer: {
    height: Metrics.ratio(65),
    width: Metrics.ratio(370),
    backgroundColor: Colors.white,
    borderRadius: Metrics.ratio(6),
    flexDirection: 'row',
    alignItems: 'center',
    padding: Metrics.ratio(12),
    justifyContent: 'space-between',
  },
  cashbackLabel: {
    fontSize: Metrics.ratio(10),
    color: Colors.lightMode.text,
  },
  cashbackAmount: {
    fontSize: Metrics.ratio(10),
    color: Colors.lightMode.pink2,
    marginTop: Metrics.ratio(50),
  },
  optionsSection: {
    marginTop: -Metrics.ratio(5),
    borderTopLeftRadius: Metrics.ratio(16),
    borderTopRightRadius: Metrics.ratio(16),
    backgroundColor: Colors.white,
    width: '100%',
    alignItems: 'center',
  },
  optionItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: Metrics.ratio(10),
    borderBottomWidth: 1,
    borderBottomColor: Colors.white,
    height: Metrics.ratio(50),
    width: Metrics.ratio(350),
    marginTop: Metrics.ratio(8),
    borderRadius: Metrics.ratio(0.2),
    elevation: 1,
    alignItems: 'center',
  },
  optionText: {
    color: Colors.TextSecondary,
    fontWeight: '800',
  },
  arrowIcon: {
    width: Metrics.ratio(8),
    height: Metrics.ratio(8),
  },
  logoutButton: {
    padding: Metrics.ratio(10),
    backgroundColor: Colors.white,
    width: Metrics.ratio(350),
    height: Metrics.ratio(50),
    justifyContent: 'center',
    marginTop: Metrics.ratio(10),
  },
  logoutText: {
    color: Colors.lightModeTextInput.errorColor,
  },
  pendingIcon: {
    height: Metrics.ratio(40),
    width: Metrics.ratio(40),
    marginRight: Metrics.ratio(5),
    resizeMode: 'contain',
  },

  pendingView: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  cashbackText: {
    color: Colors.lightText,
    fontWeight: '600',
  },

  cashbackAmount: {
    color: Colors.TextSecondary,
    fontWeight: '900',
  },
  cashTxtContainer: {
    marginLeft: Metrics.ratio(6),
  },
  arrowIcon: {
    height: Metrics.ratio(20),
    width: Metrics.ratio(20),
    resizeMode: 'contain',
  },
  optionHeading: {
    fontSize: Metrics.ratio(14),
    color: Colors.lightText,
    fontWeight: '700',
    marginTop: Metrics.ratio(35),
    width: Metrics.ratio(370),
    marginBottom: Metrics.ratio(10),
  },
});
