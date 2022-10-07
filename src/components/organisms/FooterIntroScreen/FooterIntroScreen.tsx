import React from 'react';

import {StyledContainer} from '../../atomic/Container';
import {Button} from '../../atomic/Button/Button';

export const FooterIntroScreen = () => {
  return (
    <StyledContainer
      direction="row"
      align="center"
      justify="space-around"
      height="20">
      <StyledContainer width="45">
        <Button outlined>Pular</Button>
      </StyledContainer>
      <StyledContainer width="45">
        <Button color={'white'}>Proximo</Button>
      </StyledContainer>
    </StyledContainer>
  );
};
