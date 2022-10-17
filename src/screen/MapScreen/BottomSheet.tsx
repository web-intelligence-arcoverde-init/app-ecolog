import React, {useCallback, memo, useRef, useMemo, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import BottomSheet, {useBottomSheetSpringConfigs} from '@gorhom/bottom-sheet';

import {Button} from '../../components';

import MapExample from './index';

const createExampleScreen = () =>
  memo(() => {
    //#region state
    const [enableContentPanningGesture, setEnableContentPanningGesture] =
      useState(true);
    const [enableHandlePanningGesture, setEnableHandlePanningGesture] =
      useState(true);
    //#endregion

    //#region refs
    const bottomSheetRef = useRef<BottomSheet>(null);
    //#endregion

    //#region variables
    const snapPoints = useMemo(() => ['25%', '50%', '90%'], []);
    const enableContentPanningGestureButtonText = useMemo(
      () =>
        enableContentPanningGesture
          ? 'Disable Content Panning Gesture'
          : 'Enable Content Panning Gesture',
      [enableContentPanningGesture],
    );
    const enableHandlePanningGestureButtonText = useMemo(
      () =>
        enableHandlePanningGesture
          ? 'Disable Handle Panning Gesture'
          : 'Enable Handle Panning Gesture',
      [enableHandlePanningGesture],
    );
    const animationConfigs = useBottomSheetSpringConfigs({
      damping: 80,
      overshootClamping: true,
      restDisplacementThreshold: 0.1,
      restSpeedThreshold: 0.1,
      stiffness: 500,
    });
    //#endregion

    //#region callbacks
    const handleSheetChange = useCallback(index => {
      // eslint-disable-next-line no-console
      console.log('handleSheetChange', index);
    }, []);
    const handleSheetAnimate = useCallback(
      (fromIndex: number, toIndex: number) => {
        // eslint-disable-next-line no-console
        console.log('handleSheetAnimate', `from ${fromIndex} to ${toIndex}`);
      },
      [],
    );
    const handleSnapPress = useCallback(index => {
      bottomSheetRef.current?.snapToIndex(index);
    }, []);
    const handleExpandPress = useCallback(() => {
      bottomSheetRef.current?.expand();
    }, []);
    const handleCollapsePress = useCallback(() => {
      bottomSheetRef.current?.collapse();
    }, []);
    const handleClosePress = useCallback(() => {
      bottomSheetRef.current?.close();
    }, []);
    const handleEnableContentPanningGesturePress = useCallback(() => {
      setEnableContentPanningGesture(state => !state);
    }, []);
    const handleEnableHandlePanningGesturePress = useCallback(() => {
      setEnableHandlePanningGesture(state => !state);
    }, []);
    //#endregion

    return (
      <View style={{flex: 1, justifyContent: 'center'}}>
        <Button
          icon="plus"
          iconColor="#fff"
          rightIcon
          onPress={() => handleSnapPress(0)}
        />

        <Button
          icon="plus"
          iconColor="#fff"
          rightIcon
          onPress={() => handleClosePress()}
        />

        <BottomSheet
          ref={bottomSheetRef}
          index={1}
          snapPoints={snapPoints}
          animationConfigs={animationConfigs}
          animateOnMount={true}
          enablePanDownToClose
          enableContentPanningGesture={enableContentPanningGesture}
          enableHandlePanningGesture={enableHandlePanningGesture}
          onChange={handleSheetChange}
          onAnimate={handleSheetAnimate}>
          <Button
            icon="plus"
            iconColor="#fff"
            rightIcon
            onPress={() => handleClosePress()}
          />
        </BottomSheet>
      </View>
    );
  });

export const FlatListExampleScreen = createExampleScreen();
