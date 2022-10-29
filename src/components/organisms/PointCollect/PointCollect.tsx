import {Image} from 'react-native';
import {Marker} from 'react-native-maps';

import {MarkerPointCollect} from '../../../assets';
import {scale} from '../../../utils';

import {selectedPointCollect} from '../../../store/reducer/pointCollectRecycling';

import {useAppDispatch, useAppSelector} from '../../..//hooks/useReduxHooks';

export const PointCollect = ({
  marker,
  openBottomSheetInformationPointCollect,
}: any) => {
  const dispatch = useAppDispatch();
  const {pointSelected} = useAppSelector(state => state.pointCollectRecycling);

  const pointIsSelected = Object.keys(pointSelected).length === 0;

  const openBottomSheetInformationPoint = () => {
    dispatch(selectedPointCollect(marker));
    if (!pointIsSelected) {
      openBottomSheetInformationPointCollect(0);
    }
  };

  return (
    <Marker
      key={marker.key}
      coordinate={marker.location}
      onPress={() => openBottomSheetInformationPoint()}>
      <Image
        source={MarkerPointCollect[marker.type.value]}
        style={{
          height: scale(38),
          width: scale(38),
        }}
      />
    </Marker>
  );
};
