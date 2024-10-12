import React, {useRef, useState} from 'react';
import {FlatList, ScrollView, StatusBar, View} from 'react-native';
import styles from './styles';
import ImageBackgroundHeader from '../../components/ImageBackgroundHeader';
import Images from '../../theme/Images';
import {
  addressData,
  dealsDetailsTabs,
  rewardsData,
} from '../../configs/Constants';
import Text from '../../components/Text';
import Tabs from '../../components/Tabs';
import en from '../../translations/en.json';
import RatingCard from '../../components/RatingCard';
import CategoryCard from '../../components/Cards/CategoryCard';
import SearchTextInput from '../../components/Inputs/SearchTextInput';
import AddressCard from '../../components/Cards/AddressCard';

const DealsDetails = ({navigation}) => {
  const scrollViewRef = useRef(null);
  const [activeTab, setActiveTab] = useState(1);

  const handleActiveTab = item => {
    setActiveTab(item?.id);
  };

  const renderRewardItem = ({item, index}) => {
    return (
      <View key={item?.id + index} style={styles.promoCardContainer}>
        <CategoryCard
          item={item}
          mainContainerStyle={styles.mainContainerStyle}
          imageBackgroundStyle={styles.imageBackgroundStyle}
          onPress={() => navigation.navigate('Rewards')}
        />
      </View>
    );
  };

  const renderDetails = () => {
    if (activeTab === 1) {
      return (
        <View style={styles.mainDescriptionContainer}>
          <RatingCard
            storeName="Starbucks"
            rating={4}
            reviews="895"
            storeImage={Images.dummy.starbucks}
          />
          <View style={styles.descriptionView}>
            <Text size="sixteen" style={styles.descriptionText}>
              {en.dealsDetails.description1}
              {`\n`}
              {`\n`}
              {en.dealsDetails.description2}
            </Text>
          </View>
        </View>
      );
    }

    if (activeTab === 2) {
      return (
        <FlatList
          data={rewardsData()}
          renderItem={renderRewardItem}
          style={styles.listStyle}
          contentContainerStyle={styles.rewardsContainerStyle}
        />
      );
    }

    if (activeTab === 3) {
      return (
        <View>
          <SearchTextInput placeHolder={en.categoriesScreen.search} />
          {addressData()?.map((item, index) => {
            return (
              <AddressCard
                onPress={() => navigation.navigate('Rewards')}
                data={item?.details}
                title={`${item?.from} - ${item?.to}`}
              />
            );
          })}
        </View>
      );
    }
  };

  const mainRender = () => {
    return (
      <ScrollView
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
        ref={scrollViewRef}
        contentContainerStyle={styles.contentContainerStyle}
        style={styles.mainRenderContainer}>
        <Tabs
          data={dealsDetailsTabs()}
          activeTab={activeTab}
          onPress={item => handleActiveTab(item)}
        />
        {renderDetails()}
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
        <ImageBackgroundHeader image={Images.dummy.dummyDetailBanner} />
        {mainRender()}
      </View>
    </>
  );
};

export default DealsDetails;
