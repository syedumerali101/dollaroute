import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Categories from '../screens/Categories';

function CategoriesStack() {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        options={{headerShown: false}}
        name="Categories"
        component={Categories}
      />
    </Stack.Navigator>
  );
}

export default CategoriesStack;
