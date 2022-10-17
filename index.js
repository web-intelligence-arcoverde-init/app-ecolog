import {AppRegistry, Platform} from 'react-native';
import {App} from './src/App';
import 'react-native-gesture-handler';

AppRegistry.registerComponent(
  Platform.OS === 'ios' ? 'ecolog' : 'Ecolog',
  () => App,
);
