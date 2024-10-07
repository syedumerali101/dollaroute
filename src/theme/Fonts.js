// @flow
// Android
// title 20
// Heading 16
// desc 14

// ios
// title 20
// Heading 20
// desc 17

import Metrics from "./Metrics";

const type = {
  fBase: "SFProDisplay-Regular",
  fMedium: "SFProDisplay-Medium",
  fRegular: "SFProDisplay-Regular",
  fSemiBold: "SFProDisplay-SemiBoldItalic",
  fBold: "SFProDisplay-Bold",
  fLight: "SFProDisplay-LightItalic",
  AvenirNextBold: "AvenirNext-Bold",
  AvenirNextDemiBold: "AvenirNext-DemiBold",
  AvenirNextMedium: "AvenirNext-Medium",
  AvenirNextRegular: "AvenirNext-Regular",
  AvenirNextHeavy: "AvenirNext-Heavy",
  CircularStdBook: "CircularStd-Book",
  fontawesomewebfont: "fontawesome-webfont",
};

const size = {
  tiny: Metrics.generatedFontSize(8),
  nine: Metrics.generatedFontSize(9),
  ten: Metrics.generatedFontSize(10),
  xxxSmall: Metrics.generatedFontSize(11),
  xxSmall: Metrics.generatedFontSize(12),
  twelve: Metrics.generatedFontSize(12),
  thirteen: Metrics.generatedFontSize(13),
  fourteen: Metrics.generatedFontSize(14),
  xSmall: Metrics.generatedFontSize(14),
  small: Metrics.generatedFontSize(15),
  fifteen: Metrics.generatedFontSize(15.11),
  sixteen: Metrics.generatedFontSize(16),
  medium: Metrics.generatedFontSize(16),
  normal: Metrics.generatedFontSize(17),
  eighteen: Metrics.generatedFontSize(18),
  nighteen: Metrics.generatedFontSize(19),
  large: Metrics.generatedFontSize(20),
  xLarge: Metrics.generatedFontSize(25),
  xxLarge: Metrics.generatedFontSize(30),
  xxxLarge: Metrics.generatedFontSize(36),
  xxxxLarge: Metrics.generatedFontSize(50),
};

export default {
  type,
  size,
};
