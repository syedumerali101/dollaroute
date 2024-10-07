import React, {useRef, useState} from 'react';
import {SafeAreaView, ScrollView, View} from 'react-native';
import styles from './styles';
import Header from '../../components/Header';
import en from '../../translations/en.json';
import AuthTextInput from '../../components/Inputs/AuthTextInput';
import SubmitButton from '../../components/Buttons/SubmitButton';
import SafeAreaWrapper from '../../components/Wrappers/SafeAreaWrapper';
import Text from '../../components/Text';

const ForgotPassword = ({navigation}) => {
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
        <Text size='large' style={styles.headingTextStyle}>{en.forgotPassword.heading}</Text>

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
          onPress={() => navigation.navigate('EmailSent')}
        />
      </View>
    );
  };
  return (
    <SafeAreaWrapper>
      <Header title={en.navTitles.forgotPassword} />
      <View style={styles.mainRender}>{renderInputFields()}</View>
    </SafeAreaWrapper>
  );
};

export default ForgotPassword;
