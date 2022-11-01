import React, {useEffect} from 'react';
import {
  Container,
  Button,
  HeaderOptionLoginScreen,
  Separator,
} from '../../components';

import {getUserLocation, useCustomNavigation} from '../../hooks/';

export const OptionLoginScreen = () => {
  const {getCurrentPosition} = getUserLocation();

  const {goTo} = useCustomNavigation();

  useEffect(() => {
    getCurrentPosition();
  }, []);

  return (
    <Container padding={24} align="center" justify="flex-end">
      <HeaderOptionLoginScreen />
      <Button onPress={() => goTo('SignInScreen')}>Entrar</Button>
      <Separator height={16} />
      <Button variant="tertiary" onPress={() => goTo('SignUpScreen')}>
        Criar conta
      </Button>
      <Separator height={30} />
    </Container>
  );
};
