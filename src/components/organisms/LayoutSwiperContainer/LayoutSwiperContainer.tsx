import React from 'react';
import {ImageContainer, Typography, Container} from '../../';

import {Separator} from '../../atomic/Separator/Separator';
import {FooterIntroScreen} from '../../organisms/FooterIntroScreen/FooterIntroScreen';

interface LayoutSwiperContainerProps {
  src?: string;
  title?: string;
  description?: string;
}

export const LayoutSwiperContainer = ({
  src,
  title,
  description,
}: LayoutSwiperContainerProps) => {
  return (
    <Container align="center" justify="center">
      <ImageContainer src={src} />
      <Separator height={24} />
      <Typography>{title}</Typography>
      <Separator height={4} />
      <Typography textAlign="center" variant="body">
        {description}
      </Typography>
      <Separator height={74} />
      <FooterIntroScreen />
    </Container>
  );
};
