import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import AuthStack from './AuthStack';
import TabNavigator from './TabNavigator';
import {navigationRef} from '../utils/navigation';
import MainNavigator from './MainNavigator';

function Navigation() {
  return (
    <SafeAreaProvider>
      <NavigationContainer ref={navigationRef}>
        <MainNavigator />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default Navigation;
