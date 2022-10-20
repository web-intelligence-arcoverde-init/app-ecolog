import React, {useMemo, useState} from 'react';

import BottomSheet, {useBottomSheetSpringConfigs} from '@gorhom/bottom-sheet';

import {View, Text} from 'react-native';

import {Typography, Separator, Button} from '../../';
import {scale} from '../../../utils';

export const BottomSheetPointCollectInformation = ({bottomSheetRef}: any) => {
  const snapPoints = useMemo(() => ['45%'], []);
  const animationConfigs = useBottomSheetSpringConfigs({
    damping: 80,
    overshootClamping: false,
    restDisplacementThreshold: 0.1,
    restSpeedThreshold: 0.1,
    stiffness: 500,
  });

  const [enableContentPanningGesture, setEnableContentPanningGesture] =
    useState(true);

  const [enableHandlePanningGesture, setEnableHandlePanningGesture] =
    useState(true);

  return (
    <BottomSheet
      ref={bottomSheetRef}
      index={-1}
      snapPoints={snapPoints}
      animationConfigs={animationConfigs}
      animateOnMount={true}
      enablePanDownToClose
      enableContentPanningGesture={enableContentPanningGesture}
      enableHandlePanningGesture={enableHandlePanningGesture}>
      <View style={{flex: 1, paddingHorizontal: scale(24)}}>
        <Separator height={16} />
        <Typography>Ponto de reciclagem para plástico</Typography>

        <Typography variant="body">Casa do Luis</Typography>
        <Typography variant="body">Casa do Luis</Typography>
        <Typography variant="body">contato: 879999999</Typography>
        <Typography variant="body">Detalhes</Typography>

        <Button outlined>Remover</Button>
      </View>
    </BottomSheet>
  );
};
