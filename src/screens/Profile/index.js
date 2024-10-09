import React from 'react';
import {
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  StatusBar,
  ImageBackground,
} from 'react-native';
import styles from './styles';
import en from '../../translations/en.json';
import Text from '../../components/Text';
import RowButton from '../../components/Buttons/RowButton';
import Images from '../../theme/Images';
import {Colors, Metrics} from '../../theme';
import {navigate} from '../../utils/navigation';

const ProfileScreen = () => {
  const userInfo = {
    name: 'Kashif Asif',
    phone: '+90 310 4739 471',
    totalCashback: '$1,200',
  };
  const GeneralList = [
    {title: 'Account Information', route: 'AccountInfo'},
    {title: 'Cashback Withdrawal', route: 'CashbackWithdraw'},
    {title: 'Referral', route: 'Referral'},
    {title: 'Settings', route: 'Settings'},
  ];
  const SupportList = [
    {title: 'Terms and Privacy Policy', route: 'PrivacyPolicy'},
    {title: 'FAQ', route: 'FAQ'},
    {title: 'Help', route: 'Help'},
  ];

  const renderProfileHeader = () => {
    return (
      <ImageBackground
        style={styles.mainHeaderStyle}
        source={Images.common.imageBackground}>
        <View style={styles.mainHeaderRow}>
          <View style={styles.leftViewContainer}>
            <View style={styles.profileImageContainer}>
              <Image source={Images.dummy.avatar} style={styles.profileImage} />
            </View>
            <View style={styles.userInfo}>
              <Text size="small" style={styles.leftText}>
                {en.homeScreen.name}
              </Text>
              <Text size="small" style={styles.leftText}>
                +90 310 4739 471
              </Text>
            </View>
          </View>

          <View style={styles.rightViewContainer}>
            <TouchableOpacity activeOpacity={1} style={styles.scanBtnStyle}>
              <Image source={Images.common.scan} style={styles.scanIconStyle} />
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    );
  };

  const renderTotalCashback = () => {
    return (
      <View style={styles.cashbackContainer}>
        <View style={styles.cashbackInnerContainer}>
          <View style={styles.pendingView}>
            <Image source={Images.common.coin} style={styles.pendingIcon} />
            <View style={styles.cashTxtContainer}>
              <Text size="small" style={styles.cashbackText}>
                Total Cashback Earned
              </Text>
              <Text size="fourteen" style={styles.cashbackAmount}>
                $ 1,200
              </Text>
            </View>
          </View>
          <TouchableOpacity>
            <Image source={Images.common.rightArrow} style={styles.arrowIcon} />
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  const renderOptionsList = (heading, list) => {
    return (
      <>
        <Text style={styles.optionHeading}>{heading}</Text>
        <View>
          {list?.map((item, index) => (
            <TouchableOpacity key={index} style={styles.optionItem}>
              <Text style={styles.optionText} size="fourteen">
                {item.title}
              </Text>
              <Image
                source={Images.common.rightArrow}
                style={styles.arrowIcon}
              />
            </TouchableOpacity>
          ))}
        </View>
      </>
    );
  };

  const renderLogoutButton = () => {
    return (
      <TouchableOpacity
        style={styles.logoutButton}
        onPress={() => navigate('AuthStack')}>
        <Text style={styles.logoutText} size="fourteen">
          Logout
        </Text>
      </TouchableOpacity>
    );
  };

  const mainRender = () => {
    return (
      <View
        style={{
          alignItems: 'center',
          paddingVertical: Metrics.ratio(10),
        }}>
        {renderProfileHeader()}
        {renderTotalCashback()}
        <View style={styles.optionsSection}>
          {renderOptionsList('GENERAL', GeneralList)}
          {renderOptionsList('SUPPORT', SupportList)}
        </View>
        {renderLogoutButton()}
      </View>
    );
  };

  return (
    <ScrollView
      style={{flex: 1, backgroundColor: Colors.white}}
      contentContainerStyle={{paddingBottom: Metrics.ratio(10)}}>
      <StatusBar
        backgroundColor={Colors.lightMode.pink}
        barStyle={'light-content'}
        translucent={true}
      />
      <View style={styles.mainContainer}>
        {/* <ImageHeader title={en.homeScreen.hi + ' ' + en.homeScreen.name} /> */}
        {mainRender()}
      </View>
    </ScrollView>
  );
};

export default ProfileScreen;
