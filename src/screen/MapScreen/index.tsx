import React, {useCallback, useMemo, useRef, useState} from 'react';
import {Platform, Image, View, Text} from 'react-native';
import MapView, {
  PROVIDER_GOOGLE,
  PROVIDER_DEFAULT,
  Marker,
} from 'react-native-maps';
import {useAppSelector, useAppDispatch} from '../../hooks/useReduxHooks';

import {
  createNewPointRequest,
  changeVisibilityButtonAddNewPointCollect,
} from '../../store/reducer/pointCollectRecycling';

import {MakerIcons} from '../../assets/icons/index';

import {Button} from '../../components';

import BottomSheet, {
  BottomSheetModalProvider,
  useBottomSheetSpringConfigs,
} from '@gorhom/bottom-sheet';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

const MapViewComponent = ({navigation}) => {
  const defaultProvider =
    Platform.OS === 'ios' ? PROVIDER_DEFAULT : PROVIDER_GOOGLE;

  const {points, visibleButtonAddNewPointCollect} = useAppSelector(
    state => state.pointCollectRecycling,
  );

  const dispatch = useAppDispatch();

  const onChangeVisibilityButtonAddPointCollect = () => {
    dispatch(changeVisibilityButtonAddNewPointCollect());
    navigation.navigate('CreatePointColletScreen');
  };

  const addNewMarker = (location: any) => {
    if (visibleButtonAddNewPointCollect) {
      return;
    } else {
      const items = [
        'empresa',
        'ferro',
        'organico',
        'papel',
        'plastico',
        'pontoColeta',
        'vidro',
      ];

      let type = items[Math.floor(Math.random() * items.length)];

      const user = {name: 'Lucas'};

      dispatch(
        createNewPointRequest({
          id: points.length,
          name: '',
          type,
          telphoneNumber: '87998093765',
          datails: 'details',
          location,
          status: 'Aguardando',
          user,
        }),
      );

      dispatch(changeVisibilityButtonAddNewPointCollect());
    }
  };

  const bottomSheetRef = useRef<BottomSheet>(null);
  const snapPoints = useMemo(() => ['35%'], []);
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

  const handleSnapPress = useCallback(index => {
    bottomSheetRef.current?.snapToIndex(index);
  }, []);

  const {coordinate} = useAppSelector(state => state.user);
  const [isVisible, setIsVisible] = useState(false);

  return (
    <>
      <MapView
        showsUserLocation
        provider={defaultProvider}
        style={{flex: 1}}
        onPress={e => {
          !visibleButtonAddNewPointCollect &&
            addNewMarker(e.nativeEvent.coordinate);
        }}
        initialRegion={coordinate}>
        {points.map((marker: any) => (
          <Marker
            key={marker.key}
            coordinate={marker.location}
            onPress={() => handleSnapPress(0)}>
            <Image
              source={MakerIcons[marker.type]}
              style={{
                padding: 10,
                height: 48,
                width: 48,
              }}
            />
          </Marker>
        ))}
      </MapView>

      {visibleButtonAddNewPointCollect && (
        <View style={{position: 'absolute', bottom: 80, right: 18, width: 60}}>
          <Button
            icon="plus"
            iconColor="#fff"
            rightIcon
            onPress={() => {
              onChangeVisibilityButtonAddPointCollect();
            }}
          />
        </View>
      )}

      <BottomSheet
        ref={bottomSheetRef}
        index={-1}
        snapPoints={snapPoints}
        animationConfigs={animationConfigs}
        animateOnMount={true}
        enablePanDownToClose
        enableContentPanningGesture={enableContentPanningGesture}
        enableHandlePanningGesture={enableHandlePanningGesture}>
        <View>
          <Text>Aqui</Text>
        </View>
      </BottomSheet>
    </>
  );
};

export default MapViewComponent;
