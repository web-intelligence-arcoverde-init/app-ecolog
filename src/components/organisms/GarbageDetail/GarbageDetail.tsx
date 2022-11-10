import React from 'react';

import {View} from 'react-native';
import {Separator} from '../..';

import {scale} from '../../../utils';

import {ListItemsRecycleItemType} from '../ListItemsRecycleItemType/ListItemsRecycleItemType';
import {HeaderCreateCollectPoint} from '../../';

export const GarbageDetail = () => {
  return (
    <View style={{alignContent: 'center', padding: scale(24)}}>
      <HeaderCreateCollectPoint
        title="Escolha um item"
        description="Selecione o item que deseja reciclar"
      />

      <Separator height={16} />

      <ListItemsRecycleItemType />
    </View>
  );
};
