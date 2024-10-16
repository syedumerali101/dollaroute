import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import ProfileScreen from '../screens/Profile';
import CashBack from '../screens/CashBack';

function ProfileStack() {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator initialRouteName="ProfileScreen">
      <Stack.Screen
        options={{headerShown: false}}
        name="ProfileScreen"
        component={ProfileScreen}
      />
        <Stack.Screen
        options={{headerShown: false}}
        name="CashBack"
        component={CashBack}
      />
    </Stack.Navigator>
  );
}

export default ProfileStack;
