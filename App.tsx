/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {StyleSheet, View, SafeAreaView, StatusBar} from 'react-native';
import Navigation from './src/navigation';
import {Colors} from './src/theme';

function App() {
  return (
    <View style={styles.mainContainer}>
      <StatusBar backgroundColor={Colors.white} barStyle={'dark-content'} />
      <Navigation />
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: Colors.white,
  },
});

export default App;
