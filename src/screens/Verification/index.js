import React, {useState, useRef, useEffect} from 'react';
import {
  I18nManager,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
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
import moment from 'moment';
import {verificationEmail} from '../../configs/Constants';

const Verification = () => {
  const scrollViewRef = useRef(null);
  const CELL_COUNT = 6;
  const [value, setValue] = useState();
  const codeFieldRef = useBlurOnFulfill({value, cellCount: CELL_COUNT});
  const [codeFieldProps, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });
  const [countdown, setCountdown] = useState(90);

  useEffect(() => {
    const timer = setInterval(() => {
      if (countdown > 0) {
        setCountdown(countdown - 1);
      } else {
        clearInterval(timer);
      }
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, [countdown]);

  const handleResetCountdown = () => {
    setCountdown(90);
  };

  const renderInputFields = () => {
    const minutes = Math.floor(countdown / 60);
    const seconds = countdown % 60;
    const formattedTime = moment({minutes, seconds}).format('m:ss');
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
            return <View style={styles.defaultCellContainer}></View>;
          }}
        />

        {
          countdown > 0 && <View style={styles.timerView}>
          <Text style={styles.timerStyle}>{formattedTime}</Text>
        </View>
        }
     
        <View style={styles.descriptionContainer}>
          <Text style={styles.sentVerificationTextStyle}>
            {en.verificationScreen.sentDesc}{' '}
            <Text style={styles.emailText}>{verificationEmail}.</Text>{' '}
            {en.verificationScreen.checkInbox}
          </Text>
        </View>

        <TouchableOpacity
          onPress={handleResetCountdown}
          style={styles.didNotReceiveBtn}
          activeOpacity={1}>
          <Text style={styles.didNotReceiveText}>
            {en.verificationScreen.didNotReceive}
          </Text>
        </TouchableOpacity>

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
