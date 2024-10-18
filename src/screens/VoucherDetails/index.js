import React, {useState, useRef} from 'react';
import {View, Image, TouchableOpacity, ScrollView} from 'react-native';
import Text from '../../components/Text';
import styles from './styles';
import Header from '../../components/Header';
import Images from '../../theme/Images';
import {detailsData} from '../../configs/Constants';

const VoucherDetails = () => {
  const scrollViewRef = useRef(null);
  const renderRightBtn = () => {
    return (
      <TouchableOpacity style={styles.rightBtnStyle}>
        <Image style={styles.rightIconStyle} source={Images.common.download} />
      </TouchableOpacity>
    );
  };

  const mainRender = () => {
    return (
      <ScrollView
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
        ref={scrollViewRef}
        contentContainerStyle={styles.contentContainerStyle}
        style={styles.mainRenderContainer}>
        <View style={styles.mainDetailsContainer}>
          <View style={styles.barCodeView}>
            <Image style={styles.barCodeStyle} source={Images.dummy.barcode} />
          </View>

          <Text style={styles.titleStyle} size='large'>Get Free 1 Cup Coffee</Text>

          <Text style={styles.subTitleStyle} size='sixteen'>
            Flash this voucher at the cashier to unlock your awesome reward!
          </Text>

          {detailsData()?.map((item, index) => {
            return (
              <View style={styles.mainDetailsRow}>
                <View style={styles.leftTitleView}>
                  <Text style={styles.leftTitleTextStyle} size='sixteen'>{item?.title}</Text>
                </View>

                <View style={styles.rightTitleViewStyle}>
                  <Text style={styles.rightTitleTextStyle} size='sixteen'>{item?.text}</Text>
                </View>
              </View>
            );
          })}

          <Text style={styles.bottomTextStyle} size='sixteen'>
            Level up your rewards game with DollaRoute! Exclusive perks &
            benefits await.
          </Text>
        </View>
      </ScrollView>
    );
  };
  return (
    <View style={styles.mainContainer}>
      <Header
        headerContainer={styles.headerContainer}
        title="Voucher"
        titleTextStyle={styles.titleTextStyle}
        leftIconStyle={styles.leftIconStyle}
        rightIcon={Images.common.download}
      />
      {mainRender()}
    </View>
  );
};

export default VoucherDetails;
