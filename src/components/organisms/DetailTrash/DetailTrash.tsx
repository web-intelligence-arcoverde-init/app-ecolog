import React from 'react';

import {View} from 'react-native';
import {Typography} from '../../';

import {TrashType} from '../../../assets/icons';

import {TrashContainerType} from '../TrashContainerType/TrashContainerType';

export const DetailTrash = () => {
  return (
    <View style={{alignContent: 'center', padding: 24}}>
      <View style={{marginTop: 38}} />

      <Typography variant="h2">Escolha um item</Typography>

      <Typography variant="button">
        Selecione um dos items para reciclagem
      </Typography>

      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
          marginTop: 48,
        }}>
        <TrashContainerType source={TrashType.plastic} label="Plastico" />
        <TrashContainerType source={TrashType.cloth} label="Tecido" />
        <TrashContainerType source={TrashType.eletronic} label="Eletronico" />
        <TrashContainerType source={TrashType.glass} label="Vidro" />
        <TrashContainerType source={TrashType.metals} label="Metal" />
        <TrashContainerType source={TrashType.paper} label="Papel" />
      </View>
    </View>
  );
};
