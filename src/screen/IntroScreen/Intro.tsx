import React from 'react';
import Swiper from 'react-native-swiper';

import {DotSwiper} from '../../components/atomic/DotSwiper/DotSwiper';
import {FooterIntroScreen} from '../../components/organisms/FooterIntroScreen/FooterIntroScreen';

const VISIBLE_ARROWS = false;

import {LayoutSwiperContainer, Container} from '../../components';
import Step0 from '../../assets/images/step0.png';
import Step1 from '../../assets/images/step1.png';
import Step2 from '../../assets/images/step2.png';

import {Intro} from './Step03';

import {Dimensions} from 'react-native';

const {width} = Dimensions.get('window');

export const IntroScreen = () => {
  return (
    <>
      <Swiper
        showsButtons={VISIBLE_ARROWS}
        dot={<DotSwiper />}
        activeDot={<DotSwiper active />}>
        <Container align="center" justify="center">
          <LayoutSwiperContainer
            src={Step0}
            title="Ecolog"
            description="Sustentabilidade"
          />
        </Container>
        <Container align="center" justify="center">
          <LayoutSwiperContainer
            src={Step1}
            title="Ecolog"
            description="Sustentabilidade"
          />
        </Container>
        <Container align="center" justify="center">
          <LayoutSwiperContainer
            src={Step2}
            title="Ecolog"
            description="Sustentabilidade"
          />
        </Container>
        <Intro />
      </Swiper>
      <FooterIntroScreen />
    </>
  );
};
