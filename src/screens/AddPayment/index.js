import React, {useRef, useState} from 'react';
import {Text, View, ScrollView, SafeAreaView, StatusBar} from 'react-native';
import AuthTextInput from '../../components/Inputs/AuthTextInput';
import Header from '../../components/Header';
import styles from './styles';
import en from '../../translations/en.json';
import SubmitButton from '../../components/Buttons/SubmitButton';
import TextButton from '../../components/Buttons/TextButton';
import DescTextButton from '../../components/Buttons/DescTextButton';
import SafeAreaWrapper from '../../components/Wrappers/SafeAreaWrapper';
import {navigate} from '../../utils/navigation';
import Images from '../../theme/Images';

const AddPayment = ({navigation}) => {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const cardNumberRef = useRef(null);
  const accountHolderRef = useRef(null);
  const expiryDateRef = useRef(null);
  const cvvRef = useRef(null);

  const handleEmail = receivedEmail => {
    console.log(receivedEmail, 'email');
    setEmail(receivedEmail);
  };

  const handlePassword = receivedPassword => {
    console.log(receivedPassword, 'password');
    setPassword(receivedPassword);
  };

  const onSubmit = () => {
    navigation.goBack();
  };

  const renderInputFields = () => {
    return (
      <View style={styles.inputFieldContainer}>
        <AuthTextInput
          value={email}
          onChangeText={text => handleEmail(text)}
          placeHolder={en.addPayment.cardNumber}
          keyboardType="email-address"
          reference={cardNumberRef}
          onSubmitEditing={() => accountHolderRef.current.focus()}
        />

        <AuthTextInput
          value={password}
          onChangeText={text => handlePassword(text)}
          placeHolder={en.addPayment.accountHolderName}
          reference={accountHolderRef}
          onSubmitEditing={() => expiryDateRef.current.focus()}
        />

        <View style={styles.expiryCvvView}>
          <AuthTextInput
            value={email}
            onChangeText={text => handleEmail(text)}
            placeHolder={en.addPayment.expiryDate}
            keyboardType="email-address"
            reference={expiryDateRef}
            containerStyle={styles.containerStyle}
            textInputStyle={styles.textInputStyle}
            onSubmitEditing={() => cvvRef.current.focus()}
          />

          <AuthTextInput
            value={password}
            onChangeText={text => handlePassword(text)}
            placeHolder={en.addPayment.cvv}
            reference={cvvRef}
            onSubmitEditing={onSubmit}
            textInputStyle={styles.textInputStyle}
            containerStyle={styles.containerStyle}
          />
        </View>

        <SubmitButton
          title={en.common.save}
          style={styles.submitButtonStyle}
          onPress={onSubmit}
        />
      </View>
    );
  };
  return (
    <View style={styles.mainContainer}>
      <Header
        title={en.navTitles.addPayment}
        rightIcon={Images.common.cardScan}
      />
      <View style={styles.mainRender}>{renderInputFields()}</View>
    </View>
  );
};

export default AddPayment;
