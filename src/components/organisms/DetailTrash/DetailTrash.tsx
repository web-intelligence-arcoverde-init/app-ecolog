import React from 'react';

import {View} from 'react-native';
import {Typography, Separator} from '../../';

import {TrashType} from '../../../assets/icons';

import {TrashContainerType} from '../TrashContainerType/TrashContainerType';
import {scale} from '../../../utils';

export const DetailTrash = () => {
  return (
    <View style={{alignContent: 'center', padding: scale(18)}}>
      <Separator height={16} />

      <Typography color="black-200">Escolha um item</Typography>
      <Separator height={8} />

      <Typography color="black-200" variant="body">
        Selecione um dos items para reciclagem
      </Typography>

      <Separator height={16} />

      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
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
