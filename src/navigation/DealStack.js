import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import DealsList from '../screens/DealsList';
import DealsDetails from '../screens/DealsDetails';

function DealStack() {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator initialRouteName="DealsList">
      <Stack.Screen
        options={{headerShown: false}}
        name="DealsList"
        component={DealsList}
      />

      <Stack.Screen
        options={{headerShown: false}}
        name="DealsDetails"
        component={DealsDetails}
      />
    </Stack.Navigator>
  );
}

export default DealStack;
