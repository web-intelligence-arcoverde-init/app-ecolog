import {FONTS} from './';

import {scale} from '../utils';

export const FONT_SIZE_TEXT_BUTTON = scale(12);
export const LINE_HEIGHT_TEXT_BUTTON = scale(16);

export const TypographyStyle = {
  h1: {
    fontSize: scale(32),
    fontWight: 700,
    lineHeight: scale(40),
    fontFamily: FONTS.regular,
  },
  h2: {
    fontSize: scale(24),
    fontWight: scale(700),
    lineHeight: scale(25),
    fontFamily: FONTS.bold,
  },
  h3: {
    fontSize: scale(18),
    fontWight: scale(500),
    lineHeight: scale(18),
    fontFamily: FONTS.regular,
  },
  body1: {
    fontSize: scale(14),
    fontWight: scale(400),
    lineHeight: scale(22),
    fontFamily: FONTS.regular,
  },
  body2: {
    fontSize: scale(12),
    fontWight: scale(400),
    lineHeight: scale(19),
    fontFamily: FONTS.regular,
  },

  body3: {
    fontSize: scale(16),
    fontWight: scale(500),
    lineHeight: scale(16),
    fontFamily: FONTS.medium,
  },

  button: {
    fontSize: scale(FONT_SIZE_TEXT_BUTTON),
    fontWight: scale(500),
    lineHeight: scale(LINE_HEIGHT_TEXT_BUTTON),
    fontFamily: FONTS.bold,
  },
};
