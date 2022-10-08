import React from 'react';
import {ImageContainer, Typography, Container} from '../../';

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
      <Typography color="green" variant="h2">
        {title}
      </Typography>
      <Typography variant="body3" color="gray-500" textAlign="center">
        {description}
      </Typography>
    </Container>
  );
};
