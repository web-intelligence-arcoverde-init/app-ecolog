import React from 'react';

import {Typography} from '../../';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Container} from './style';

import {testId} from './testId';

import {ButtonsType, COLORS} from '../../../common';

interface IconProps {
  icon?: any;
  iconColor?: string;
  leftIcon?: boolean;
  rightIcon?: boolean;
  iconName?: string;
  colorIcon?: string;
}

interface ButtonProps extends IconProps {
  children?: React.ReactNode;
  onPress?: any;
  color?: string;
  background?: string;
  variant?: string;
  disabled?: boolean;
  borderColor?: string;
}

export const Button = ({
  icon,
  iconName,
  colorIcon,
  children,
  leftIcon,
  rightIcon,
  disabled,
  variant = 'primary',
  onPress,
}: ButtonProps) => {
  const variantButton = disabled
    ? ButtonsType['disabled']
    : ButtonsType[variant];

  const colorIconVariant = colorIcon || variant.iconColor;

  const variantType = variant === 'disabled' ? true : false;

  console.log(variantButton.color);

  return (
    <Container
      disabled={variantType}
      onPress={() => onPress()}
      testID={testId.outlined_button}
      {...variantButton}>
      {leftIcon && (
        <CustomIcon
          iconName={iconName}
          iconColor={colorIconVariant}
          icon={icon}
        />
      )}
      <Typography variant="button" color={variantButton.color}>
        {children}
      </Typography>
      {rightIcon && (
        <CustomIcon
          iconName={iconName}
          iconColor={colorIconVariant}
          icon={icon}
        />
      )}
    </Container>
  );
};

const CustomIcon = ({icon, iconName, iconColor}: IconProps) => {
  if (icon) {
    return <>{icon}</>;
  }

  return <Icon name={iconName} size={24} color={COLORS[iconColor]} />;
};
