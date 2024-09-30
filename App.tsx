/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {StyleSheet, View} from 'react-native';

import Welcome from './src/screens/Welcome';

function App() {
  return (
    <View style={styles.mainContainer}>
      <Welcome />
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1
  },
});

export default App;
