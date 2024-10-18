import React, {useRef, useState} from 'react';
import {ScrollView, View, Image} from 'react-native';
import en from '../../translations/en.json';
import Header from '../../components/Header';
import styles from './styles';
import Text from '../../components/Text';
import Images from '../../theme/Images';
import IconButton from '../../components/Buttons/IconButton';
import {inviteFriendsPoints} from '../../configs/Constants';
import ConfirmationPopup from '../../components/Popups/ConfirmationPopup';
import {navigateAndSimpleReset} from '../../utils/navigation';

const InviteFriends = ({navigation}) => {
  const [earnedModal, setEarnedModal] = useState(false);
  const scrollViewRef = useRef(null);

  const handleNavigateBack = () => {
    setEarnedModal(false);
    navigateAndSimpleReset('ProfileScreen', 0);
  };

  const onSubmit = () => {
    setEarnedModal(true)
  }
  const mainRender = () => {
    return (
      <ScrollView
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
        ref={scrollViewRef}
        contentContainerStyle={styles.contentContainerStyle}
        style={styles.mainRenderContainer}>
        <Image
          style={styles.inviteFriendStyle}
          source={Images.dummy.inviteFriends}
        />
        <View style={styles.inviteFriendsAmountView}>
          <Text size="large" style={styles.inviteFriendText}>
            Invite Friends
          </Text>
          <Text size="xLarge" style={styles.amountText}>
            Get $50{' '}
          </Text>
        </View>

        {inviteFriendsPoints()?.map((item, index) => {
          return (
            <View style={styles.mainRowContainer}>
              <View style={styles.imageView}>
                <Image style={styles.imageStyle} source={item?.icon} />
              </View>

              <View style={styles.textsView}>
                <Text size="sixteen" style={styles.titleStyle}>
                  {item?.title}
                </Text>
                <Text size="sixteen" style={styles.descriptionStyle}>
                  {item?.description}
                </Text>
              </View>
            </View>
          );
        })}
      </ScrollView>
    );
  };

  return (
    <View style={styles.mainContainer}>
      <Header title={en.navTitles.inviteFriends} />
      {mainRender()}

      <IconButton
        title={en.inviteFriends.submitBtn}
        icon={Images.common.invite}
        mainBtnContainer={styles.submitButtonStyle}
        textStyle={styles.submitBtnTextStyle}
        onPress={onSubmit}
      />

      <ConfirmationPopup
        loading={earnedModal}
        title="You Earned $50!"
        description="Some has joined using your referral code. Keep those referrals coming and watch your reward!"
        hideYesBtn={true}
        icon={Images.common.earning}
        mainWhiteContainer={styles.mainWhiteContainer}
        secondBtnStyle={styles.secondBtnStyle}
        onNo={handleNavigateBack}
      />
    </View>
  );
};

export default InviteFriends;
