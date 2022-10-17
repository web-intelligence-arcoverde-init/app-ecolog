import React, {useEffect} from 'react';
import {Container, Button, StyledContainer} from '../../components';

import Step3 from '../../assets/images/background-top-step-03.svg';
import StepUsers3 from '../../assets/images/users.svg';
import StepOrnaments3 from '../../assets/images/ornaments-step03.svg';
import Ecolog from '../../assets/images/ecolog.svg';
import {scale} from '../../utils';
import {View} from 'react-native';

import {getUserLocation} from '../../hooks/useLocationUser';

export const IntroOptionScreen = ({navigation}) => {
  const {getCurrentPosition, position} = getUserLocation();

  useEffect(() => {
    getCurrentPosition();
  }, []);

  const onChangeRoute = (goTo: string) => {
    navigation.navigate(goTo);
  };

  console.log(position);

  return (
    <Container padding={16}>
      <Step3
        style={{position: 'relative', top: scale(-160), left: scale(-100)}}
      />
      <StepOrnaments3
        style={{position: 'absolute', top: scale(52), left: scale(-34)}}
      />
      <StepUsers3
        style={{position: 'absolute', top: scale(176), left: scale(24)}}
        width={340}
      />
      <Ecolog style={{position: 'absolute', top: scale(90), left: scale(24)}} />

      <View
        style={{
          width: '100%',
          position: 'absolute',
          bottom: scale(110),
          left: scale(12),
        }}>
        <StyledContainer>
          <Button color="white" onPress={() => onChangeRoute('SignInScreen')}>
            Entrar
          </Button>
          <View style={{marginTop: 20}} />
          <Button
            outlined
            color="green"
            onPress={() => onChangeRoute('SignUpScreen')}>
            Criar conta
          </Button>
        </StyledContainer>
      </View>
    </Container>
  );
};
