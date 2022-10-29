import {Image} from 'react-native';
import {Marker} from 'react-native-maps';

import {MarkerPointCollect} from '../../../assets';
import {scale} from '../../../utils';

import {BottomSheetContext} from '../../../context/BottomSheetCollectPointInformation';
import React from 'react';

export const PointCollect = ({marker}: any) => {
  const {openBottomSheetInformationPointCollect} =
    React.useContext(BottomSheetContext);

  return (
    <Marker
      key={marker.key}
      coordinate={marker.location}
      onPress={() => openBottomSheetInformationPointCollect(0, marker)}>
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
