import React from 'react';
import {View} from 'react-native';
import {
  Container,
  Button,
  HeaderOptionLoginScreen,
  Separator,
  Typography,
} from '../../components';

import {getPlatform, scale} from '../../utils';

import {useCustomNavigation} from '../../hooks/';

import {HeaderOptionLoginScreenImages} from '../../assets';

const {Ecolog} = HeaderOptionLoginScreenImages;

const iosContainerStyle = {
  padding: scale(24),
  width: '100%',
  position: 'absolute',
  bottom: scale(100),
};

const androidContainerStyle = {
  padding: scale(24),
  width: '100%',
  position: 'absolute',
  bottom: scale(60),
};

const styleContainer =
  getPlatform() === 'ios' ? iosContainerStyle : androidContainerStyle;

const topStyleLogo = getPlatform() === 'ios' ? scale(100) : scale(40);

const containerLogo = {
  position: 'absolute',
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  top: topStyleLogo,
};

export const OptionLoginScreen = () => {
  const {goTo} = useCustomNavigation();

  return (
    <Container>
      <HeaderOptionLoginScreen />
      <View style={containerLogo}>
        <Ecolog />
      </View>

      <View style={styleContainer}>
        <Typography textAlign="center">Bem Vindo</Typography>
        <Typography variant="body" textAlign="center">
          Preocupe-se com a gestão de resíduos Preocupe-se com o futuro
        </Typography>
        <Separator height={12} />
        <Button onPress={() => goTo('SignInScreen')}>Entrar</Button>
        <Separator height={12} />
        <Button variant="tertiary" onPress={() => goTo('SignUpScreen')}>
          Criar conta
        </Button>
      </View>
    </Container>
  );
};
