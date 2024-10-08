import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Welcome from '../screens/Welcome';
import Signup from '../screens/Signup';
import Login from '../screens/Login';
import ForgotPassword from '../screens/ForgotPassword';
import Verification from '../screens/Verification';
import EmailSent from '../screens/EmailSent';
import ResetPassword from '../screens/ResetPassword';

function AuthStack() {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator
      initialRouteName="Welcome"
      screenOptions={{headerShown: false}}>
      <Stack.Screen
        options={{headerShown: false}}
        name="Welcome"
        component={Welcome}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="Signup"
        component={Signup}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="Login"
        component={Login}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="ForgotPassword"
        component={ForgotPassword}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="ResetPassword"
        component={ResetPassword}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="Verification"
        component={Verification}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="EmailSent"
        component={EmailSent}
      />
    </Stack.Navigator>
  );
}

export default AuthStack;
