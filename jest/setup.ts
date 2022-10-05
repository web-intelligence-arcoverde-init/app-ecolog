import mockRNDeviceInfo from 'react-native-device-info/jest/react-native-device-info-mock';

jest.mock('react-native-device-info', () => mockRNDeviceInfo);

jest.mock(
  'react-native/Libraries/Components/Touchable/TouchableOpacity',
  () => {
    const react = require('react');
    const RealComponent = jest.requireActual(
      'react-native/Libraries/Components/Touchable/TouchableOpacity',
    );
    const MockTouchableOpacity = (props: any) => {
      const {children, disabled, onPress} = props;
      return react.createElement(
        'TouchableOpacity',
        {...props, onPress: disabled ? undefined : onPress},
        children,
      );
    };
    MockTouchableOpacity.propTypes = RealComponent.propTypes;
    return MockTouchableOpacity;
  },
);

jest.mock(
  'react-native/Libraries/Components/Touchable/TouchableHighlight',
  () => {
    const react = require('react');

    const RealComponent = jest.requireActual(
      'react-native/Libraries/Components/Touchable/TouchableHighlight',
    );

    const MockTouchableOpacity = (props: any) => {
      const {children, disabled, onPress} = props;
      return react.createElement(
        'TouchableOpacity',
        {...props, onPress: disabled ? () => {} : onPress},
        children,
      );
    };
    MockTouchableOpacity.propTypes = RealComponent.propTypes;
    return MockTouchableOpacity;
  },
);

jest.mock('react-native/Libraries/EventEmitter/NativeEventEmitter');
