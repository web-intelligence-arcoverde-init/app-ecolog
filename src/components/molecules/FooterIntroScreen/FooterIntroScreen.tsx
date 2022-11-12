import React from 'react';

import {StyledContainer, Button} from '../..';
import {useCustomNavigation} from '../../../hooks';

export const FooterIntroScreen = () => {
  const {goTo} = useCustomNavigation();

  return (
    <StyledContainer align="center" height={1} width={50}>
      <Button
        variant="iconTransparent"
        background="green-200"
        iconName="arrow-right"
        leftIcon
        onPress={() => goTo('OptionLoginScreen')}
      />
    </StyledContainer>
  );
};
