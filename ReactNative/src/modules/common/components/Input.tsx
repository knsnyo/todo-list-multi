import { css } from '@emotion/native';
import { TextInput } from 'react-native';
import { GREY } from '../styles/color';
import { rem, vw } from '../styles/size';

type Props = {
  value: string;
  onChangeText: (value: string) => void;
  placeholder: string;
  secureTextEntry: boolean;
};

export function Input({
  value,
  onChangeText,
  placeholder,
  secureTextEntry,
}: Props): JSX.Element {
  return (
    <TextInput
      style={style.textInput}
      value={value}
      onChangeText={onChangeText}
      placeholder={placeholder}
      secureTextEntry={secureTextEntry}
    />
  );
}

const style = {
  textInput: css`
    border-bottom-width: ${rem(0.15)};
    border-bottom-color: ${GREY};
    width: ${vw(70)};
    padding: ${rem(1)};
    font-size: ${rem(1.5)};
    text-align: center;
  `,
};
