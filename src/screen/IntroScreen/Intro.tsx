import React from 'react';
import Swiper from 'react-native-swiper';

import {SwiperContainerIntro, Container, DotSwiper} from '../../components';
import {IntroScreenImages} from '../../assets/';

const SHOW_ARROW_SWIPER = false;

export const IntroScreen = () => {
  const {Step01, Step02, Step03} = IntroScreenImages;

  return (
    <Swiper
      showsButtons={SHOW_ARROW_SWIPER}
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
          description="Ajude o meio ambiente a continuar preservado, separe o seu lixo de forma correta e adicione um ponto de coleta para as empresas entrem em contato "
        />
      </Container>
    </Swiper>
  );
};
