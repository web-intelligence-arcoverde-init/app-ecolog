import React from 'react';

import {Typography} from '../Typography/Typography';
import Icon from 'react-native-vector-icons/AntDesign';
import {Container} from './style';

import {testId} from './testId';

interface ButtonProps {
  children: React.ReactNode;
  onPress?: () => void;
  color?: string;
  icon?: string;
  iconColor?: string;
  outlined?: boolean;
  background?: string;
}

export const Button = ({
  children,
  onPress,
  color,
  icon,
  iconColor,
  outlined,
  background,
}: ButtonProps) => {
  const renderIcon = iconColor && icon;

  return (
    <Container
      onPress={() => onPress}
      testID={testId.outlined_button}
      outlined={outlined}
      background={background}>
      {renderIcon && (
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
    </Container>
  );
};
