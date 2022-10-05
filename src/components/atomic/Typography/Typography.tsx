import styled from 'styled-components/native';
import {COLORS} from '../../../common/colors';
import React from 'react';
import {scale} from '../../../utils';

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

export const CustomText = styled.Text`
  font-size: ${({fontSize}) => (fontSize ? fontSize : '14')}px;
  color: ${({color}) => (color ? `${COLORS[color]}` : `${COLORS.black}`)};
  font-weight: ${({weight}) => (weight ? `${weight}` : 'normal')};
  font-family: 'Roboto';
`;

interface TypographyProps {
  children: React.ReactNode;
}

export const Typography = ({children}: TypographyProps) => {
  const typography = typographyTheme(14);
  return <CustomText {...typography}>{children}</CustomText>;
};
