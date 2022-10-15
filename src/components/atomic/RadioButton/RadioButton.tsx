import React from 'react';
import RadioForm, {
  RadioButton,
  RadioButtonInput,
  RadioButtonLabel,
} from 'react-native-simple-radio-button';

const radio_props = [
  {label: 'Empresa', value: 0},
  {label: 'Domestico', value: 1},
];

export const RadioButtonComponent = () => {
  const [select, setSelect] = React.useState(0);

  return (
    <RadioForm
      formHorizontal={true}
      animation={true}
      initial={0}
      onPress={value => {
        console.log(value);
      }}>
      {radio_props.map((obj, i) => (
        <RadioButton labelHorizontal={true} key={i}>
          <RadioButtonInput
            obj={obj}
            index={i}
            isSelected={select === i}
            buttonOuterColor="#2ecc71"
            buttonInnerColor="#2ecc71"
            buttonSize={26}
            buttonOuterSize={28}
            buttonStyle={{}}
            buttonWrapStyle={{marginLeft: 10}}
            onPress={value => {
              setSelect(value);
            }}
          />
          <RadioButtonLabel
            obj={obj}
            index={i}
            labelHorizontal={true}
            labelStyle={{fontSize: 16, color: '#2ecc71'}}
            labelWrapStyle={{}}
            onPress={value => {
              setSelect(value);
            }}
          />
        </RadioButton>
      ))}
    </RadioForm>
  );
};
