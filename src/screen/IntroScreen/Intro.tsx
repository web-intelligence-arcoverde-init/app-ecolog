import React from 'react';
import Swiper from 'react-native-swiper';

import {
  SwiperContainerIntro,
  Container,
  DotSwiper,
  FooterIntroScreen,
  ArrowSwiper,
} from '../../components';
import {IntroScreenImages} from '../../assets/';

const SHOW_ARROW_SWIPER = true;

import {Text} from 'react-native';

export const IntroScreen = () => {
  const {Step01, Step02, Step03} = IntroScreenImages;

  return (
    <Swiper
      loop={false}
      showsButtons={SHOW_ARROW_SWIPER}
      nextButton={<ArrowSwiper>›</ArrowSwiper>}
      prevButton={<ArrowSwiper>‹</ArrowSwiper>}
      dot={<DotSwiper />}
      activeDot={<DotSwiper active />}>
      <Container align="center" justify="center">
        <SwiperContainerIntro
          src={Step01}
          title="Ajude o meio ambiente"
          description="Incentive seus amigos e vizinhos a descartar o lixo corretamente"
        />
      </Container>
      <Container align="center" justify="center">
        <SwiperContainerIntro
          src={Step02}
          title="É fácil"
          description="Encontre coletores de recicláveis ​​ou pontos de coleta mais
      próximos de sua casa"
        />
      </Container>
      <Container align="center" justify="center">
        <SwiperContainerIntro
          src={Step03}
          title="Seja consciente"
          description="Ajude o meio ambiente a continuar preservado"
          footer={<FooterIntroScreen />}
        />
      </Container>
    </Swiper>
  );
};
