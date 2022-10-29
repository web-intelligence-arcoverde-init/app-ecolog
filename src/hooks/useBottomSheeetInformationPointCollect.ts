import {useRef, useCallback} from 'react';
import BottomSheet from '@gorhom/bottom-sheet';
import {selectedPointCollect} from '../store/reducer/pointCollectRecycling';
import {useAppDispatch} from './useReduxHooks';

export const useBottomSheeetInformationPointCollect = () => {
  const bottomSheetRef = useRef<BottomSheet>(null);
  const dispatch = useAppDispatch();

  const openBottomSheetInformationPointCollect = useCallback(
    (index: any, pointCollect: any) => {
      bottomSheetRef.current?.snapToIndex(index);
      dispatch(selectedPointCollect(pointCollect));
    },
    [],
  );

  return {bottomSheetRef, openBottomSheetInformationPointCollect};
};
