import React from 'react';
import Swiper from 'react-native-swiper';

import {
  SwiperContainerIntro,
  Container,
  DotSwiper,
  FooterIntroScreen,
  ArrowSwiper,
} from '../../components';

import Image from '../../assets/icons/intro/intro-step01.svg';
import Image2 from '../../assets/icons/intro/intro-step02.svg';
import Image3 from '../../assets/icons/intro/intro-step4.svg';

import {Dimensions, Text} from 'react-native';

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

const SHOW_ARROW_SWIPER = true;

export const IntroScreen = () => {
  return (
    <Swiper
      loop={false}
      showsButtons={SHOW_ARROW_SWIPER}
      nextButton={<ArrowSwiper>›</ArrowSwiper>}
      prevButton={<ArrowSwiper>‹</ArrowSwiper>}
      dot={<DotSwiper />}
      activeDot={<DotSwiper active />}>
      <Container>
        <SwiperContainerIntro
          src={<Image width={width} height={height} />}
          title="Ajude o meio ambiente"
          description="Incentive seus amigos e vizinhos a descartar o lixo corretamente"
        />
      </Container>
      <Container align="center" justify="center">
        <SwiperContainerIntro
          src={<Image2 width={width} height={height} />}
          title="É fácil"
          description="Encontre coletores de recicláveis ​​ou pontos de coleta mais
      próximos de sua casa"
        />
      </Container>
      <Container align="center" justify="center">
        <SwiperContainerIntro
          src={<Image3 width={width} height={height} />}
          title="Seja consciente"
          description="Ajude o meio ambiente a continuar preservado"
          footer={<FooterIntroScreen />}
        />
      </Container>
    </Swiper>
  );
};
