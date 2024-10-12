import React, {useRef} from 'react';
import {ScrollView, StatusBar, View} from 'react-native';
import styles from './styles';
import ImageBackgroundHeader from '../../components/ImageBackgroundHeader';
import Images from '../../theme/Images';
import Text from '../../components/Text';
import {redeemPoints, termsConditions} from '../../configs/Constants';
import SubmitButton from '../../components/Buttons/SubmitButton';
import en from '../../translations/en.json'

const Rewards = ({navigation}) => {
  const scrollViewRef = useRef(null);

  const renderPoints = (data) => {
    return (
      <View style={styles.pointsMainContainer}>
        <Text size="sixteen" style={styles.headingText}>
          {data?.heading}
        </Text>
        <View style={styles.pointViewContainer}>
          {data?.data?.map((item, index) => {
            return (
              <View style={styles.pointRowView}>
                <Text size="sixteen" style={styles.pointText}>
                  {item?.id}.
                </Text>
                <Text size="sixteen" style={styles.pointViewText}>
                  {item?.title}
                </Text>
              </View>
            );
          })}
        </View>
      </View>
    );
  };
  const renderDetails = () => {
    return (
      <View style={styles.mainDescriptionContainer}>
        <View style={styles.headingMainView}>
          <Text size="large" style={styles.detailsHeading}>
            Get Free 1 Cup Coffee{' '}
          </Text>
          <Text size="xxSmall" style={styles.subTitleStyle}>
            Offer will end on December 31, 2024
          </Text>
        </View>
      </View>
    );
  };

  const renderLoading = () => {
    return (
      <View style={styles.loaderDescContainer}>
        <View style={styles.loadingView}>
          <View style={styles.innerLoading} />
        </View>

        <View style={styles.loadingNumbersView}>
          <Text size="fourteen" style={styles.highlightedText}>
            3,750
            <Text size="fourteen" style={styles.unhighlightedText}>
              {' '}
              / 256,600
            </Text>
          </Text>
        </View>

        <View style={styles.descriptionContainer}>
          <Text style={styles.welcomeDesc} size="sixteen">
            Welcome to Starbucks Loyalify! Earn points with every purchase and
            unlock delightful rewards. As a valued member, enjoy exclusive perks
            and freebies tailored just for you.
          </Text>
        </View>

        {renderPoints(termsConditions)}
        {renderPoints(redeemPoints)}

        <SubmitButton
          title={en.common.redeem}
          style={styles.submitButtonStyle}
        />
      </View>
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
        {renderDetails()}
        {renderLoading()}
      </ScrollView>
    );
  };
  return (
    <>
      <StatusBar
        backgroundColor={'transparent'}
        barStyle="light-content"
        translucent={true}
      />

      <View style={styles.mainScrollViewStyle}>
        <ImageBackgroundHeader
          title="Rewards"
          image={Images.dummy.dummyDetailBanner}
        />
        {mainRender()}
      </View>
    </>
  );
};

export default Rewards;
