import {
  LayoutFormContainer,
  Typography,
  Input,
  Button,
  Separator,
  StyledContainer,
} from '../../components';

import {messages, scale, getPlatform} from '../../utils';

import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';
import React, {useEffect} from 'react';

import {View, ImageBackground, TouchableOpacity} from 'react-native';
import Step3 from '../../assets/images/background-image.png';
import Background from '../../assets/images/people.png';

import FacebookIcon from '../../assets/images/facebook.svg';
import GoogleIcon from '../../assets/images/google.svg';

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

  const changeRoute = (router: string) => {
    navigation.navigate(router);
  };

  return (
    <LayoutFormContainer>
      <HeaderSignIn />

      {getPlatform() === 'ios' && <Separator height={54} />}

      <View
        style={{
          marginTop: getPlatform() === 'ios' ? scale(140) : scale(140),
          flex: 1,
          paddingHorizontal: scale(24),
          justifyContent: 'center',
        }}>
        <Input label="Email" placeholder="example@gmail.com" />
        <Separator height={22} />
        <Input label="Senha" placeholder="******" />
        <Separator height={8} />
        <RecoveryAccountContainer />

        <Separator height={16} />
        <Button color="white" onPress={() => changeRoute('MapScreen')}>
          Entrar
        </Button>

        <Separator height={8} />

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

        <Separator height={8} />
        <CustomInputIcon
          icon={<FacebookIcon />}
          message="Entre com o Facebook"
        />
        <Separator height={16} />
        <CustomInputIcon icon={<GoogleIcon />} message="Entre com o Google" />

        <SignUpContainer />
      </View>
    </LayoutFormContainer>
  );
};

const SignUpContainer = () => {
  return (
    <View
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        width: '100%',
        marginTop: scale(16),
      }}>
      <Typography variant="legend" color="gray-600">
        Não tem uma conta?
      </Typography>
      <TouchableOpacity onPress={() => {}} style={{marginLeft: 6}}>
        <Typography variant="legend" color="green-300">
          Inscrever-se
        </Typography>
      </TouchableOpacity>
    </View>
  );
};

const RecoveryAccountContainer = () => {
  return (
    <View
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        width: '100%',
      }}>
      <TouchableOpacity onPress={() => {}}>
        <Typography variant="legend" color="gray-600">
          Recuperar senha
        </Typography>
      </TouchableOpacity>
    </View>
  );
};

const CustomInputIcon = ({icon, message}: any) => {
  return (
    <TouchableOpacity
      onPress={() => {}}
      style={{
        flexDirection: 'row',
        backgroundColor: 'white',
        borderRadius: 6,
        borderWidth: 1,
        borderColor: '#d8d8dc',
        shadowColor: '#d8d8dc',
        height: scale(48),
        width: '100%',
        shadowOffset: {
          width: 0,
          height: -0,
        },
        shadowOpacity: 0.30000000149011612,
        shadowRadius: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      {icon}
      <Separator width={12} />
      <Typography variant="legend" color="gray-600">
        {message}
      </Typography>
    </TouchableOpacity>
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
    </ImageBackground>
  );
};
