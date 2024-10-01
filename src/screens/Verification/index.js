import React, {useState, useRef} from 'react';
import {ScrollView, Text, View} from 'react-native';
import en from '../../translations/en.json';
import Header from '../../components/Header';
import styles from './styles';
import SubmitButton from '../../components/Buttons/SubmitButton';

const Verification = () => {
  const scrollViewRef = useRef(null);

  const renderInputFields = () => {
    return (
      <View style={styles.mainInputContainer}>
        <Text style={styles.headingTextStyle}>{en.verificationScreen.heading}</Text>

        <SubmitButton
          title={en.verificationScreen.submitBtnText}
          style={styles.submitButtonStyle}
        />
      </View>
    );
  };
  return (
    <ScrollView
      keyboardShouldPersistTaps="handled"
      showsVerticalScrollIndicator={false}
      ref={scrollViewRef}
      style={styles.mainScrollViewStyle}
      contentContainerStyle={styles.contentContainerStyle}>
      <Header title={en.navTitles.verification} />
      {renderInputFields()}
    </ScrollView>
  );
};

export default Verification;
