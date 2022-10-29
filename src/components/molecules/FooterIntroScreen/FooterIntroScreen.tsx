import React from 'react';

import {StyledContainer, Button} from '../..';
import {useCustomNavigation} from '../../../hooks';

export const FooterIntroScreen = () => {
  const {goTo} = useCustomNavigation();

  return (
    <StyledContainer align="center" height={1} padding={16} width={26}>
      <Button
        color="gree"
        rightIcon
        icon="arrowright"
        iconColor="#fff"
        onPress={() => goTo('OptionLoginScreen')}
      />
    </StyledContainer>
  );
};
