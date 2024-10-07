import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import StoresList from '../screens/StoresList';

function StoreStack() {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator initialRouteName="StoresList">
      <Stack.Screen
        options={{headerShown: false}}
        name="StoresList"
        component={StoresList}
      />
    </Stack.Navigator>
  );
}

export default StoreStack;
