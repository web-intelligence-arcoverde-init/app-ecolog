import React from 'react';

import {StyledContainer} from '../../atomic/Container';
import {Button} from '../../atomic/Button/Button';
import {useNavigation} from '@react-navigation/native';

export const FooterIntroScreen = () => {
  const navigation = useNavigation();

  return (
    <StyledContainer align="center" height={1} padding={16} width={26}>
      <Button
        color="gree"
        rightIcon
        icon="arrowright"
        iconColor="#fff"
        onPress={() => navigation.navigate('IntroOptionScreen')}
      />
    </StyledContainer>
  );
};
