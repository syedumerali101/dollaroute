import React, {useRef} from 'react';
import {ScrollView, View, Image} from 'react-native';
import en from '../../translations/en.json';
import Header from '../../components/Header';
import styles from './styles';
import Text from '../../components/Text';
import Images from '../../theme/Images';
import RowButton from '../../components/Buttons/RowButton';
import {cashbackData, transactionData} from '../../configs/Constants';
import SubmitButton from '../../components/Buttons/SubmitButton';
import CashbackCard from '../../components/Cards/CashbackCard';

const Transaction = ({navigation}) => {
  const scrollViewRef = useRef(null);
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
        </View>

        <RowButton
          title="History"
          buttonTitle={'See all'}
          style={styles.rowBtnContainer}
        />

        {transactionData()?.map((item, index) => {
          return (
            <CashbackCard
              item={item}
              leftImageStyle={styles.leftImageStyle}
              leftImageViewStyle={styles.leftImageViewStyle}
            />
          );
        })}
      </ScrollView>
    );
  };

  return (
    <View style={styles.mainContainer}>
      <Header title={en.navTitles.transaction} />
      {mainRender()}
    </View>
  );
};

export default Transaction;
