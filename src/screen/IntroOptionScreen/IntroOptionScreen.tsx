import React, {useEffect} from 'react';
import {Container, Button} from '../../components';

import StepUsers3 from '../../assets/images/users.svg';
import OrnamentsImage from '../../assets/images/ornaments-step03.svg';
import Ecolog from '../../assets/images/ecolog.svg';
import {scale} from '../../utils';
import {ImageBackground} from 'react-native';

import waveImageBackground from '../../assets/images/background-image.png';

import {Separator} from '../../components/atomic/Separator/Separator';

import {getUserLocation} from '../../hooks/useLocationUser';

export const IntroOptionScreen = ({navigation}) => {
  const {getCurrentPosition} = getUserLocation();

  useEffect(() => {
    getCurrentPosition();
  }, []);

  const onChangeRoute = (goTo: string) => {
    navigation.navigate(goTo);
  };

  return (
    <Container padding={24} align="center" justify="flex-end">
      <HeaderIntroScreen />
      <Separator height={80} />
      <Button color="white-100" onPress={() => onChangeRoute('SignInScreen')}>
        Entrar
      </Button>
      <Separator height={16} />
      <Button
        outlined
        color="gray-700"
        onPress={() => onChangeRoute('SignUpScreen')}>
        Criar conta
      </Button>
      <Separator height={30} />
    </Container>
  );
};

const HeaderIntroScreen = () => {
  return (
    <ImageBackground
      source={waveImageBackground}
      style={{
        position: 'absolute',
        height: scale(600),
        width: scale(600),
        top: scale(-208),
        left: scale(-100),
      }}>
      <OrnamentsImage
        style={{position: 'absolute', top: scale(250), left: scale(66)}}
      />

      <StepUsers3
        style={{position: 'absolute', top: scale(346), left: scale(130)}}
        width={340}
      />
      <Ecolog
        style={{
          position: 'absolute',
          top: scale(280),
          left: scale(110),
        }}
      />
    </ImageBackground>
  );
};
