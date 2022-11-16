import * as React from 'react';

import {Svg, Path} from 'react-native-svg';

import {scale} from '../../utils';

const SvgComponent = props => (
  <Svg
    width={scale(430)}
    height={scale(435)}
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M-1.558-69.692v459.029s33.48 82.583 119.561 72.999c86.08-9.583 103.932-61.197 207.865 33.928 0 0 36.665 39.812 103.613 38.348V-69.692H-1.558Z"
      fill="#2DCC70"
    />
  </Svg>
);

export default SvgComponent;
