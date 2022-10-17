import React from 'react';

import {View} from 'react-native';
import {Typography, Input} from '../../';

export const DetailRecycle = () => {
  return (
    <View style={{marginTop: 38, padding: 24}}>
      <Typography variant="h2">Precisamos de mais informações</Typography>
      <Typography variant="button">Precisamos de informações</Typography>

      <View style={{marginTop: 38}} />

      <Input label="Contato" multiline={false} />

      <View style={{marginTop: 22}} />

      <Input label="Detalhes sobre" multiline={true} />
    </View>
  );
};
