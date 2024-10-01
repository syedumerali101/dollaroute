/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {StyleSheet, View, SafeAreaView} from 'react-native';

import Welcome from './src/screens/Welcome';
import Login from './src/screens/Login';
import ForgotPassword from './src/screens/ForgotPassword';
import EmailSent from './src/screens/EmailSent';
import ResetPassword from './src/screens/ResetPassword';

function App() {
  return (
    <SafeAreaView style={styles.mainContainer}>
      {/* <Welcome /> */}
      {/* <Login /> */}
      {/* <ForgotPassword /> */}
      {/* <EmailSent /> */}
      <ResetPassword />
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
