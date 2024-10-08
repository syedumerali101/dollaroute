import React, {useState, useImperativeHandle, useRef} from 'react';
import {View, TextInput, Image, TouchableOpacity} from 'react-native';
import {Colors, Metrics} from '../../../theme';
import Images from '../../../theme/Images';
import styles from './styles';

const SearchTextInput = props => {
  const [focus, setFocus] = useState(false);
  const [showEye, setShowEye] = useState(true);
  const inputRef = useRef(null);

  useImperativeHandle(props?.reference, () => ({
    focus: focused,
    blur: blur,
  }));
  const focused = () => {
    inputRef.current.focus();
  };
  const blur = () => {
    inputRef.current.blur();
  };
  return (
    <View
      style={[
        focus ? styles.customStyle : styles.textInputView,
        props.containerStyle,
      ]}>
      <View style={styles.leftView}>
        <Image style={styles.leftIconStyle} source={Images.common.search} />
      </View>

      <TextInput
        ref={inputRef}
        value={props.value}
        onChangeText={props.onChangeText}
        style={styles.textInputStyle}
        placeholder={props.placeHolder}
        placeholderTextColor={Colors.lightMode.grey7}
        secureTextEntry={props.type && showEye ? true : false}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        {...props}
        keyboardType={props.keyboardType}
      />

      <View style={styles.rightView}>
        <View style={styles.separatorStyle} />

        <View>
          <Image style={styles.rightIcon} source={Images.common.filters} />
        </View>
      </View>
    </View>
  );
};

export default SearchTextInput;
