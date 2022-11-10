import React from 'react';

import {CustomText as Text} from './style';
import {TypographyStyle} from '../../../common/';

interface TypographyThemeProps {
  fontSize?: number;
  lineHeight?: number;
  color?: string;
  weight?: string | number;
  fontFamily?: string;
  textAlign?: string;
}

type typographyStyleType = typeof TypographyStyle;

interface TypographyProps extends TypographyThemeProps {
  children: React.ReactNode;
  variant?: keyof typographyStyleType;
}

export const Typography = ({
  children,
  color,
  variant = 'h1',
  textAlign,
}: TypographyProps) => {
  const variantTypography = TypographyStyle[variant];
  return (
    <Text {...variantTypography} color={color} textAlign={textAlign}>
      {children}
    </Text>
  );
};
