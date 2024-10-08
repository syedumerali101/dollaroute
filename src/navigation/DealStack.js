import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import DealsList from '../screens/DealsList';

function DealStack() {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator initialRouteName="DealsList">
      <Stack.Screen
        options={{headerShown: false}}
        name="DealsList"
        component={DealsList}
      />
    </Stack.Navigator>
  );
}

export default DealStack;
