import {AppRegistry} from 'react-native';
import {App} from './src/App';
import {Platform} from 'react-native';

AppRegistry.registerComponent(
  Platform.OS === 'ios' ? 'ecolog' : 'Ecolog',
  () => App,
);
