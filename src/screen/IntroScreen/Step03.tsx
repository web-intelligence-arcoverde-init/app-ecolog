import React from 'react';
import {Container} from '../../components';

import Step3 from '../../assets/images/background-top-step-03.svg';
import StepUsers3 from '../../assets/images/users.svg';
import StepOrnaments3 from '../../assets/images/ornaments-step03.svg';
import Ecolog from '../../assets/images/ecolog.svg';
import {scale} from '../../utils';

export const Intro = () => {
  return (
    <Container>
      <Step3
        style={{position: 'relative', top: scale(-160), left: scale(-100)}}
      />
      <StepOrnaments3
        style={{position: 'absolute', top: scale(52), left: scale(-34)}}
      />
      <StepUsers3
        style={{position: 'absolute', top: scale(176), left: scale(24)}}
        width={340}
      />
      <Ecolog style={{position: 'absolute', top: scale(90), left: scale(24)}} />
    </Container>
  );
};
