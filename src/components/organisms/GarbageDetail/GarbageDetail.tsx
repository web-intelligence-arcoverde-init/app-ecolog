import React from 'react';

import {View} from 'react-native';
import {Separator} from '../..';

import {scale} from '../../../utils';

import {ListItemsRecycleItemType} from '../ListItemsRecycleItemType/ListItemsRecycleItemType';
import {LayoutHeaderStepCreateCollectPoint} from '../LayoutHeaderStepCreateCollectPoint/LayoutHeaderStepCreateCollectPoint';

export const GarbageDetail = () => {
  return (
    <View style={{alignContent: 'center', padding: scale(24)}}>
      <LayoutHeaderStepCreateCollectPoint
        title="Escolha um item"
        description="Selecione um dos items para reciclagem"
      />

      <Separator height={16} />

      <ListItemsRecycleItemType />
    </View>
  );
};
