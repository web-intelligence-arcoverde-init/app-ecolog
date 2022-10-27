import {Image} from 'react-native';
import {Marker} from 'react-native-maps';

import {MarkerPointCollect} from '../../../assets';
import {scale} from '../../../utils';

export const PointCollect = ({
  marker,
  openBottomSheetInformationPointCollect,
}: any) => {
  console.log(marker);
  return (
    <Marker
      key={marker.key}
      coordinate={marker.location}
      onPress={() => openBottomSheetInformationPointCollect(0)}>
      <Image
        source={MarkerPointCollect[marker.type.name]}
        style={{
          height: scale(38),
          width: scale(38),
        }}
      />
    </Marker>
  );
};
