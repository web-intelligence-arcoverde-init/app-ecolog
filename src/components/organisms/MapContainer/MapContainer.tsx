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

  const {points, visibleButtonAddNewPointCollect} = useAppSelector(
    state => state.pointCollectRecycling,
  );

  const dispatch = useAppDispatch();

  const addNewMarker = (location: any) => {
    if (visibleButtonAddNewPointCollect) {
      return;
    } else {
      const items = [
        'empresa',
        'ferro',
        'organico',
        'papel',
        'plastico',
        'pontoColeta',
        'vidro',
      ];

      let type = items[Math.floor(Math.random() * items.length)];

      const user = {name: 'Lucas'};

      dispatch(
        createNewPointRequest({
          id: points.length,
          name: '',
          type,
          telphoneNumber: '87998093765',
          datails: 'details',
          location,
          status: 'Aguardando',
          user,
        }),
      );

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
