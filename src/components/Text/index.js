// @flow
import _ from 'lodash';
import React from 'react';
import {Text as TextRN, StyleSheet} from 'react-native';
import Fonts from '../../theme/Fonts';
import {Colors} from '../../theme';

const Text = (props) => {
  const {
    style,
    color,
    size,
    type,
    textAlign,
    children,
    alternate,
    orange,
    black,
    white,
    gray,
    ...rest
  } = props;

  let style2 = {};
  const textAlternateStyle = () => {
    return {textAlign: 'right'};
  };

  const textRtlStyling = () => {
    return {textAlign: 'left'};
  };

  if (alternate) {
    style2 = textAlign ? {textAlign} : textAlternateStyle();
  } else {
    style2 = textAlign ? {textAlign} : textRtlStyling();
  }

  const textColorOrange = Colors.lightMode.pink;
  const textColorBlack = color ? color : Colors.lightMode.black1;
  const textColorWhite = color ? color : Colors.lightMode.white;

  const appliedColor = orange
    ? textColorOrange
    : white
    ? textColorWhite
    : textColorBlack;

  const textStyle = StyleSheet.flatten([
    {
      textAlign,
      fontFamily: Fonts.type[type],
      fontSize: size in Fonts.size ? Fonts.size[size] : size,
      color: appliedColor,
    },
    style2,
    style,
  ]);

  return (
    <TextRN style={textStyle} {...rest}>
      {children}
    </TextRN>
  );
};

export default Text;
