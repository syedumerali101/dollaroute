import React, {useRef} from 'react';
import {Text, View, ScrollView, StatusBar} from 'react-native';
import styles from './styles';
import ImageHeader from '../../components/ImageHeader';
import en from '../../translations/en.json';

const Home = () => {
  const scrollViewRef = useRef(null);
  return (
    <ScrollView
      keyboardShouldPersistTaps="handled"
      showsVerticalScrollIndicator={false}
      ref={scrollViewRef}
      style={styles.mainScrollViewStyle}>
      <ImageHeader title={en.homeScreen.hi + ' ' + en.homeScreen.name} />
    </ScrollView>
  );
};

export default Home;
