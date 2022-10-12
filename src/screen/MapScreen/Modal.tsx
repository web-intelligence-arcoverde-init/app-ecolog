import React, {useState} from 'react';
import {StyleSheet} from 'react-native';

import Modal from 'react-native-modal';
import DefaultModalContent from './DefaultModal';

const BottomHalfModal = ({}) => {
  const [isVisible, setIsVisible] = useState(true);

  const onCloseModal = () => {
    setIsVisible(false);
  };

  return (
    <Modal
      testID={'modal'}
      isVisible={isVisible}
      onSwipeComplete={onCloseModal}
      swipeDirection={['up', 'left', 'right', 'down']}
      style={styles.view}>
      <DefaultModalContent onPress={onCloseModal} />
    </Modal>
  );
};

const styles = StyleSheet.create({
  view: {
    justifyContent: 'flex-end',
    margin: 0,
  },
});

export default BottomHalfModal;
