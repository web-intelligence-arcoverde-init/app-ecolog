import {
  FormContainer,
  Typography,
  Input,
  Button,
  Separator,
  CustomButton,
} from '../../components';

import {messages, scale, getPlatform} from '../../utils';

import Ecolog from '../../assets/images/ecolog.png';

import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';
import React, {useEffect} from 'react';

import {View, ImageBackground, TouchableOpacity} from 'react-native';
import Step3 from '../../assets/images/background-image.png';
import Background from '../../assets/images/people.png';

import FacebookIcon from '../../assets/images/facebook.svg';
import GoogleIcon from '../../assets/images/google.svg';
import {useCustomNavigation} from '../../hooks/useNavigation';

const marginTop = getPlatform() === 'ios' ? 300 : 160;

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

export const SignInScreen = ({navigation}) => {
  const {setValue, handleSubmit, errors, register} = useForm({
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    register('email');
    register('password');
  }, [register]);

  const {goTo} = useCustomNavigation();

  return (
    <FormContainer>
      <HeaderSignIn />

      <View style={{padding: scale(24), marginTop}}>
        <Input placeholder="example@gmail.com" onChangeText={() => {}} />

        <Separator height={12} />

        <Input placeholder="******" onChangeText={() => {}} />

        <Button color="white-100" onPress={() => goTo('MapScreen')}>
          Entrar
        </Button>

        <Separator height={12} />

        <View
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
          }}>
          <Typography variant="legend" color="gray-700">
            Ou
          </Typography>
        </View>

        <Separator height={12} />

        <CustomButton icon={<FacebookIcon />} message="Entre com o Facebook" />
        <Separator height={12} />
        <CustomButton icon={<GoogleIcon />} message="Entre com o Google" />
      </View>
    </FormContainer>
  );
};

const SignUpContainer = () => {
  const {goTo} = useCustomNavigation();

  return (
    <View
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        width: '100%',
        marginTop: scale(16),
        marginBottom: scale(16),
      }}>
      <Typography variant="legend" color="gray-600">
        Não tem uma conta?
      </Typography>
      <TouchableOpacity
        onPress={() => goTo('SignUpScreen')}
        style={{marginLeft: 6}}>
        <Typography variant="legend" color="green-300">
          Inscrever-se
        </Typography>
      </TouchableOpacity>
    </View>
  );
};

const RecoveryAccountContainer = () => {
  const {goTo} = useCustomNavigation();
  return (
    <View
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        width: '100%',
      }}>
      <TouchableOpacity onPress={() => goTo('RecoveryAccountScreen')}>
        <Typography variant="legend" color="gray-600">
          Recuperar senha
        </Typography>
      </TouchableOpacity>
    </View>
  );
};

const HeaderSignIn = () => {
  return (
    <ImageBackground
      source={Step3}
      resizeMode="cover"
      style={{
        position: 'absolute',
        height: scale(600),
        width: scale(600),
        top: scale(-338),
        left: scale(-100),
      }}>
      <ImageBackground
        source={Background}
        resizeMode="cover"
        style={{
          position: 'absolute',
          height: scale(140),
          width: scale(190),
          top: getPlatform() === 'ios' ? scale(380) : scale(340),
          left: scale(158),
          opacity: 0.6,
        }}
      />

      <ImageBackground
        source={Ecolog}
        resizeMode="cover"
        style={{
          position: 'absolute',
          height: scale(80),
          width: scale(190),
          top: getPlatform() === 'ios' ? scale(490) : scale(380),
          left: scale(158),
        }}
      />
    </ImageBackground>
  );
};
