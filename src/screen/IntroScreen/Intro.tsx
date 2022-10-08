import React from 'react';
import Swiper from 'react-native-swiper';

import {DotSwiper} from '../../components/atomic/DotSwiper/DotSwiper';
import {FooterIntroScreen} from '../../components/organisms/FooterIntroScreen/FooterIntroScreen';
import {Container, ImageContainer} from '../../components/';

const VISIBLE_ARROWS = false;

import {LayoutSwiperContainer} from '../../components';
import Step0 from '../../assets/images/step0.png';
import Step1 from '../../assets/images/step1.png';
import Step2 from '../../assets/images/step2.png';
import Step3 from '../../assets/images/background-top-step-03.svg';
import StepUsers3 from '../../assets/images/users.svg';
import StepOrnaments3 from '../../assets/images/ornaments-step03.svg';
import {View} from 'react-native';

export const IntroScreen = () => {
  return (
    <>
      <Swiper
        showsButtons={VISIBLE_ARROWS}
        dot={<DotSwiper />}
        activeDot={<DotSwiper active />}>
        <Container>
          <View style={{position: 'relative'}}>
            <View style={{top: -240, left: -100}}>
              <Step3 />
            </View>

            <View style={{position: 'absolute', bottom: 330, left: 50}}>
              <StepUsers3 width={320} />
            </View>
          </View>
        </Container>
      </Swiper>
      <FooterIntroScreen />
    </>
  );
};
