import React from 'react';
import {Platform} from 'react-native';
import MapView, {PROVIDER_DEFAULT, PROVIDER_GOOGLE} from 'react-native-maps';
import {useAppDispatch, useAppSelector} from '../../../hooks/useReduxHooks';
import {
  changeVisibilityButtonAddNewPointCollect,
  createNewPointRequest,
} from '../../../store/reducer/pointCollectRecycling';
import {PointCollectList} from '../PointCollectList/PointCollectList';

export const MapContainer = ({openBottomSheetInformationPointCollect}: any) => {
  const {coordinate} = useAppSelector(state => state.user);

  const defaultProvider =
    Platform.OS === 'ios' ? PROVIDER_DEFAULT : PROVIDER_GOOGLE;

  const {visibleButtonAddNewPointCollect, point} = useAppSelector(
    state => state.pointCollectRecycling,
  );

  const dispatch = useAppDispatch();

  const addNewMarker = (location: any) => {
    if (visibleButtonAddNewPointCollect) {
      return;
    } else {
      const newPoint = {
        ...point,
        location,
      };

      dispatch(createNewPointRequest(newPoint));

      dispatch(changeVisibilityButtonAddNewPointCollect());
    }
  };

  return (
    <MapView
      showsUserLocation
      provider={defaultProvider}
      style={{flex: 1}}
      onPress={e => {
        !visibleButtonAddNewPointCollect &&
          addNewMarker(e.nativeEvent.coordinate);
      }}
      initialRegion={coordinate}>
      <PointCollectList
        openBottomSheetInformationPointCollect={
          openBottomSheetInformationPointCollect
        }
      />
    </MapView>
  );
};
