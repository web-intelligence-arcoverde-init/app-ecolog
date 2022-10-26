import React from 'react';
import {TouchableOpacity, Image} from 'react-native';

import {useAppDispatch, useAppSelector} from '../../../hooks/useReduxHooks';
import {addPointCollectType} from '../../../store/reducer/pointCollectRecycling';
import {Typography} from '../../';

export const TrashContainerType = ({item}: any) => {
  const dispatch = useAppDispatch();

  const pointCollectTypeId = useAppSelector(
    state => state.pointCollectRecycling.point?.type?.id,
  );

  return (
    <TouchableOpacity
      onPress={() => dispatch(addPointCollectType(item))}
      style={{
        backgroundColor: pointCollectTypeId === item.id ? '#2aa964' : 'white',
        borderRadius: 6,
        borderWidth: pointCollectTypeId === item.id ? 1 : 0,
        borderColor: pointCollectTypeId === item.id ? '#a9dcc1' : '#000',
        shadowColor: pointCollectTypeId === item.id ? '#a9dcc1' : '#000',
        height: 100,
        width: 100,
        shadowOffset: {
          width: 0,
          height: -0,
        },
        shadowOpacity: 0.20000000149011612,
        shadowRadius: 1,
        marginBottom: 20,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Image source={item.icon} style={{width: 48, height: 48}} />
      <Typography variant="legend" color="black-300">
        {item.name}
      </Typography>
    </TouchableOpacity>
  );
};
