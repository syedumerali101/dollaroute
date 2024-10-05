import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../screens/Home';

function HomeStack() {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        options={{headerShown: false}}
        name="Home"
        component={Home}
      />
    </Stack.Navigator>
  );
}

export default HomeStack;
