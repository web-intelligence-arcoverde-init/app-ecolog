import React from 'react';

import {StyledContainer} from '../../atomic/Container';
import {ButtonContainer} from '../../atomic/Button/Container/ContainerButton';
import {OutlineButton} from '../../atomic/Button/Outline/OutlineButton';

export const FooterIntroScreen = () => {
  return (
    <StyledContainer
      direction="row"
      align="center"
      justify="space-around"
      height="20">
      <StyledContainer width="40">
        <OutlineButton weight="bold">Pular</OutlineButton>
      </StyledContainer>
      <StyledContainer width="40">
        <ButtonContainer>Proximo</ButtonContainer>
      </StyledContainer>
    </StyledContainer>
  );
};
