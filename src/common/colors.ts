import {Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

import {scale} from '../utils';

export const COLORS: {
  black: string;
  white: string;
  gray: string;
  green: string;
  silver: string;
  secondaryGray: string;
  error: string;
} = {
  black: '#1e1f20',
  white: '#ffffff',
  gray: '#6a6a6a',
  green: '#34cb79',
  silver: '#aaaeb3',
  secondaryGray: '#f0f0f5',
  error: '#e15848',
};

export const SIZES = {
  base: scale(10),
  font: scale(14),
  radius: 12,
  padding: scale(24),

  h1: scale(30),
  h2: scale(22),
  h3: scale(16),
  h4: scale(14),

  body1: scale(30),
  body2: scale(22),
  body3: scale(16),
  body4: scale(14),

  width,
  height,
};

export const FONTS = {
  h1: {fontFamily: 'Roboto-Black', fontSize: SIZES.h1, lineHeight: 36},
  h2: {fontFamily: 'Roboto-Bold', fontSize: SIZES.h2, lineHeight: 30},
  h3: {fontFamily: 'Roboto-Bold', fontSize: SIZES.h3, lineHeight: 22},
  h4: {fontFamily: 'Roboto-Bold', fontSize: SIZES.h4, lineHeight: 22},

  body1: {fontFamily: 'Roboto-Regular', fontSize: SIZES.body1, lineHeight: 22},
  body2: {fontFamily: 'Roboto-Bold', fontSize: SIZES.body2, lineHeight: 22},
  body3: {fontFamily: 'Roboto-Bold', fontSize: SIZES.body3, lineHeight: 22},
  body4: {fontFamily: 'Roboto-Bold', fontSize: SIZES.body4, lineHeight: 22},
};

const appTheme = {
  COLORS,
  SIZES,
  FONTS,
};

export default appTheme;
