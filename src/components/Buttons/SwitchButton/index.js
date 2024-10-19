import React from 'react';
import ToggleSwitch from 'toggle-switch-react-native';
import {StyleSheet, View} from 'react-native';
import {Colors, Metrics} from '../../../theme';

const SwitchButton = ({title, show, onPress}) => {
  return (
    <View style={styles.switchBtnContainer}>
      <ToggleSwitch
        isOn={show}
        onColor={Colors.lightMode.pink}
        offColor={Colors.lightMode.lightPink2}
        label={title}
        labelStyle={styles.labelStyle}
        size="small"
        // onToggle={isOn => console.log('changed to : ', isOn)}
        onToggle={() => onPress(!show)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  labelStyle: {
    color: Colors.lightMode.black8,
    fontWeight: '500',
    fontSize: Metrics.ratio(14),
    width: Metrics.screenWidth * 0.76,
  },

  switchBtnContainer: {
    marginTop: Metrics.ratio(15),
    width: Metrics.screenWidth * 0.95,
  },
});

export default SwitchButton;
