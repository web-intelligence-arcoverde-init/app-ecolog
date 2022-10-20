import React, {useCallback, useRef} from 'react';

import {useAppSelector} from '../../hooks/useReduxHooks';

import BottomSheet from '@gorhom/bottom-sheet';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

import {
  MapContainer,
  ContainerAddNewPointCollect,
  BottomSheetPointCollectInformation,
} from '../../components/index';

export const MapScreen = () => {
  const {visibleButtonAddNewPointCollect} = useAppSelector(
    state => state.pointCollectRecycling,
  );

  const bottomSheetRef = useRef<BottomSheet>(null);

  const openBottomSheetInformationPointCollect = useCallback(index => {
    bottomSheetRef.current?.snapToIndex(index);
  }, []);

  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <MapContainer
        openBottomSheetInformationPointCollect={
          openBottomSheetInformationPointCollect
        }
      />

      {visibleButtonAddNewPointCollect && <ContainerAddNewPointCollect />}

      <BottomSheetPointCollectInformation bottomSheetRef={bottomSheetRef} />
    </GestureHandlerRootView>
  );
};
