import React from 'react';
import {View, FlatList} from 'react-native';

import DealCard from '../../components/Cards/DealCard';
import styles from './styles';
import Text from '../../components/Text';

const data = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const buttons = [
  {id: 1, title: 'cashback'},
  {id: 2, title: 'coupons'},
  {id: 3, title: 'discounts'},
];

const DealsList = () => {
  const renderDealItem = () => {
    return <DealCard />;
  };

  const renderButtons = () => {
    return buttons.map(val => {
      return (
        <View style={styles.button}>
          <Text style={styles.buttonText}>{val.title}</Text>
        </View>
      );
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.buttonsRow}>{renderButtons()}</View>
      <FlatList
        data={data}
        renderItem={renderDealItem}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default DealsList;
