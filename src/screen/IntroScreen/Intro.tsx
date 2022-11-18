import React, {useEffect} from 'react';
import Swiper from 'react-native-swiper';

import {
  SwiperContainerIntro,
  Container,
  DotSwiper,
  FooterIntroScreen,
  ArrowSwiper,
} from '../../components';

import Image2 from '../../assets/icons/intro/intro-step02.svg';
import Image3 from '../../assets/icons/intro/intro-step4.svg';

import Image4 from '../../assets/icons/intro/intro.svg';

import {scale} from '../../utils';

import {getUserLocation} from '../../hooks/';

const SHOW_ARROW_SWIPER = true;

export const IntroScreen = () => {
  const {getCurrentPosition} = getUserLocation();

  useEffect(() => {
    getCurrentPosition();
  }, []);

  return (
    <Swiper
      loop={false}
      showsButtons={SHOW_ARROW_SWIPER}
      nextButton={<ArrowSwiper>›</ArrowSwiper>}
      prevButton={<ArrowSwiper>‹</ArrowSwiper>}
      dot={<DotSwiper />}
      activeDot={<DotSwiper active />}>
      <>
        <SwiperContainerIntro
          title="Ajude o meio ambiente"
          description="Incentive seus amigos e vizinhos a descartar o lixo corretamente">
          <Image4 width={scale(300)} height={scale(300)} />
        </SwiperContainerIntro>
      </>
      <Container>
        <SwiperContainerIntro
          title="É fácil"
          description="Encontre pontos de reciclagem ​​ou crie pontos de coleta">
          <Image2 width={scale(300)} height={scale(300)} />
        </SwiperContainerIntro>
      </Container>
      <Container>
        <SwiperContainerIntro
          title="Seja consciente"
          description="Ajude o meio ambiente a continuar preservado"
          footer={<FooterIntroScreen />}>
          <Image3 width={scale(300)} height={scale(300)} />
        </SwiperContainerIntro>
      </Container>
    </Swiper>
  );
};
