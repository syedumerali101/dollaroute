import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import ProfileScreen from '../screens/Profile';
import CashBack from '../screens/CashBack';
import Transaction from '../screens/Transaction';
import WithdrawCashback from '../screens/WithdrawCashback';
import AddPayment from '../screens/AddPayment';
import Withdraw from '../screens/Withdraw';
import WithdrawTo from '../screens/WithdrawTo';
import ReviewSummary from '../screens/ReviewSummary';
import InviteFriends from '../screens/InviteFriends';
import Settings from '../screens/Settings';
import NeedHelp from '../screens/NeedHelp';
import FAQ from '../screens/FAQ';

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
      <Stack.Screen
        options={{headerShown: false}}
        name="Transaction"
        component={Transaction}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="WithdrawCashback"
        component={WithdrawCashback}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="AddPayment"
        component={AddPayment}
      />
      {/* <Stack.Screen
        options={{headerShown: false}}
        name="Withdraw"
        component={Withdraw}
      /> */}
      <Stack.Screen
        options={{headerShown: false}}
        name="WithdrawTo"
        component={WithdrawTo}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="ReviewSummary"
        component={ReviewSummary}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="InviteFriends"
        component={InviteFriends}
      />

      <Stack.Screen
        options={{headerShown: false}}
        name="Settings"
        component={Settings}
      />

      <Stack.Screen
        options={{headerShown: false}}
        name="NeedHelp"
        component={NeedHelp}
      />

      <Stack.Screen options={{headerShown: false}} name="FAQ" component={FAQ} />
    </Stack.Navigator>
  );
}

export default ProfileStack;
