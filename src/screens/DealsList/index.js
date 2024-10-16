import React from 'react';
import {View, FlatList, TouchableOpacity} from 'react-native';

import DealCard from '../../components/Cards/DealCard';
import styles from './styles';
import Text from '../../components/Text';
import SearchTextInput from '../../components/Inputs/SearchTextInput';
import en from '../../translations/en.json';
import Images from '../../theme/Images';

const deals = [
  {
    id: 1,
    image: Images.common.nike,
    title: 'nike',
    cashback: '10% Cashback',
    action: 'activate now',
  },
  {
    id: 2,
    image: Images.common.amazon,
    title: 'amazon',
    cashback: '5% Cashback',
    action: 'shop now',
  },
  {
    id: 3,
    image: Images.common.walmart,
    title: 'walmart',
    cashback: '$10 Off $50+',
    action: 'redeem offer',
  },
  {
    id: 4,
    image: Images.common.mcdonald,
    title: 'mcdonald',
    cashback: '35% Cashback',
    action: 'shop now',
  },
  {
    id: 5,
    image: Images.common.hermes,
    title: 'hermes',
    cashback: '35% Cashback',
    action: 'shop now',
  },
  {
    id: 6,
    image: Images.common.nike,
    title: 'nike',
    cashback: '10% Cashback',
    action: 'activate now',
  },
];
const buttons = [
  {id: 1, title: 'cashback'},
  {id: 2, title: 'coupons'},
  {id: 3, title: 'discounts'},
];

const DealsList = ({navigation}) => {
  const renderDealItem = ({item}) => {
    return (
      <View style={styles.dealsCardContainer}>
        <DealCard
          image={item.image}
          name={item.title}
          cashback={item.cashback}
          action={item.action}
          onPress={() => navigation?.navigate('DealsDetails')}
        />
      </View>
    );
  };

  const renderButtons = () => {
    return buttons.map(val => {
      return (
        <TouchableOpacity style={styles.button} activeOpacity={0.7}>
          <Text size="twelve"  style={styles.buttonText}>{val.title}</Text>
        </TouchableOpacity>
      );
    });
  };


  return (
    <View style={styles.container}>
    <SearchTextInput placeHolder={en.categoriesScreen.search} />
      <View style={styles.buttonsRow}>{renderButtons()}</View>
      <FlatList
        data={deals}
        renderItem={renderDealItem}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.contentContainerStyle}
        style={styles.listStyle}
      />
    </View>
  );
};

export default DealsList;
