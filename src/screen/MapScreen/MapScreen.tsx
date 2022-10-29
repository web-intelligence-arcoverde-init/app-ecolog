import React from 'react';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

import {useAppSelector} from '../../hooks/useReduxHooks';
import {BottomSheetContextContainer} from '../../context/BottomSheetCollectPointInformation';

import {
  MapContainer,
  ContainerAddNewPointCollect,
  BottomSheetPointCollectInformation,
} from '../../components/index';

export const MapScreen = () => {
  const {visibleButtonAddNewPointCollect} = useAppSelector(
    state => state.pointCollectRecycling,
  );

  return (
    <BottomSheetContextContainer>
      <GestureHandlerRootView style={{flex: 1}}>
        <MapContainer />

        {visibleButtonAddNewPointCollect && <ContainerAddNewPointCollect />}

        <BottomSheetPointCollectInformation />
      </GestureHandlerRootView>
    </BottomSheetContextContainer>
  );
};
