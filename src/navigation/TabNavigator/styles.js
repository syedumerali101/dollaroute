import {StyleSheet} from 'react-native';
import {Colors, Metrics} from '../../theme';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    borderTopWidth: 1,
    borderColor: Colors.lightMode.white4,
    paddingVertical: Metrics.ratio(10),
  },

  activeBtnStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    width: Metrics.screenWidth * 0.2,
  },

  nonActiveBtnStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    width: Metrics.screenWidth * 0.2,
  },

  tabBarIconStyle: (focused) => ({
    height: Metrics.ratio(20),
    width: Metrics.ratio(20),
    tintColor: focused ? Colors.lightMode.pink : Colors.lightMode.grey9,
  }),

  tabBarIconName: (focused) => ({
    color: focused ? Colors.lightMode.pink : Colors.lightMode.grey9,
    fontSize: Metrics.ratio(10),
    fontWeight: '400',
  }),
});

export default styles;
