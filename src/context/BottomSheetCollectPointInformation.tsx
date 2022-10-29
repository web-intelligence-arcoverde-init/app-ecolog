import React, {useRef, useCallback} from 'react';

export const BottomSheetContext = React.createContext<any>(null);

import BottomSheet from '@gorhom/bottom-sheet';
import {selectedPointCollect} from '../store/reducer/pointCollectRecycling';
import {useAppDispatch} from '../hooks/useReduxHooks';

export const BottomSheetContextContainer = ({children}: any) => {
  const bottomSheetRef = useRef<BottomSheet>(null);
  const dispatch = useAppDispatch();

  const openBottomSheetInformationPointCollect = useCallback(
    (index: any, pointCollect: any) => {
      bottomSheetRef.current?.snapToIndex(index);
      dispatch(selectedPointCollect(pointCollect));
    },
    [],
  );

  return (
    <BottomSheetContext.Provider
      value={{bottomSheetRef, openBottomSheetInformationPointCollect}}>
      {children}
    </BottomSheetContext.Provider>
  );
};
