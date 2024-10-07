import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import AuthStack from './AuthStack';
import TabNavigator from './TabNavigator';

function Navigation() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <AuthStack />
        {/* <TabNavigator /> */}
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default Navigation;
