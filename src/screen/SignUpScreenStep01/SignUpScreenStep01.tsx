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

export const SignUpScreenStep01 = () => {
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

        <Input label="Nome" placeholder="ex: José" />

        <Separator height={32} />

        <Input label="Sobrenome" placeholder="ex: Paes" />

        <Separator height={32} />
        <Button color="white-100" onPress={() => goTo('SignUpScreenStep02')}>
          Continuar
        </Button>

        <Separator height={16} />

        <Button outlined color="error-100" onPress={() => goBack()}>
          Voltar
        </Button>
      </View>
    </FormContainer>
  );
};
