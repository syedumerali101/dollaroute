import React, {useRef, useState} from 'react';
import {
  Text,
  View,
  ScrollView,
  SafeAreaView,
  TextInput,
  StatusBar,
} from 'react-native';
import AuthTextInput from '../../components/Inputs/AuthTextInput';
import Header from '../../components/Header';
import styles from './styles';
import en from '../../translations/en.json';
import SubmitButton from '../../components/Buttons/SubmitButton';
import {navigate} from '../../utils/navigation';
import {Colors} from '../../theme';

const Withdraw = ({navigation}) => {
  const totalBalance = '$3350';
  const [amount, setAmount] = useState(null);

  const handleAmount = receivedAmount => {
    console.log(receivedAmount, 'email');
    setAmount(receivedAmount);
  };

  const onSubmit = () => {
    // navigation.navigate('WithdrawTo');
    navigation.goBack()
  };

  const renderInputFields = () => {
    return (
      <View style={styles.inputFieldContainer}>
        <Text style={styles.enterAmountText} size="fourteen">
          {en.withDraw.enterAmount}
        </Text>
        <View style={styles.textInputRow}>
          <Text style={styles.dollarSignText}>$</Text>
          <TextInput
            autoFocus={true}
            value={amount}
            onChangeText={text => handleAmount(text)}
            onSubmitEditing={onSubmit}
            selectionColor={Colors.lightMode.white}
            style={styles.textInputStyle}
            keyboardType="number-pad"
          />
        </View>
        <Text style={styles.availableAmountText} size="fourteen">
          {en.withDraw.availableAmount}
          {totalBalance}
        </Text>
      </View>
    );
  };
  return (
    <>
      <StatusBar
        backgroundColor={'transparent'}
        barStyle={'dark-content'}
        translucent={true}
      />

      <View style={styles.mainContainer}>
        <Header
          headerContainer={styles.headerContainer}
          title={en.navTitles.withDraw}
          titleTextStyle={styles.titleTextStyle}
          leftIconStyle={styles.leftIconStyle}
        />
        {renderInputFields()}
        <SubmitButton
          title={en.common.continue}
          style={styles.submitButtonStyle}
          textStyle={styles.textStyle}
          onPress={onSubmit}
        />
      </View>
    </>
  );
};

export default Withdraw;
