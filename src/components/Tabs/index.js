import React from 'react';
import {View, TouchableOpacity, StyleSheet} from 'react-native';
import Text from '../Text';
import {Colors, Metrics} from '../../theme';

const Tabs = ({onPress, activeTab, data}) => {
  return (
    <View style={styles.tabsContainer}>
      {data?.map((item, index) => {
        return (
          <TouchableOpacity
            key={item?.id + index}
            onPress={() => onPress(item)}
            style={activeTab === item?.id ? styles.activeTabBtn : styles.tabBtn}
            activeOpacity={1}>
            <Text
              size="fourteen"
              style={
                activeTab === item?.id
                  ? styles.activeTabTextStyle
                  : styles.tabTextStyle
              }>
              {item?.title}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  tabsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: Metrics.screenWidth,
    borderBottomWidth: 0.3,
    height: Metrics.screenHeight * 0.06,
    borderColor: Colors.lightMode.lightGray3,
  },

  tabBtn: {
    justifyContent: 'center',
    alignItems: 'center',
    width: Metrics.screenWidth * 0.3,
  },

  activeTabBtn: {
    justifyContent: 'center',
    alignItems: 'center',
    width: Metrics.screenWidth * 0.3,
    borderBottomWidth: 1.5,
    borderColor: Colors.lightMode.pink,
  },

  tabTextStyle: {
    color: Colors.lightMode.lightGray4,
    fontWeight: '500',
  },

  activeTabTextStyle: {
    color: Colors.lightMode.pink,
    fontWeight: '500',
  },
});

export default Tabs;
