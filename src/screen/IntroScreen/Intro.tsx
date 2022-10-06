import {Text} from 'react-native';
import React from 'react';
import Swiper from 'react-native-swiper';

import {DotSwiper} from '../../components/atomic//DotSwiper/DotSwiper';
import {Container} from '../../components/atomic/Container';
import {FooterIntroScreen} from '../../components/organisms/FooterIntroScreen/FooterIntroScreen';

const VISIBLE_ARROWS = false;

import {Typography} from '../../components/atomic/Typography/Typography';

export const IntroScreen = () => {
  return (
    <>
      <Swiper
        showsButtons={VISIBLE_ARROWS}
        dot={<DotSwiper />}
        activeDot={<DotSwiper active />}>
        <Container align="center" justify="center">
          <Typography color="green" variant="button">
            Ecolog
          </Typography>
          <Typography>Beautiful</Typography>
        </Container>
        <Container align="center" justify="center">
          <Text>And simple</Text>
        </Container>
      </Swiper>
      <FooterIntroScreen />
    </>
  );
};
