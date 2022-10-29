import {StyleSheet, View} from 'react-native';
import Lottie from 'lottie-react-native';

import {RecycleAnimation} from '../../assets/';
import {useCustomNavigation} from '../../hooks/';

export const SplashScreen = () => {
  const {goTo} = useCustomNavigation();

  return (
    <View style={styles.container}>
      <Lottie
        testID={'container-lottie-animation'}
        onAnimationFinish={() => {
          goTo('IntroScreen');
        }}
        source={RecycleAnimation}
        loop={false}
        autoPlay
        speed={0.09}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
});
