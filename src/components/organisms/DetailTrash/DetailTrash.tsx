import React from 'react';

import {View} from 'react-native';
import {Typography, Separator} from '../../';

import {TrashContainerType} from '../TrashContainerType/TrashContainerType';
import {scale} from '../../../utils';

import {mockTypeRecyclePoint} from '../../../mock';

export const DetailTrash = () => {
  return (
    <View style={{alignContent: 'center', padding: scale(24)}}>
      <Separator height={16} />

      <Typography color="black-200">Escolha um item</Typography>
      <Separator height={8} />

      <Typography color="black-200" variant="body">
        Selecione um dos items para reciclagem
      </Typography>

      <Separator height={24} />

      <ListRecycleItemType />
    </View>
  );
};

const ListRecycleItemType = () => {
  return (
    <View
      style={{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
      }}>
      {mockTypeRecyclePoint.map(item => (
        <TrashContainerType item={item} />
      ))}
    </View>
  );
};
