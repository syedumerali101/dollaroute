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
import Images from '../../theme/Images';

const WithdrawTo = ({navigation}) => {
  const scrollViewRef = useRef(null);
  const [selectedPayment, setSelectedPayment] = useState(null);

  const handleSelectionPayment = paymentMethod => {
    setSelectedPayment(paymentMethod);
  };
  const mainRender = () => {
    return (
      <ScrollView
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
        ref={scrollViewRef}
        contentContainerStyle={styles.contentContainerStyle}
        style={styles.mainRenderContainer}>
        {paymentMethods()?.map((item, index) => {
          return (
            <PaymentButton
              id={item?.id}
              title={item?.title}
              icon={item?.icon}
              selected={selectedPayment}
              onPress={paymentMethod => handleSelectionPayment(paymentMethod)}
              mainBtnContainer={styles.mainBtnContainer}
            />
          );
        })}
      </ScrollView>
    );
  };

  return (
    <View style={styles.mainContainer}>
      <Header title={en.navTitles.withDrawTo} rightIcon={Images.common.plus} />
      {mainRender()}
      <SubmitButton
        title={en.common.continue}
        style={styles.submitButtonStyle}
        textStyle={styles.submitBtnTextStyle}
        onPress={() =>
          navigation.navigate('ReviewSummary', {
            selectedPayment: selectedPayment,
          })
        }
      />
    </View>
  );
};

export default WithdrawTo;
