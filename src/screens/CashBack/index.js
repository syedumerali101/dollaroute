import React, {useRef} from 'react';
import {ScrollView, View, Image} from 'react-native';
import SafeAreaWrapper from '../../components/Wrappers/SafeAreaWrapper';
import en from '../../translations/en.json';
import Header from '../../components/Header';
import styles from './styles';
import Text from '../../components/Text';
import Images from '../../theme/Images';
import RowButton from '../../components/Buttons/RowButton';
import {cashbackData} from '../../configs/Constants';
import SubmitButton from '../../components/Buttons/SubmitButton';
import CashbackCard from '../../components/Cards/CashbackCard';

const CashBack = ({navigation}) => {
  const scrollViewRef = useRef(null);
  const mainRender = () => {
    return (
      <ScrollView
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
        ref={scrollViewRef}
        contentContainerStyle={styles.contentContainerStyle}
        style={styles.mainRenderContainer}>
        <View style={styles.mainRowContainer}>
          <View style={styles.totalCashbackEarnedView}>
            <Image
              style={styles.dollarsIconStyle}
              source={Images.common.dollars}
            />

            <Text size="large" style={styles.cashTextStyle}>
              $150.25{' '}
            </Text>
            <Text size="twelve" style={styles.headingText}>
              Total cashback earned
            </Text>
          </View>

          <View style={styles.availableCashView}>
            <Image
              style={styles.dollarsIconStyle}
              source={Images.common.dollars}
            />

            <Text size="large" style={styles.cashTextStyle}>
              $45.75
            </Text>
            <Text size="twelve" style={styles.headingText}>
              Available now
            </Text>
          </View>
        </View>

        <RowButton
          title="History of bonuses"
          buttonTitle={'See all'}
          style={styles.rowBtnContainer}
        />

        {cashbackData()?.map((item, index) => {
          return (
            <CashbackCard
              item={item}
              onPress={() => navigation.navigate('Transaction')}
            />
          );
        })}
      </ScrollView>
    );
  };

  return (
    <View style={styles.mainContainer}>
      <Header title={en.navTitles.cashback} />
      {mainRender()}
      <SubmitButton
        title={en.cashback.withDraw}
        style={styles.submitButtonStyle}
        textStyle={styles.submitBtnTextStyle}
        onPress={() => navigation.navigate('WithdrawCashback')}
      />
    </View>
  );
};

export default CashBack;
