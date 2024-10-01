import React, {useRef, useState} from 'react';
import {Text, View, ScrollView} from 'react-native';
import AuthTextInput from '../../components/Inputs/AuthTextInput';
import Header from '../../components/Header';
import styles from './styles';
import en from '../../translations/en.json';

const Login = () => {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const scrollViewRef = useRef();

  const handleEmail = email => {
    console.log(email, 'email');
  };

  const handlePassword = password => {
    console.log(password, 'email');
  };

  const renderInputFields = () => {
    return (
      <View style={styles.inputFieldContainer}>
        <AuthTextInput
          value={email}
          onChangeText={text => handleEmail(text)}
          placeHolder="Enter Your Email Address"
          keyboardType="email-address"
        />

        <AuthTextInput
          value={password}
          onChangeText={text => handlePassword(text)}
          type="password"
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
      {renderInputFields()}
    </ScrollView>
  );
};

export default Login;
