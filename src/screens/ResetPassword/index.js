import React, {useRef, useState} from 'react';
import {ScrollView, Text, View} from 'react-native';
import styles from './styles';
import Header from '../../components/Header';
import en from '../../translations/en.json';
import AuthTextInput from '../../components/Inputs/AuthTextInput';
import SubmitButton from '../../components/Buttons/SubmitButton';

const ResetPassword = ({navigation}) => {
  const scrollViewRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  const handleEmail = receivedEmail => {
    console.log(receivedEmail, 'receivedEmail');
    setEmail(receivedEmail);
  };

  const handlePassword = receivedPassword => {
    console.log(receivedPassword, 'password');
    setPassword(receivedPassword);
  };

  const onSubmit = () => {
    console.log(email, password, 'email and password');
  };

  const renderInputFields = () => {
    return (
      <View style={styles.mainInputContainer}>
        <AuthTextInput
          value={email}
          onChangeText={text => handleEmail(text)}
          placeHolder={en.resetPassword.newPassword}
          keyboardType="email-address"
          reference={emailRef}
          onSubmitEditing={() => passwordRef.current.focus()}
          containerStyle={styles.containerStyle}
        />

        <AuthTextInput
          value={password}
          onChangeText={text => handlePassword(text)}
          placeHolder={en.resetPassword.reTypePassword}
          reference={passwordRef}
          onSubmitEditing={onSubmit}
        />

        <SubmitButton
          onPress={() => navigation?.navigate('Login')}
          title={en.resetPassword.submitBtnText}
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
      <Header title={en.navTitles.resetPassword} />
      <View style={styles.mainRender}>{renderInputFields()}</View>
    </ScrollView>
  );
};

export default ResetPassword;
