import React from 'react';

import {PointCollect} from '../PointCollect/PointCollect';
import {useAppSelector} from '../../../hooks/useReduxHooks';

export const PointCollectList = () => {
  const {points} = useAppSelector(state => state.pointCollectRecycling);

  console.log(points);

  return (
    <>
      {points.map((marker: any) => (
        <PointCollect key={marker.id} marker={marker} />
      ))}
    </>
  );
};
