import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import SubmitButton from '../../components/Buttons/SubmitButton';
import {Colors, Metrics} from '../../theme';
import Images from '../../theme/Images';
import en from '../../translations/en.json';

const EmailSent = ({navigation}) => {
  return (
    <View style={styles.mainRender}>
      <View style={styles.imageView}>
        <Image
          style={styles.imageStyle}
          source={Images.emailSentScreen.emailSent}
        />
      </View>

      <View style={styles.textDetailsContainer}>
        <Text style={styles.headingStyle}>{en.emailSent.heading}</Text>
        <Text style={styles.descriptionStyle}>{en.emailSent.description}</Text>
      </View>

      <SubmitButton
        title={en.emailSent.submitBtnText}
        style={styles.submitButtonStyle}
        onPress={() => navigation.navigate('ResetPassword')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  mainRender: {
    flex: 1,
    backgroundColor: Colors.white,
    alignItems: 'center',
  },

  imageView: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: Metrics.ratio(30),
  },

  imageStyle: {
    resizeMode: 'contain',
    height: Metrics.screenHeight * 0.3,
    width: Metrics.screenWidth * 0.65,
  },

  textDetailsContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: Metrics.ratio(15),
  },

  headingStyle: {
    color: Colors.lightMode.black2,
    fontSize: Metrics.ratio(16),
    fontWeight: '600',
    textAlign: 'center',
  },

  descriptionStyle: {
    color: Colors.lightMode.black3,
    fontSize: Metrics.ratio(11),
    fontWeight: '500',
    textAlign: 'center',
    width: Metrics.screenWidth * 0.7,
    marginTop: Metrics.ratio(15),
  },

  submitButtonStyle: {
    width: Metrics.screenWidth * 0.9,
    marginTop: Metrics.screenHeight * 0.25,
  },
});

export default EmailSent;
