import React from 'react';

import {View} from 'react-native';

import {mockTypeRecyclePoint} from '../../../mock';

import {RecyclingItemType} from '../RecyclingItemType/RecyclingItemType';

export const ListItemsRecycleItemType = () => {
  return (
    <View
      style={{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
      }}>
      {mockTypeRecyclePoint.map(item => (
        <RecyclingItemType item={item} />
      ))}
    </View>
  );
};
