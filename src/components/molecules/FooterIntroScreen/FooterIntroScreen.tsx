import React from 'react';

import {Button} from '../..';
import {useCustomNavigation} from '../../../hooks';

export const FooterIntroScreen = () => {
  const {goTo} = useCustomNavigation();

  return (
    <Button
      variant="iconTransparent"
      iconName="arrow-right"
      leftIcon
      onPress={() => goTo('OptionLoginScreen')}
    />
  );
};
