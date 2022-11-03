import React from 'react';

import {changeVisibilityButtonAddNewPointCollect} from '../../../store/reducer/pointCollectRecycling';

import {useAppDispatch} from '../../../hooks/useReduxHooks';
import {useNavigation} from '@react-navigation/core';

import {scale, getPlatform} from '../../../utils';

import {View} from 'react-native';
import {Button} from '../../';

export const ContainerAddNewPointCollect = () => {
  const dispatch = useAppDispatch();
  const navigation = useNavigation();

  const onChangeVisibilityButtonAddPointCollect = () => {
    dispatch(changeVisibilityButtonAddNewPointCollect());
    navigation.navigate('CreatePointColletScreen');
  };

  return (
    <View
      style={{
        position: 'absolute',
        bottom: getPlatform() === 'ios' ? scale(60) : scale(30),
        right: scale(12),
        width: scale(50),
      }}>
      <Button
        variant="primary"
        onPress={() => {
          onChangeVisibilityButtonAddPointCollect();
        }}
      />
    </View>
  );
};
