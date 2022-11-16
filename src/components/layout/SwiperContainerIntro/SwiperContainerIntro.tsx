import React from 'react';
import {View} from 'react-native';
import {scale} from '../../../utils';

import {Typography, Container, Separator} from '../..';

interface SwiperContainerIntroProps {
  title?: string;
  description?: string;
  footer?: any;
  children?: any;
}

export const SwiperContainerIntro = ({
  title,
  description,
  children,
  footer,
}: SwiperContainerIntroProps) => {
  return (
    <Container align="center" justify="center" padding={24} color="gray-300">
      <Typography color="gray-700">{title}</Typography>
      <Separator height={8} />
      {children}
      <Separator height={8} />
      <Typography color="gray-700" variant="body" textAlign="center">
        {description}
      </Typography>
      {footer && <View style={{width: 80, marginTop: scale(8)}}>{footer}</View>}
    </Container>
  );
};
