import React from 'react';
import Swiper from 'react-native-swiper';

import {DotSwiper} from '../../components/atomic/DotSwiper/DotSwiper';

const VISIBLE_ARROWS = false;

import {SwiperContainerIntro, Container} from '../../components';
import Step0 from '../../assets/images/step0.png';
import Step1 from '../../assets/images/step1.png';
import Step2 from '../../assets/images/step2.png';

export const IntroScreen = () => {
  return (
    <>
      <Swiper
        showsButtons={VISIBLE_ARROWS}
        dot={<DotSwiper />}
        activeDot={<DotSwiper active />}>
        <Container align="center" justify="center">
          <SwiperContainerIntro
            src={Step0}
            title="Ajude o meio ambiente"
            description="Incentive seus amigos e vizinhos a descartar o lixo corretamente"
          />
        </Container>
        <Container align="center" justify="center">
          <SwiperContainerIntro
            src={Step1}
            title="É fácil"
            description="Encontre coletores de recicláveis ​​ou pontos de coleta mais
      próximos de sua casa"
          />
        </Container>
        <Container align="center" justify="center">
          <SwiperContainerIntro
            src={Step2}
            title="Seja consciente"
            description="Ajudar o meio ambiente, catadores e cooperativas cadastradas"
          />
        </Container>
      </Swiper>
    </>
  );
};
