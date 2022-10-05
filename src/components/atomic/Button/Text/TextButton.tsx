import {Label} from '../../Label';
import styled from 'styled-components/native';

const Container = styled.TouchableOpacity`
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

interface TextButtonProps {
  children?: JSX.Element | JSX.Element[];
  onPress?: any;
  color?: any;
  weight?: any;
  size?: any;
  props?: any;
  text?: string;
}

export const TextButton = ({
  children,
  onPress = () => {},
  color,
  weight,
  size,
  props,
}: TextButtonProps) => {
  return (
    <Container onPress={() => onPress()} {...props}>
      <Label color={color} weight={weight} size={size}>
        {children}
      </Label>
    </Container>
  );
};
