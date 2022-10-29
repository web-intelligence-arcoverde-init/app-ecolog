import React from 'react';
import {View} from 'react-native';

import {
  FormContainer,
  Typography,
  CustomButton,
  Separator,
  Button,
} from '../../components';

import FacebookIcon from '../../assets/images/facebook.svg';
import GoogleIcon from '../../assets/images/google.svg';

import {scale} from '../../utils';
import {useCustomNavigation} from '../../hooks/useNavigation';

export const SignUpScreen = () => {
  const {goTo} = useCustomNavigation();

  return (
    <FormContainer>
      <View style={{paddingHorizontal: scale(24)}}>
        <Separator height={56} />
        <Typography>Vamos começar</Typography>
        <Separator height={8} />
        <Typography variant="legend">faça login com</Typography>

        <Separator height={24} />
        <CustomButton icon={<FacebookIcon />} message="Entre com o Facebook" />
        <Separator height={16} />
        <CustomButton icon={<GoogleIcon />} message="Entre com o Google" />

        <Separator height={16} />

        <View
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
          }}>
          <Typography variant="legend" color="gray-700">
            ou
          </Typography>
        </View>

        <Separator height={16} />

        <Button color="white-100" onPress={() => goTo('SignUpScreenStep01')}>
          Crie sua conta
        </Button>

        <Separator height={16} />

        <Button
          outlined
          color="error-100"
          onPress={() => goTo('IntroOptionScreen')}>
          Voltar
        </Button>
      </View>
    </FormContainer>
  );
};
