import React from 'react';

import {PointCollect} from '../PointCollect/PointCollect';
import {useAppSelector} from '../../../hooks/useReduxHooks';

export const PointCollectList = ({
  openBottomSheetInformationPointCollect,
}: any) => {
  const {points} = useAppSelector(state => state.pointCollectRecycling);

  return (
    <>
      {points.map((marker: any) => (
        <PointCollect
          marker={marker}
          openBottomSheetInformationPointCollect={
            openBottomSheetInformationPointCollect
          }
        />
      ))}
    </>
  );
};
