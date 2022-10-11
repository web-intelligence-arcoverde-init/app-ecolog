import React from 'react';

import {StyledContainer} from '../../atomic/Container';
import {Button} from '../../atomic/Button/Button';

interface FooterIntroScreenProps {
  onPress?: () => void;
}

export const FooterIntroScreen = ({onPress}: FooterIntroScreenProps) => {
  return (
    <StyledContainer align="center" height="20" padding={16}>
      <StyledContainer width={20}>
        <Button
          outlined
          rightIcon
          icon="arrowright"
          iconColor="#000"
          onPress={onPress}
        />
      </StyledContainer>
    </StyledContainer>
  );
};
