import {SafeAreaView, StyleSheet} from 'react-native';
import Lottie from 'lottie-react-native';

import RecycleAnimation from '../../assets/animations/recycle.json';

export const Intro = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Lottie source={RecycleAnimation} speed={0.09} autoPlay />
    </SafeAreaView>
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
