/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {StyleSheet, View, SafeAreaView} from 'react-native';
import Navigation from './src/navigation';

function App() {
  return (
    <View style={styles.mainContainer}>
      <Navigation />
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default App;
