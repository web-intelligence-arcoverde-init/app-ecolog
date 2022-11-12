import React from 'react';

import {Button} from '../..';
import {useCustomNavigation} from '../../../hooks';

export const FooterIntroScreen = () => {
  const {goTo} = useCustomNavigation();

  return (
    <Button
      variant="iconTransparent"
      background="green-200"
      iconName="arrow-right"
      leftIcon
      onPress={() => goTo('SignInScreen')}
    />
  );
};
