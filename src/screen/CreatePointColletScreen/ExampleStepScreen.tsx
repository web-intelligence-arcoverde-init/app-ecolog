import * as React from 'react';
import {StyleSheet, View, Image} from 'react-native';
import StepIndicator from 'react-native-step-indicator';
import Swiper from 'react-native-swiper';

const PAGES = ['Page 1', 'Page 2', 'Page 3'];

import {MakerIcons} from '../../assets/icons/index';

import {Typography, Button} from '../../components';

const thirdIndicatorStyles = {
  stepIndicatorSize: 25,
  currentStepIndicatorSize: 30,
  separatorStrokeWidth: 2,
  currentStepStrokeWidth: 3,
  stepStrokeCurrentColor: '#7eaec4',
  stepStrokeWidth: 3,
  stepStrokeFinishedColor: '#7eaec4',
  stepStrokeUnFinishedColor: '#dedede',
  separatorFinishedColor: '#7eaec4',
  separatorUnFinishedColor: '#dedede',
  stepIndicatorFinishedColor: '#7eaec4',
  stepIndicatorUnFinishedColor: '#ffffff',
  stepIndicatorCurrentColor: '#ffffff',
  stepIndicatorLabelFontSize: 0,
  currentStepIndicatorLabelFontSize: 0,
  stepIndicatorLabelCurrentColor: 'transparent',
  stepIndicatorLabelFinishedColor: 'transparent',
  stepIndicatorLabelUnFinishedColor: 'transparent',
  labelColor: '#999999',
  labelSize: 13,
  currentStepLabelColor: '#7eaec4',
};

import RadioForm from 'react-native-simple-radio-button';

const radio_props = [
  {label: 'param1', value: 0},
  {label: 'param2', value: 1},
];

export default function App() {
  const [currentPage, setCurrentPage] = React.useState<number>(0);

  const onStepPress = (position: number) => {
    setCurrentPage(position);
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
            'Confirmação da retirada',
          ]}
        />
      </View>
      <Swiper
        style={{flexGrow: 1}}
        loop={false}
        index={currentPage}
        autoplay={false}
        onIndexChanged={page => {
          setCurrentPage(page);
        }}>
        <View>
          <RadioForm
            radio_props={radio_props}
            initial={0}
            labelHorizontal={true}
            formHorizontal={true}
            buttonColor={'#2196f3'}
            animation={true}
          />

          <Typography variant="body3">Tipo do lixo</Typography>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              flexWrap: 'wrap',
            }}>
            <View
              style={{
                width: 100,
                height: 100,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                borderColor: '#000',
                borderWidth: 1,
                borderRadius: 10,
              }}>
              <Image source={MakerIcons.ferro} />
              <Typography variant="button">Ferro</Typography>
            </View>

            <View
              style={{
                width: 100,
                height: 100,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                borderColor: '#000',
                borderWidth: 1,
                borderRadius: 10,
              }}>
              <Image source={MakerIcons.organico} />
              <Typography variant="button">Organico</Typography>
            </View>

            <View
              style={{
                width: 100,
                height: 100,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                borderColor: '#000',
                borderWidth: 1,
                borderRadius: 10,
              }}>
              <Image source={MakerIcons.papel} />
              <Typography variant="button">Papel</Typography>
            </View>

            <View
              style={{
                width: 100,
                height: 100,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                borderColor: '#000',
                borderWidth: 1,
                borderRadius: 10,
              }}>
              <Image source={MakerIcons.plastico} />
              <Typography variant="button">Plastico</Typography>
            </View>

            <View
              style={{
                width: 100,
                height: 100,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                borderColor: '#000',
                borderWidth: 1,
                borderRadius: 10,
              }}>
              <Image source={MakerIcons.vidro} />
              <Typography variant="button">Vidro</Typography>
            </View>

            <View
              style={{
                width: 100,
                height: 100,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                borderColor: '#000',
                borderWidth: 1,
                borderRadius: 10,
              }}>
              <Image source={MakerIcons.vidro} />
              <Typography variant="button">Vidro</Typography>
            </View>
          </View>

          <Button>Proximo</Button>
        </View>
      </Swiper>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  stepIndicator: {
    marginVertical: 50,
  },
  page: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  stepLabel: {
    fontSize: 12,
    textAlign: 'center',
    fontWeight: '500',
    color: '#999999',
  },
  stepLabelSelected: {
    fontSize: 12,
    textAlign: 'center',
    fontWeight: '500',
    color: '#4aae4f',
  },
});
