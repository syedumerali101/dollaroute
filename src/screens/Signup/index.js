import React, {useRef, useState} from 'react';
import {Text, View, ScrollView, Alert} from 'react-native';
import AuthTextInput from '../../components/Inputs/AuthTextInput';
import Header from '../../components/Header';
import styles from './styles';
import en from '../../translations/en.json';
import SubmitButton from '../../components/Buttons/SubmitButton';
import TextButton from '../../components/Buttons/TextButton';
import DescTextButton from '../../components/Buttons/DescTextButton';
import IconButton from '../../components/Buttons/IconButton';
import Images from '../../theme/Images';
import CheckboxButton from '../../components/Buttons/CheckboxButton';

const Signup = () => {
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [checked, setChecked] = useState(false);
  const scrollViewRef = useRef();
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const handleName = receivedName => {
    console.log(receivedName, 'name');
    setName(receivedName);
  };

  const handleEmail = receivedEmail => {
    console.log(receivedEmail, 'email');
    setEmail(receivedEmail);
  };

  const handlePassword = receivedPassword => {
    console.log(receivedPassword, 'password');
    setPassword(receivedPassword);
  };

  const handleCheck = () => {
    setChecked(!checked);
  };

  const onSubmit = () => {
    console.log(name, email, password, 'name, email and password');
  };

  const renderInputFields = () => {
    return (
      <View style={styles.inputFieldContainer}>
        <AuthTextInput
          value={name}
          onChangeText={text => handleName(text)}
          placeHolder={en.signupScreen.name}
          reference={nameRef}
          onSubmitEditing={() => emailRef.current.focus()}
        />
        <AuthTextInput
          value={email}
          onChangeText={text => handleEmail(text)}
          placeHolder={en.signupScreen.email}
          keyboardType="email-address"
          reference={emailRef}
          onSubmitEditing={() => passwordRef.current.focus()}
        />

        <AuthTextInput
          value={password}
          onChangeText={text => handlePassword(text)}
          placeHolder={en.signupScreen.password}
          type="password"
          reference={passwordRef}
          onSubmitEditing={onSubmit}
        />

        <CheckboxButton
          text={en.signupScreen.lightText}
          mainText={en.signupScreen.mainText}
          checked={checked}
          onPress={handleCheck}
          onSubBtnPress={() =>
            alert('will be redirected to terms and conditions')
          }
        />

        <SubmitButton
          title={en.signupScreen.submitBtnText}
          style={styles.submitButtonStyle}
        />

        <Text style={styles.seperatorText}>
          {en.signupScreen.seperatorText}
        </Text>

        <IconButton
          title={en.signupScreen.secondaryBtnText}
          icon={Images.signupScreen.google}
        />

        <DescTextButton
          description={en.signupScreen.descriptionText}
          underlineText={en.signupScreen.underlineText}
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
      <Header title={en.navTitles.signup} />
      <View style={styles.mainRender}>{renderInputFields()}</View>
    </ScrollView>
  );
};

export default Signup;
