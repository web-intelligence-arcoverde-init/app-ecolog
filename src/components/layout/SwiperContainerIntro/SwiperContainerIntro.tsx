import React from 'react';
import {ImageContainer, Typography, Container} from '../..';

import {Separator} from '../../atomic/Separator/Separator';
import {FooterIntroScreen} from '../../organisms/FooterIntroScreen/FooterIntroScreen';

interface SwiperContainerIntroProps {
  src?: string;
  title?: string;
  description?: string;
}

export const SwiperContainerIntro = ({
  src,
  title,
  description,
}: SwiperContainerIntroProps) => {
  return (
    <Container align="center" justify="center" padding={24}>
      <ImageContainer src={src} />
      <Separator height={24} />
      <Typography color="black-200">{title}</Typography>
      <Separator height={4} />
      <Typography textAlign="center" variant="body" color="black-200">
        {description}
      </Typography>
      <FooterIntroScreen />
    </Container>
  );
};
