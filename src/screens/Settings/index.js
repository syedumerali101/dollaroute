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

const Settings = ({navigation}) => {
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
      </ScrollView>
    );
  };

  return (
    <View style={styles.mainContainer}>
      <Header title={en.navTitles.settings} />
      {mainRender()}

    </View>
  );
};

export default Settings;
