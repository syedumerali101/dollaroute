import React, {useRef, useState} from 'react';
import {ScrollView, Text, View} from 'react-native';
import styles from './styles';
import Header from '../../components/Header';
import en from '../../translations/en.json';
import AuthTextInput from '../../components/Inputs/AuthTextInput';
import SubmitButton from '../../components/Buttons/SubmitButton';

const ForgotPassword = () => {
  const scrollViewRef = useRef(null);
  const emailRef = useRef(null);
  const [email, setEmail] = useState(null);

  const handleEmail = receivedEmail => {
    console.log(receivedEmail, 'receivedEmail');
    setEmail(receivedEmail);
  };

  const onSubmit = () => {
    console.log(email, 'email sent');
  };

  const renderInputFields = () => {
    return (
      <View style={styles.mainInputContainer}>
        <Text style={styles.headingTextStyle}>{en.forgotPassword.heading}</Text>

        <AuthTextInput
          value={email}
          onChangeText={text => handleEmail(text)}
          placeHolder={en.forgotPassword.email}
          keyboardType="email-address"
          reference={emailRef}
          onSubmitEditing={onSubmit}
          containerStyle={styles.containerStyle}
        />

        <SubmitButton
          title={en.forgotPassword.submitBtnText}
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
      <Header title={en.navTitles.forgotPassword} />
      <View style={styles.mainRender}>{renderInputFields()}</View>
    </ScrollView>
  );
};

export default ForgotPassword;
