import React, {useState} from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {Image, TouchableOpacity, View, Text} from 'react-native';
import styles from './styles';
import AuthStack from '../AuthStack';
import {Metrics} from '../../theme';
import Images from '../../theme/Images';
import HomeStack from '../HomeStack';

const Tab = createMaterialTopTabNavigator();

const tabIcons = {
  Home: {icon: Images.tabs.home},
  Stores: {icon: Images.tabs.store},
  Deals: {
    icon: Images.tabs.deals,
  },
  Categories: {icon: Images.tabs.categories},
  Profile: {icon: Images.tabs.profile},
};

const TabNavigator = props => {
  return (
    <Tab.Navigator
      tabBarPosition="bottom"
      tabBar={tabProps => <MyTabBar {...tabProps} {...props} />}>
      <Tab.Screen name="Home" component={HomeStack} />
      <Tab.Screen name="Stores" component={HomeStack} />
      <Tab.Screen name="Deals" component={HomeStack} />
      <Tab.Screen name="Categories" component={HomeStack} />
      <Tab.Screen name="Profile" component={HomeStack} />
    </Tab.Navigator>
  );
};

const MyTabBar = ({state, navigation}) => {
  return (
    <View style={styles.container}>
      {state.routes.map((route, index) => {
        const isFocused = state.index === index;
        const onPress = () => {
          if (!isFocused) {
            navigation.navigate(route.name);
          }
        };
        return (
          <TouchableOpacity
            activeOpacity={1}
            onPress={onPress}
            style={styles.nonActiveBtnStyle}>
            <Image
              source={tabIcons[route?.name].icon}
              style={styles.tabBarIconStyle(isFocused)}
            />
            <Text style={styles.tabBarIconName(isFocused)}>{route?.name}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default TabNavigator;
