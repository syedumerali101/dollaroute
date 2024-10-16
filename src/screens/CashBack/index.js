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

const CashBack = () => {
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

        <RowButton title="History of bonuses" buttonTitle={'See all'} />

        {cashbackData()?.map((item, index) => {
          return (
            <View style={styles.innerRowContainer}>
              <Text size="fourteen" style={styles.dateText}>
                {item?.date}
              </Text>
              {item?.data?.map((dataItem, dataIndex) => (
                <View style={styles.itemContainer}>
                  <View style={styles.itemImageView}>
                    <Image style={styles.imageStyle} source={dataItem?.image} />
                  </View>

                  <View style={styles.itemNameContainer}>
                    <Text size="fourteen" style={styles.itemNameStyle}>
                      {dataItem?.name}
                    </Text>
                    <Text size="ten" style={styles.itemTypeStyle}>
                      {dataItem?.type}
                    </Text>
                  </View>

                  <View style={styles.itemPriceContainer}>
                    <Text size="fourteen" style={styles.priceStyle}>
                      {dataItem?.price}
                    </Text>
                    <Text size="ten" style={styles.cashbackStyle}>
                      {dataItem?.cashback}
                    </Text>
                  </View>
                </View>
              ))}
            </View>
          );
        })}
      </ScrollView>
    );
  };

  return (
    <SafeAreaWrapper>
      <Header title={en.navTitles.cashback} />
      {mainRender()}
      <SubmitButton
        title={en.cashback.withDraw}
        style={styles.submitButtonStyle}
        textStyle={styles.submitBtnTextStyle}
      />
    </SafeAreaWrapper>
  );
};

export default CashBack;
