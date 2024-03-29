import {FONTS} from './fonts';

import {scale} from '../utils';

export const FONT_SIZE_TEXT_BUTTON = scale(12);
export const LINE_HEIGHT_TEXT_BUTTON = scale(16);

export const TypographyStyle = {
  h1: {
    fontSize: scale(24),
    fontWight: 700,
    lineHeight: scale(24),
    fontFamily: FONTS.bold,
  },

  h2: {
    fontSize: scale(18),
    fontWight: scale(700),
    lineHeight: scale(25),
    fontFamily: FONTS.bold,
  },
  h3: {
    fontSize: scale(14),
    fontWight: scale(500),
    lineHeight: scale(18),
    fontFamily: FONTS.bold,
  },

  h4: {
    fontSize: scale(14),
    fontWight: scale(500),
    lineHeight: scale(18),
    fontFamily: FONTS.bold,
  },

  body: {
    fontSize: scale(14),
    fontWight: scale(400),
    lineHeight: scale(18),
    fontFamily: FONTS.regular,
  },

  legend: {
    fontSize: scale(12),
    fontWight: scale(400),
    lineHeight: scale(22),
    fontFamily: FONTS.regular,
  },

  button: {
    fontSize: scale(FONT_SIZE_TEXT_BUTTON),
    fontWight: scale(500),
    lineHeight: scale(LINE_HEIGHT_TEXT_BUTTON),
    fontFamily: FONTS.bold,
  },
};
