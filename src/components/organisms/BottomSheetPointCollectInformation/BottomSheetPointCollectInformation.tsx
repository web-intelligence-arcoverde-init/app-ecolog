import React, {useMemo, useState} from 'react';

import BottomSheet, {useBottomSheetSpringConfigs} from '@gorhom/bottom-sheet';

import {ScrollView, View} from 'react-native';

import {Typography, Separator, Button} from '../../';
import {scale} from '../../../utils';

export const BottomSheetPointCollectInformation = ({bottomSheetRef}: any) => {
  const snapPoints = useMemo(() => ['60%'], []);
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
      <View
        style={{
          flex: 1,
          paddingHorizontal: scale(24),
          justifyContent: 'flex-end',
        }}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Separator height={16} />
          <ItemTypeTitle />

          <Separator height={8} />

          <Typography>Ponto de reciclagem</Typography>

          <Separator height={8} />

          <View>
            <Typography variant="body" color="gray-500">
              Usuario:
            </Typography>
            <Separator height={4} />

            <Typography variant="body">Lucas Henrique</Typography>
          </View>

          <Separator height={8} />

          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <View>
              <Typography variant="body" color="gray-500">
                Data de criação:
              </Typography>
              <Separator height={4} />
              <Typography variant="body">21/06/2022</Typography>
            </View>
            <View>
              <Typography variant="body" color="gray-500">
                Contato:
              </Typography>
              <Separator height={4} />
              <Typography variant="body">879998093765</Typography>
            </View>
          </View>
          <Separator height={16} />

          <View>
            <Typography variant="body" color="gray-500">
              Descrição:
            </Typography>
            <Separator height={4} />
            <View>
              <Typography variant="legend">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
                optio natus inventore, dolor et distinctio at? Consequuntur
                voluptatem nemo illo quis? Eius nesciunt ea repudiandae
                voluptatem quisquam nobis tempora molestias!
              </Typography>
            </View>
          </View>

          <Separator height={40} />
          <Button outlined color="error-100">
            Remover
          </Button>
          <Separator height={40} />
        </ScrollView>
      </View>
    </BottomSheet>
  );
};

import {COLORS} from '../../../common';

const ItemTypeTitle = () => {
  const {organic} = COLORS;

  return (
    <View
      style={{
        backgroundColor: organic,
        borderRadius: 10,
        width: '40%',
        padding: 4,
        alignItems: 'center',
      }}>
      <Typography variant="legend" color="black-400">
        Vidro
      </Typography>
    </View>
  );
};
