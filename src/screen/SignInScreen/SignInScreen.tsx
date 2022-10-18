import {
  LayoutFormContainer,
  Typography,
  Input,
  Button,
  StyledContainer,
} from '../../components';

import {messages} from '../../utils';

import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';
import React, {useEffect} from 'react';

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
      <Input label="Email" />
      <Input label="Password" />
      <Button color="white" onPress={() => changeRoute('MapScreen')}>
        Entrar
      </Button>
    </LayoutFormContainer>
  );
};

/*



<Typography>Ecolog</Typography>

      <Typography variant="h2">Entrar</Typography>
      <View style={{marginTop: 20}} />
      <Input />
      <View style={{marginTop: 20}} />
      <Input />
      <View style={{marginTop: 20}} />
      <Button color="white" onPress={() => onChangeRoute('MapScreen')}>
        Entrar
      </Button>

      <TouchableOpacity>
        <GoogleIcon style={{height: 48}} />
      </TouchableOpacity>

      <TouchableOpacity>
        <FacebookIcon />
      </TouchableOpacity>


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
