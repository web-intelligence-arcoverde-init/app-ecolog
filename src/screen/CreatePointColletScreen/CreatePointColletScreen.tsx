import * as React from 'react';
import {StyleSheet, View} from 'react-native';
import StepIndicator from 'react-native-step-indicator';
import Swiper from 'react-native-swiper';

import {Button} from '../../components';

import {DetailRecycle} from '../../components/organisms/DetailRecycle/DetailRecycle';
import {GarbageDetail} from '../../components/organisms/GarbageDetail/GarbageDetail';
import {DetailExampleCreatePointRecycle} from '../../components/organisms/DetailExampleCreatePointRecycle/DetailExampleCreatePointRecycle';
import {
  addPointCollectContact,
  changeVisibilityButtonAddNewPointCollect,
} from '../../store/reducer/pointCollectRecycling';

import {scale, getPlatform} from '../../utils';

import {useAppDispatch, useAppSelector} from '../../hooks/useReduxHooks';
import {useCustomNavigation} from '../../hooks/useNavigation';

import {customStyle} from './styleIndicator';

interface PointCollect {
  type: string;
  user: string;
  contactUser: string;
  details: string;
  location: {
    latitude: number;
    longitude: number;
  };
}

export const CreatePointColletScreen = () => {
  const [currentPage, setCurrentPage] = React.useState<number>(0);

  const [contact, setContact] = React.useState('');
  const [details, setDetails] = React.useState('');

  const dispatch = useAppDispatch();

  const maxNextStep = currentPage < 2;
  const minBackStep = currentPage > 0;

  const {goTo} = useCustomNavigation();

  //TODO: criar reducer
  const onChangeValue = (name: string, value: string) => {
    if (name === 'contato') {
      setContact(value);
    } else if (name === 'detalhes') {
      setDetails(value);
    }
  };

  const pointCollectTypeId = useAppSelector(
    state => state.pointCollectRecycling.point?.type?.id,
  );

  const onStepPress = () => {
    maxNextStep && setCurrentPage(currentPage + 1);
    if (!maxNextStep) {
      goTo('MapScreen');
    }
  };

  const backStepPress = () => {
    minBackStep && setCurrentPage(currentPage - 1);
    if (!minBackStep) {
      dispatch(changeVisibilityButtonAddNewPointCollect());
      goTo('MapScreen');
    }
  };

  //Vericiar se os campos estão preenchidos e se está na segunda pagina de cadastro do ponto de coleta
  const validationField = currentPage === 1 ? !!contact && !!details : true;

  const itemTypeCollectSelected =
    pointCollectTypeId && validationField ? 'primary' : 'disabled';

  React.useEffect(() => {
    if (contact && details) {
      dispatch(addPointCollectContact({phone: contact, datails: details}));
    }
  }, [contact, details]);

  return (
    <View style={styles.container}>
      <View style={styles.stepIndicator}>
        <StepIndicator
          stepCount={3}
          customStyles={customStyle}
          currentPosition={currentPage}
          onPress={onStepPress}
          labels={[
            'Detalhes do lixo',
            'Detalhes da retirada',
            'Escolha o local da retirada',
          ]}
        />
      </View>

      <Swiper
        loop={false}
        index={currentPage}
        autoplay={false}
        showsButtons={false}
        showsPagination={false}
        scrollEnabled={false}
        onIndexChanged={index => {
          setCurrentPage(index);
        }}>
        <GarbageDetail />
        <DetailRecycle onChange={onChangeValue} />
        <DetailExampleCreatePointRecycle />
      </Swiper>

      <View style={{height: '24%', padding: 24}}>
        <Button
          color="white-100"
          variant={itemTypeCollectSelected}
          onPress={() => onStepPress()}>
          {maxNextStep ? 'Proximo' : 'Concluir'}
        </Button>

        <View style={{marginTop: 12}} />

        <Button color="error-100" onPress={() => backStepPress()}>
          {minBackStep ? 'Voltar' : 'Cancelar'}
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFAFA',
  },
  stepIndicator: {
    marginTop: getPlatform() === 'ios' ? scale(54) : scale(28),
  },
});
