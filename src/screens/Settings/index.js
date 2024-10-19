import React, {useRef, useState} from 'react';
import {ScrollView, View, Image, TouchableOpacity} from 'react-native';
import en from '../../translations/en.json';
import Header from '../../components/Header';
import styles from './styles';
import SwitchButton from '../../components/Buttons/SwitchButton';
import Text from '../../components/Text';

const Settings = ({navigation}) => {
  const scrollViewRef = useRef(null);
  const [settingsData, setSettingsData] = useState([
    {
      id: 1,
      title: 'Two-Factor Authentication',
      show: true,
    },

    {
      id: 2,
      title: 'Push Notifications',
      show: false,
    },

    {
      id: 3,
      title: 'Email Notifications',
      show: false,
    },
  ]);

  const hanldeSwitch = (show, index) => {
    const tempSettingsData = [...settingsData];
    tempSettingsData[index].show = show;
    setSettingsData(tempSettingsData)
  }

  const mainRender = () => {
    return (
      <ScrollView
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
        ref={scrollViewRef}
        contentContainerStyle={styles.contentContainerStyle}
        style={styles.mainRenderContainer}>
        <TouchableOpacity activeOpacity={1} style={styles.btnStyle}>
          <Text size="fourteen" style={styles.btnTextStyle}>
            Change Password
          </Text>
        </TouchableOpacity>
        {settingsData?.map((item, index) => {
          return <SwitchButton 
          title={item?.title} 
          show={item?.show} 
          onPress={(show) => hanldeSwitch(show, index)}
          />;
        })}
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
