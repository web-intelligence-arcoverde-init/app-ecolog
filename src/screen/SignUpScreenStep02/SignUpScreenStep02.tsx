import React from 'react';
import {View} from 'react-native';

import {
  FormContainer,
  Typography,
  Separator,
  Button,
  Input,
} from '../../components';

import {scale} from '../../utils';
import {useCustomNavigation} from '../../hooks/useNavigation';

export const SignUpScreenStep02 = () => {
  const {goTo, goBack} = useCustomNavigation();

  return (
    <FormContainer>
      <View style={{paddingHorizontal: scale(24)}}>
        <Separator height={56} />
        <Typography>Precisamos de algumas informações suas</Typography>
        <Separator height={8} />
        <Typography variant="legend">
          use isso para fazer login para criar uma conta
        </Typography>

        <Separator height={16} />
        <Input
          label="Email"
          placeholder="ex: nome@email.com"
          onChangeText={() => console.log('text')}
        />
        <Separator height={32} />

        <Input
          label="Senha"
          placeholder="ex: *****"
          onChangeText={() => console.log('text')}
        />
        <Separator height={32} />

        <Input
          label="Confirmação de senha"
          placeholder="ex: *****"
          onChangeText={() => console.log('text')}
        />
        <Separator height={32} />

        <Button color="white-100" onPress={() => goTo('MapScreen')}>
          Criar conta
        </Button>

        <Separator height={16} />

        <Button color="error-100" onPress={() => goBack()}>
          Voltar
        </Button>
      </View>
    </FormContainer>
  );
};
