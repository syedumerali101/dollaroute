import React from 'react';
import {View, ImageBackground, Image, TouchableOpacity} from 'react-native';

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
        <View style={styles.iconsContainer}>
          <TouchableOpacity style={styles.iconCircle} activeOpacity={0.7}>
            <Image source={Images.common.filter} style={styles.icon} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.iconCircle} activeOpacity={0.7}>
            <Image source={Images.common.location} style={styles.icon} />
          </TouchableOpacity>
        </View>

        <View style={styles.contentContainer}>
          <Text size="xLarge" style={styles.heading}>
            Nearby Stores
          </Text>
          <Text style={styles.location}>Downtown Brooklyn, New York</Text>

          {renderStores()}
        </View>
      </ImageBackground>
    </View>
  );
};

export default StoresList;
