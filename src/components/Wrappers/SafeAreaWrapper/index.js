import React, {Children, useRef} from 'react';
import {View, SafeAreaView, StyleSheet, ScrollView} from 'react-native';
import {Colors} from '../../../theme';

const SafeAreaWrapper = ({children}) => {
  const scrollViewRef = useRef(null);
  return (
    <SafeAreaView style={styles.main}>
      <ScrollView
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
        ref={scrollViewRef}
        style={styles.mainScrollViewStyle}
        contentContainerStyle={styles.contentContainerStyle}>
        {children}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: Colors.white,
  },

  mainScrollViewStyle: {
    flex: 1,
    backgroundColor: Colors.white,
  },

  contentContainerStyle: {
    alignItems: 'center',
  },
});
export default SafeAreaWrapper;
