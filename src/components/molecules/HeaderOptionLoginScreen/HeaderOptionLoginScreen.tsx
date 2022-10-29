import {scale} from '../../../utils';
import {ImageBackground} from 'react-native';
import {HeaderOptionLoginScreenImages} from '../../../assets';

export const HeaderOptionLoginScreen = () => {
  const {PeopleCollectWaste, Ornaments, Ecolog, BackgroundImageWave} =
    HeaderOptionLoginScreenImages;

  return (
    <ImageBackground
      source={BackgroundImageWave}
      style={{
        position: 'absolute',
        height: scale(600),
        width: scale(600),
        top: scale(-208),
        left: scale(-100),
      }}>
      <Ornaments
        style={{position: 'absolute', top: scale(250), left: scale(66)}}
      />

      <PeopleCollectWaste
        style={{position: 'absolute', top: scale(346), left: scale(130)}}
        width={340}
      />
      <Ecolog
        style={{
          position: 'absolute',
          top: scale(280),
          left: scale(110),
        }}
      />
    </ImageBackground>
  );
};
