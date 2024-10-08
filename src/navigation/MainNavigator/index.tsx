import {createStackNavigator} from '@react-navigation/stack';
import AuthStack from '../AuthStack';
import TabNavigator from '../TabNavigator';

const Stack = createStackNavigator();

const MainNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="AuthStack"
      screenOptions={{headerShown: false}}>
      <>
        <Stack.Screen
          name="AuthStack"
          component={AuthStack}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="TabNavigator"
          component={TabNavigator}
          options={{headerShown: false}}
        />
      </>
    </Stack.Navigator>
  );
};
export default MainNavigator;
