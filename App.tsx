/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {StyleSheet, View, SafeAreaView, StatusBar} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Navigation from './src/navigation';

function App() {
  return (
    <SafeAreaView style={styles.mainContainer}>
       <Navigation />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default App;
