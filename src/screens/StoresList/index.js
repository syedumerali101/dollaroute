import React from 'react';
import {View, ImageBackground} from 'react-native';

import Images from '../../theme/Images';
import styles from './styles';
import Text from '../../components/Text';
import StoreCard from '../../components/Cards/StoreCard';

const stores = [
  {
    id: 1,
    image: Images.common.mcdonald,
    name: 'McDonald',
    location: 'Tillary Street, Brooklyn, NY',
    wishlist: true,
  },
  {
    id: 2,
    image: Images.common.hermes,
    name: 'Hermes',
    location: 'Tillary Street, Brooklyn, NY',
    wishlist: false,
  },
  {
    id: 3,
    image: Images.common.mcdonald,
    name: 'McDonald',
    location: 'Tillary Street, Brooklyn, NY',
    wishlist: false,
  },
];

const StoresList = () => {
  const renderStores = () => {
    return stores.map(val => {
      return (
        <StoreCard
          image={val.image}
          name={val.name}
          location={val.location}
          wishlist={val.wishlist}
        />
      );
    });
  };

  return (
    <View>
      <ImageBackground source={Images.common.map} style={styles.map}>
        <View style={styles.contentContainer}>
          <Text size="xLarge" style={styles.heading}>
            Nearby Stores
          </Text>
          <Text>Downtown Brooklyn, New York</Text>

          {renderStores()}
        </View>
      </ImageBackground>
    </View>
  );
};

export default StoresList;
