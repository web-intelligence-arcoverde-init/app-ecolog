import {
  LayoutFormContainer,
  Typography,
  Input,
  Button,
  StyledContainer,
} from '../../components';

import {ImageBackground} from 'react-native';

import {messages, scale} from '../../utils';

import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';
import React, {useEffect} from 'react';
import Step3 from '../../assets/images/background-image.png';
import Ecolog from '../../assets/images/ecolog.svg';

import FacebookIcon from '../../assets/images/facebook.svg';

import GoogleIcon from '../../assets/images/google.svg';
import {View} from 'react-native';

const schema = yup
  .object({
    email: yup.string().email(messages.email).required(messages.required),
    password: yup
      .string()
      .min(6, messages.min6)
      .max(20, messages.max20)
      .required(messages.required),
  })
  .required();

export const SignInScreen = () => {
  const {setValue, handleSubmit, errors, register} = useForm({
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    register('email');
    register('password');
  }, [register]);

  return (
    <LayoutFormContainer>
      <ImageBackground
        source={Step3}
        resizeMode="cover"
        style={{
          position: 'absolute',
          height: 600,
          width: 600,
          top: -300,
          left: -100,
        }}
      />
      <StyledContainer color="transparent">
        <Typography>Ecolog</Typography>
      </StyledContainer>
    </LayoutFormContainer>
  );
};

/*



  <Button color="white">Entrar</Button>

        <Typography variant="body1">Ou conecte com</Typography>
        <View style={{display: 'flex', flexDirection: 'row'}}>
          <FacebookIcon />
          <Typography variant="body1">Conecte-se com o facebook</Typography>
        </View>
        <View style={{display: 'flex', flexDirection: 'row'}}>
          <GoogleIcon />
          <Typography variant="body1">Conecte-se com o google</Typography>
        </View>

        <StyledContainer height={4} align="center" justify="center">
          <Typography variant="button">
            Esqueceu a senha? Recuperar senha
          </Typography>
          <Typography variant="button">Criar uma nova conta</Typography>
        </StyledContainer>
        
        <Input />
        


*/
