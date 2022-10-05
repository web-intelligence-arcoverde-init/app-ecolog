import React from 'react';

import {StyledContainer} from '../../atomic/Container';
import ButtonContained from '../../atomic/Button/Contained/ContainerButton';
import ButtonOutlined from '../../atomic/Button/Outline/OutlineButton';

export const FooterIntroScreen = () => {
  return (
    <StyledContainer
      direction="row"
      align="center"
      justify="space-around"
      height="20">
      <StyledContainer width="40">
        <ButtonOutlined weight="bold">Pular</ButtonOutlined>
      </StyledContainer>
      <StyledContainer width="40">
        <ButtonContained>Proximo</ButtonContained>
      </StyledContainer>
    </StyledContainer>
  );
};
