import React from 'react';
import {Button, ButtonText} from './style';

export const ButtonContainer = ({children, onPress, background, disabled}) => {
  return (
    <Button
      onPress={() => onPress()}
      background={background}
      disabled={disabled}>
      <ButtonText>{children}</ButtonText>
    </Button>
  );
};
