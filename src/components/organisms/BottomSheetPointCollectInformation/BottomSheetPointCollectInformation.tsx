import React, {useMemo, useState} from 'react';

import BottomSheet, {
  useBottomSheetSpringConfigs,
  BottomSheetScrollView,
} from '@gorhom/bottom-sheet';
import {ScrollView, View} from 'react-native';

import {Typography, Separator, Button} from '../../';
import {scale} from '../../../utils';

import {COLORS} from '../../../common';
import {useAppSelector} from '../../../hooks/useReduxHooks';
import {BottomSheetContext} from '../../../context/BottomSheetCollectPointInformation';

export const BottomSheetPointCollectInformation = () => {
  const {bottomSheetRef} = React.useContext(BottomSheetContext);

  const snapPoints = useMemo(() => ['86%'], []);
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

  const {pointSelected} = useAppSelector(state => state.pointCollectRecycling);

  const isSelectedPoint = Object.keys(pointSelected).length === 0;

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
      {!isSelectedPoint && (
        <BottomSheetScrollView
          style={{
            flex: 1,
            paddingHorizontal: scale(24),
          }}>
          <Separator height={16} />

          <Typography>Ponto de reciclagem</Typography>

          <Separator height={8} />

          <ItemTypeTitle point={pointSelected} />

          <Separator height={16} />

          <View>
            <Typography variant="body" color="gray-500">
              Nome:
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
          <Separator height={8} />

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

          <Separator height={24} />
          <Button color="error-100">Remover</Button>

          <Separator height={32} />
        </BottomSheetScrollView>
      )}
    </BottomSheet>
  );
};

const ItemTypeTitle = ({point = {}}: any) => {
  const backgroundColor = point.type.value ? point.type.value : 'glass';

  return (
    <View
      style={{
        backgroundColor: COLORS[backgroundColor],
        borderRadius: 10,
        padding: 80,
        alignItems: 'center',
      }}>
      <Typography variant="legend" color="black-400">
        Imagem
      </Typography>
    </View>
  );
};
