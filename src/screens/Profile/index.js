import React, {useRef} from 'react';
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
import Images from '../../theme/Images';
import {Colors, Metrics} from '../../theme';
import {navigate} from '../../utils/navigation';
import ImageHeader from '../../components/ImageHeader';
import {GeneralList, SupportList} from '../../configs/Constants';
import RightImageButton from '../../components/Buttons/RightImageButton';

const ProfileScreen = ({navigation}) => {
  const scrollViewRef = useRef(null);

  const renderOptionsList = (heading, list) => {
    const handleOnPress = route => {
      if (route) {
        navigation?.navigate(route);
      }
    };
    return (
      <View style={styles.innerPointRow}>
        <Text size="fourteen" style={styles.optionHeading}>
          {heading}
        </Text>
        <View>
          {list?.map((item, index) => (
            <RightImageButton
              index={index}
              item={item}
              onPress={route => handleOnPress(route)}
            />
          ))}
        </View>
      </View>
    );
  };

  const renderLogoutButton = () => {
    return (
      <TouchableOpacity
      activeOpacity={1}
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
      <ScrollView
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
        ref={scrollViewRef}
        contentContainerStyle={styles.contentContainerStyle}
        style={styles.mainRenderContainer}>
        <View style={styles.optionsSection}>
          {renderOptionsList('GENERAL', GeneralList())}
          {renderOptionsList('SUPPORT', SupportList())}
        </View>
        {renderLogoutButton()}
      </ScrollView>
    );
  };

  return (
    <View style={{flex: 1, backgroundColor: Colors.white}}>
      <StatusBar
        backgroundColor={Colors.lightMode.pink}
        barStyle={'light-content'}
        translucent={true}
      />
      <View style={styles.mainContainer}>
        <ImageHeader
          profile={true}
          title={en.homeScreen.name}
          phone="+90 310 4739 471"
          earned="$ 1,200"
        />
        {mainRender()}
      </View>
    </View>
  );
};

export default ProfileScreen;
