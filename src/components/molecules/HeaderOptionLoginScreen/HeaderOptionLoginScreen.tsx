import {scale, getPlatform} from '../../../utils';

import Wave from '../../../assets/images/Wave';

export const HeaderOptionLoginScreen = () => {
  const isAndroid = getPlatform() === 'android' ? scale(-180) : scale(-100);

  return <Wave style={{postion: 'absolute', top: isAndroid}} />;
};
