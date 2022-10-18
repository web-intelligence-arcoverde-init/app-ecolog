import React from 'react';

import {Typography} from '../../';
import Icon from 'react-native-vector-icons/AntDesign';
import {Container} from './style';

import {testId} from './testId';

interface ButtonProps {
  children?: React.ReactNode;
  onPress?: any;
  color?: string;
  icon?: string;
  iconColor?: string;
  outlined?: boolean;
  background?: string;
  leftIcon?: boolean;
  rightIcon?: boolean;
}

export const Button = ({
  children,
  onPress,
  color,
  icon,
  iconColor,
  outlined,
  background,
  leftIcon,
  rightIcon,
}: ButtonProps) => {
  const renderIcon = iconColor && icon;
  const renderLeft = renderIcon && leftIcon;
  const renderRight = renderIcon && rightIcon;

  return (
    <Container
      onPress={() => onPress()}
      testID={testId.outlined_button}
      outlined={outlined}
      background={background}>
      {renderLeft && (
        <Icon
          testID={testId.icon_outlined_button}
          name={icon}
          size={18}
          color={iconColor}
        />
      )}
      <Typography color={color} variant="button">
        {children}
      </Typography>

      {renderRight && (
        <Icon
          testID={testId.icon_outlined_button}
          name={icon}
          size={18}
          color={iconColor}
        />
      )}
    </Container>
  );
};
