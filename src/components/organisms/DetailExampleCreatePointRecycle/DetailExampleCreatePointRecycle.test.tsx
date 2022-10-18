import React from 'react';

import {View} from 'react-native';
import {Typography, Input} from '../..';

export const DetailRecycle = () => {
  return (
    <View>
      <Typography>Precisamos de mais informações</Typography>
      <Typography>Precisamos de informações</Typography>
      <Input label="Contato" multiline={false} />
      <Input label="Detalhes sobre" multiline={true} />
    </View>
  );
};
