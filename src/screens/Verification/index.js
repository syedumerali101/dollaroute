import React, {useState, useRef} from 'react';
import {I18nManager, ScrollView, Text, TextInput, View} from 'react-native';
import en from '../../translations/en.json';
import Header from '../../components/Header';
import styles from './styles';
import SubmitButton from '../../components/Buttons/SubmitButton';
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';

const Verification = () => {
  const scrollViewRef = useRef(null);
  const CELL_COUNT = 6;
  const [value, setValue] = useState();
  const codeFieldRef = useBlurOnFulfill({value, cellCount: CELL_COUNT});
  const [codeFieldProps, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });

  const renderInputFields = () => {
    return (
      <View style={styles.mainInputContainer}>
        <Text style={styles.headingTextStyle}>
          {en.verificationScreen.heading}
        </Text>

        <CodeField
          ref={codeFieldRef}
          {...codeFieldProps}
          value={value}
          onChangeText={setValue}
          cellCount={CELL_COUNT}
          rootStyle={[
            styles.codeFieldRoot,
            I18nManager.isRTL && {flexDirection: 'row-reverse'},
          ]}
          keyboardType="number-pad"
          textContentType="oneTimeCode"
          autoFocus
          selectTextOnFocus={true}
          onSubmitEditing={() => handleCodeVerification()}
          textInputStyle={{textAlign: 'left'}}
          renderCell={({index, symbol, isFocused}) => {
            if (symbol) {
              return (
                <View style={styles.containerCellView}>
                  <Text
                    allowFontScaling={false}
                    key={index}
                    style={[symbol && styles.focusCell]}
                    onLayout={getCellOnLayoutHandler(index)}>
                    {symbol || (isFocused ? <Cursor /> : null)}
                  </Text>
                </View>
              );
            }
            return <View style={styles.defaultCellContainer}></View>
          }}
        />

        <SubmitButton
          title={en.verificationScreen.submitBtnText}
          style={styles.submitButtonStyle}
        />
      </View>
    );
  };
  return (
    <ScrollView
      keyboardShouldPersistTaps="handled"
      showsVerticalScrollIndicator={false}
      ref={scrollViewRef}
      style={styles.mainScrollViewStyle}
      contentContainerStyle={styles.contentContainerStyle}>
      <Header title={en.navTitles.verification} />
      {renderInputFields()}
    </ScrollView>
  );
};

export default Verification;
