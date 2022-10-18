import {
  LayoutFormContainer,
  Typography,
  Input,
  Button,
  Separator,
  StyledContainer,
} from '../../components';

import {messages} from '../../utils';

import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';
import React, {useEffect} from 'react';

import {View, ImageBackground} from 'react-native';
import Step3 from '../../assets/images/background-image.png';
import Ecolog from '../../assets/images/ecolog.svg';
import Background from '../../assets/images/people.png';

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
      <Separator height={56} />

      <StyledContainer justify="center" padding={24}>
        <ImageBackground
          source={Step3}
          resizeMode="cover"
          style={{
            position: 'absolute',
            height: 600,
            width: 600,
            top: -210,
            left: -100,
          }}
        />

        <ImageBackground
          source={Background}
          resizeMode="cover"
          style={{
            position: 'absolute',
            height: 180,
            width: 300,
            top: -10,
            left: 40,
            opacity: 0.6,
          }}
        />

        <Separator height={114} />
        <Input label="Email" placeholder="example@gmail.com" />
        <Separator height={16} />
        <Input label="Senha" placeholder="******" />
        <Separator height={8} />
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'flex-end',
            width: '100%',
          }}>
          <Typography variant="legend" color="gray-600">
            Recuperar senha
          </Typography>
        </View>
        <Separator height={16} />
        <Button color="white" onPress={() => changeRoute('MapScreen')}>
          Entrar
        </Button>
      </StyledContainer>
    </LayoutFormContainer>
  );
};

/*


<ImageBackground
          source={Logo}
          resizeMode="cover"
          style={{
            position: 'absolute',
            height: 180,
            width: 300,
            top: -12,
            left: 60,
          }}
        />

        


*/
