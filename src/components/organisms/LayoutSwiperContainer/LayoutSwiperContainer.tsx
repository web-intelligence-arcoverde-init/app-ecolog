import React from 'react';
import {ImageContainer, Typography, Container} from '../../';

import {View} from 'react-native';

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
      <View style={{marginTop: 32}} />
      <Typography color="green" variant="h2">
        {title}
      </Typography>
      <View style={{marginTop: 8}} />
      <Typography variant="body3" color="gray-500" textAlign="center">
        {description}
      </Typography>
    </Container>
  );
};
