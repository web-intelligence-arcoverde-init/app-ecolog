import {COLORS} from '../../../common/colors';
import React from 'react';
import {scale} from '../../../utils';

import {CustomText as Text} from './style';

interface TypographyThemeProps {
  fontSize: number;
  fontColor?: string;
}

const typographyTheme = (
  fontSize: number,
  fontColor?: string,
): TypographyThemeProps => {
  return {
    fontSize: scale(fontSize),
    fontColor: fontColor ? COLORS[fontColor] : COLORS.black,
  };
};

interface ColorProps {
  black: string;
  white: string;
  gray: string;
  green: string;
  silver: string;
  secondaryGray: string;
  error: string;
}

interface TypographyProps {
  children: React.ReactNode;
  color?: ColorProps;
  fontSize?: number;
  lineHeight?: number;
  weight?: string | number;
}

export const Typography = ({children}: TypographyProps) => {
  const typographyStyle = typographyTheme(14);
  return <Text {...typographyStyle}>{children}</Text>;
};
