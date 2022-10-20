import {Image} from 'react-native';
import {Marker} from 'react-native-maps';

import {MakerIcons} from '../../../assets/icons/';
import {scale} from '../../../utils';

export const PointCollect = ({
  marker,
  openBottomSheetInformationPointCollect,
}: any) => {
  return (
    <Marker
      key={marker.key}
      coordinate={marker.location}
      onPress={() => openBottomSheetInformationPointCollect(0)}>
      <Image
        source={MakerIcons[marker.type]}
        style={{
          height: scale(38),
          width: scale(38),
        }}
      />
    </Marker>
  );
};
