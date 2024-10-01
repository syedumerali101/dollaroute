import React, {useState, useImperativeHandle, useRef} from 'react';
import {View, TextInput, Image, TouchableOpacity} from 'react-native';
import styles from './styles';
import {Colors, Metrics} from '../../../theme';
import Images from '../../../theme/Images';

const AuthTextInput = props => {
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
      style={[focus ? styles.customStyle : styles.textInputView, props.style]}>
      <View style={styles.emailIconView}></View>
      <TextInput
        ref={inputRef}
        value={props.value}
        onChangeText={props.onChangeText}
        style={styles.textInputStyle}
        placeholder={props.placeHolder}
        placeholderTextColor={'red'}
        secureTextEntry={props.type && showEye ? true : false}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        {...props}
        keyboardType={props.keyboardType}
      />
      {props.type === 'password' ? (
        <TouchableOpacity
          style={{width: '5%', justifyContent: 'center', alignItems: 'center'}}
          onPress={() => setShowEye(!showEye)}>
          <Image
            source={Images.loginScreen.eye}
            style={{
              height: Metrics.ratio(5),
              width: Metrics.ratio(5),
              marginRight: Metrics.ratio(10),
              resizeMode: 'contain',
              tintColor: !showEye
                ? Colors.lightMode.black1
                : Colors.lightMode.grey,
            }}
          />
        </TouchableOpacity>
      ) : null}
    </View>
  );
};

export default AuthTextInput;
