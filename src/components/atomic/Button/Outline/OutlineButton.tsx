import React from 'react';

import {Typography} from '../../Typography/Typography';
import Icon from 'react-native-vector-icons/AntDesign';
import {Container} from './style';

interface OutlineButtonProps {
  children: React.ReactNode;
  onPress?: () => void;
  color?: string;
  icon?: string;
  iconColor?: string;
}

export const OutlineButton = ({
  children,
  onPress,
  color,
  icon,
  iconColor,
}: OutlineButtonProps) => {
  const renderIcon = iconColor && icon;

  return (
    <Container onPress={() => onPress}>
      {renderIcon && <Icon name={icon} size={18} color={iconColor} />}
      <Typography color={color} variant="button">
        {children}
      </Typography>
    </Container>
  );
};
