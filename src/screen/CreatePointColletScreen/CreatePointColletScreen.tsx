import * as React from 'react';
import {StyleSheet, View} from 'react-native';
import StepIndicator from 'react-native-step-indicator';
import Swiper from 'react-native-swiper';

import {Button} from '../../components';

import {DetailRecycle} from '../../components/organisms/DetailRecycle/DetailRecycle';
import {DetailTrash} from '../../components/organisms/DetailTrash/DetailTrash';
import {DetailExampleCreatePointRecycle} from '../../components/organisms/DetailExampleCreatePointRecycle/DetailExampleCreatePointRecycle';

const thirdIndicatorStyles = {
  stepIndicatorSize: 25,
  currentStepIndicatorSize: 30,
  separatorStrokeWidth: 2,
  currentStepStrokeWidth: 3,
  stepStrokeCurrentColor: '#2aa964',
  stepStrokeFinishedColor: '#2aa964',
  stepStrokeUnFinishedColor: '#dedede',
  separatorFinishedColor: '#2aa964',
  separatorUnFinishedColor: '#dedede',
  stepIndicatorFinishedColor: '#2aa964',
  stepIndicatorUnFinishedColor: '#6E6E6E',
  stepIndicatorCurrentColor: '#2aa964',
  stepIndicatorLabelFontSize: 12,
  currentStepIndicatorLabelFontSize: 0,
  stepIndicatorLabelCurrentColor: 'transparent',
  stepIndicatorLabelFinishedColor: 'transparent',
  stepIndicatorLabelUnFinishedColor: 'transparent',
  labelColor: '#848484',
  labelSize: 12,
  currentStepLabelColor: '#6E6E6E',
};

export const CreatePointColletScreen = ({navigation}) => {
  const [currentPage, setCurrentPage] = React.useState<number>(0);

  const maxNextStep = currentPage < 2;
  const minBackStep = currentPage > 0;

  const onStepPress = () => {
    maxNextStep && setCurrentPage(currentPage + 1);
    if (navigation) {
      navigation.navigate('MapScreen');
    }
  };

  const backStepPress = () => {
    minBackStep && setCurrentPage(currentPage - 1);
  };

  return (
    <View style={styles.container}>
      <View style={styles.stepIndicator}>
        <StepIndicator
          stepCount={3}
          customStyles={thirdIndicatorStyles}
          currentPosition={currentPage}
          onPress={onStepPress}
          labels={[
            'Detalhes do lixo',
            'Detalhes da retirada',
            'Escola o local da retirada',
          ]}
        />
      </View>
      <Swiper
        loop={false}
        index={currentPage}
        autoplay={false}
        showsButtons={false}
        showsPagination={false}
        onIndexChanged={index => {
          setCurrentPage(index);
        }}>
        <DetailTrash />
        <DetailRecycle />
        <DetailExampleCreatePointRecycle />
      </Swiper>

      <View style={{height: '24%'}}>
        <Button color="white" onPress={() => onStepPress()}>
          {maxNextStep ? 'Proximo' : 'Concluir'}
        </Button>

        <View style={{marginTop: 12}} />

        <Button outlined color="error" onPress={() => backStepPress()}>
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
    padding: 24,
  },
  stepIndicator: {
    marginTop: 40,
  },
});
