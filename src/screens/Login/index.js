import React, {useRef, useState} from 'react';
import {Text, View, ScrollView, SafeAreaView, StatusBar} from 'react-native';
import AuthTextInput from '../../components/Inputs/AuthTextInput';
import Header from '../../components/Header';
import styles from './styles';
import en from '../../translations/en.json';
import SubmitButton from '../../components/Buttons/SubmitButton';
import TextButton from '../../components/Buttons/TextButton';
import DescTextButton from '../../components/Buttons/DescTextButton';

const Login = ({navigation}) => {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const scrollViewRef = useRef();
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const handleEmail = receivedEmail => {
    console.log(receivedEmail, 'email');
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
      <View style={styles.inputFieldContainer}>
        <AuthTextInput
          value={email}
          onChangeText={text => handleEmail(text)}
          placeHolder={en.loginScreen.email}
          keyboardType="email-address"
          reference={emailRef}
          onSubmitEditing={() => passwordRef.current.focus()}
        />

        <AuthTextInput
          value={password}
          onChangeText={text => handlePassword(text)}
          placeHolder={en.loginScreen.password}
          type="password"
          reference={passwordRef}
          onSubmitEditing={onSubmit}
        />

        <SubmitButton
          title={en.loginScreen.submitBtnText}
          style={styles.submitButtonStyle}
          onPress={() => navigation.navigate('Verification')}
        />

        <TextButton
          text={en.loginScreen.textBtnText}
          onPress={() => navigation.navigate('ForgotPassword')}
        />

        <DescTextButton
          description={en.loginScreen.descriptionText}
          underlineText={en.loginScreen.underlineText}
          onPress={() => navigation.navigate('Signup')}
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
      <Header title={en.navTitles.login} />
      <View style={styles.mainRender}>{renderInputFields()}</View>
    </ScrollView>
  );
};

export default Login;
