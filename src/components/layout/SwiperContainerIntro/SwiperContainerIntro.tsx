import React from 'react';
import {View} from 'react-native';
import {Typography, Container} from '../..';

import {scale} from '../../../utils';

interface SwiperContainerIntroProps {
  src?: any;
  title?: string;
  description?: string;
  footer?: any;
}

export const SwiperContainerIntro = ({
  src,
  title,
  description,
  footer,
}: SwiperContainerIntroProps) => {
  return (
    <Container align="center" justify="center" padding={24} color="green-200">
      {src}
      <View style={{position: 'absolute', top: scale(60)}}>
        <Typography color="gray-700">{title}</Typography>
        <Typography color="gray-700" variant="body">
          {description}
        </Typography>
      </View>
      {footer && (
        <View
          style={{position: 'absolute', bottom: scale(60), right: scale(98)}}>
          {footer}
        </View>
      )}
    </Container>
  );
};
