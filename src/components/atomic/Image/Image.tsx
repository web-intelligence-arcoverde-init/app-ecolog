import {Image} from 'react-native';
import {scale} from '../../../utils';

export const ImageContainer = ({src}: any) => {
  return <Image source={src} style={{width: scale(180), height: scale(180)}} />;
};
