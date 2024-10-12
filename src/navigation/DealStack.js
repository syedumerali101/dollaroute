import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import DealsList from '../screens/DealsList';
import DealsDetails from '../screens/DealsDetails';
import Rewards from '../screens/Rewards';

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

      <Stack.Screen
        options={{headerShown: false}}
        name="Rewards"
        component={Rewards}
      />
    </Stack.Navigator>
  );
}

export default DealStack;
