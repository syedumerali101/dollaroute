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
import ReviewSummaryCard from '../../components/Cards/ReviewSummaryCard';
import ConfirmationPopup from '../../components/Popups/ConfirmationPopup';
import {Metrics} from '../../theme';
import {navigateAndSimpleReset} from '../../utils/navigation';

const ReviewSummary = ({navigation, route}) => {
  const scrollViewRef = useRef(null);
  const [withdrawSucces, setWithdrawSuccess] = useState(false);
  // const [selectedPayment, setSelectedPayment] = useState(null);

  const selectedPayment = route?.params?.selectedPayment;

  // const handleSelectionPayment = paymentMethod => {
  //   setSelectedPayment(paymentMethod);
  // };

  const handleNavigateBack = () => {
    setWithdrawSuccess(false);
    navigateAndSimpleReset('Home', 0);
  };

  const onSubmit = () => {
    setWithdrawSuccess(true)
  }
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
              disabled={true}
              id={item?.id}
              title={item?.title}
              icon={item?.icon}
              selected={selectedPayment}
              // onPress={paymentMethod => handleSelectionPayment(paymentMethod)}
              mainBtnContainer={styles.mainBtnContainer}
            />
          );
        })}
      </ScrollView>
    );
  };

  return (
    <View style={styles.mainContainer}>
      <Header title={en.navTitles.reviewSummary} />
      <ReviewSummaryCard />
      <RowButton title="Withdraw To" />
      {mainRender()}
      <SubmitButton
        title={en.common.continue}
        style={styles.submitButtonStyle}
        textStyle={styles.submitBtnTextStyle}
        // onPress={() => navigation.navigate('Withdraw')}
        onPress={onSubmit}
      />

      <ConfirmationPopup
        loading={withdrawSucces}
        title="Withdrawal Successful!"
        description="Your cashback of $200 has been successfully withdrawn to your PayPal account."
        hideYesBtn={true}
        mainWhiteContainer={styles.mainWhiteContainer}
        secondBtnStyle={styles.secondBtnStyle}
        onNo={handleNavigateBack}
      />
    </View>
  );
};

export default ReviewSummary;
