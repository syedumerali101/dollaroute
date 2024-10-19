import React, {useRef, useState} from 'react';
import {ScrollView, View, Image, TouchableOpacity} from 'react-native';
import en from '../../translations/en.json';
import Header from '../../components/Header';
import styles from './styles';
import Text from '../../components/Text';
import {helpData} from '../../configs/Constants';
import IconButton from '../../components/Buttons/IconButton';

const NeedHelp = ({navigation}) => {
  const scrollViewRef = useRef(null);
  const mainRender = () => {
    return (
      <ScrollView
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
        ref={scrollViewRef}
        contentContainerStyle={styles.contentContainerStyle}
        style={styles.mainRenderContainer}>
        <View style={styles.mainInnerContainer}>
          <Text size='fourteen' style={styles.descriptionTextStyle}>
            If you have any questions or need assistance with your account, feel
            free to reach out to our support team. We're here to help!
          </Text>

          {helpData()?.map((item, index) => {
            return (
              <IconButton
                title={item?.title}
                icon={item?.icon}
                mainBtnContainer={styles.submitButtonStyle}
                textStyle={styles.submitBtnTextStyle}
              />
            );
          })}
        </View>
      </ScrollView>
    );
  };

  return (
    <View style={styles.mainContainer}>
      <Header title={en.navTitles.needHelp} />
      {mainRender()}
    </View>
  );
};

export default NeedHelp;
