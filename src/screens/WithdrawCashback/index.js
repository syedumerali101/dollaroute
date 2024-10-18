import React, {useRef, useState} from 'react';
import {ScrollView, View} from 'react-native';
import en from '../../translations/en.json';
import Header from '../../components/Header';
import styles from './styles';
import Text from '../../components/Text';
import RowButton from '../../components/Buttons/RowButton';
import {paymentMethods} from '../../configs/Constants';
import SubmitButton from '../../components/Buttons/SubmitButton';
import PaymentButton from '../../components/Buttons/PaymentButton';

const WithdrawCashback = ({navigation}) => {
  const scrollViewRef = useRef(null);
  const [selectedPayment, setSelectedPayment] = useState(null);

  const handleSelectionPayment = paymentMethod => {
    setSelectedPayment(paymentMethod);
    navigation.navigate('Withdraw')
  };
  const mainRender = () => {
    return (
      <ScrollView
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
        ref={scrollViewRef}
        contentContainerStyle={styles.contentContainerStyle}
        style={styles.mainRenderContainer}>
        <View style={styles.totalCashbackEarnedView}>
          <Text size="twelve" style={styles.headingText}>
            Balance
          </Text>
          <Text size="large" style={styles.cashTextStyle}>
            $150.25{' '}
          </Text>

          <SubmitButton
            title={en.cashback.withDraw}
            style={styles.submitButtonStyle}
            textStyle={styles.submitBtnTextStyle}
            onPress={() => navigation.navigate('WithdrawTo')}
          />
        </View>

        <RowButton
          title="Withdrawal Options"
          buttonTitle={'+ Add'}
          style={styles.rowBtnContainer}
          onPress={() => navigation.navigate('AddPayment')}
        />

        {paymentMethods()?.map((item, index) => {
          return (
            <PaymentButton
              id={item?.id}
              title={item?.title}
              icon={item?.icon}
              selected={selectedPayment}
              onPress={paymentMethod => handleSelectionPayment(paymentMethod)}
            />
          );
        })}
      </ScrollView>
    );
  };

  return (
    <View style={styles.mainContainer}>
      <Header title={en.navTitles.WithdrawCashback} />
      {mainRender()}
    </View>
  );
};

export default WithdrawCashback;
