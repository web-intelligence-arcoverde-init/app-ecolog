import React from 'react';

import {useAppDispatch, useAppSelector} from '../../../hooks/useReduxHooks';
import {addPointCollectType} from '../../../store/reducer/pointCollectRecycling';
import {Typography} from '../..';
import {Container, Icon} from './style';

export const RecyclingItemType = ({item}: any) => {
  const dispatch = useAppDispatch();

  const pointCollectTypeId = useAppSelector(
    state => state.pointCollectRecycling.point?.type?.id,
  );

  const selectedItem = pointCollectTypeId === item.id;

  return (
    <Container
      selected={selectedItem}
      onPress={() => dispatch(addPointCollectType(item))}>
      <Icon source={item.icon} />
      <Typography variant="legend" color="black-300">
        {item.name}
      </Typography>
    </Container>
  );
};
