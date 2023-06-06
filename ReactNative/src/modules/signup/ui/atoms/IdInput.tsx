import { Input } from '../../../common/ui/atoms/Input';

type Props = {
  value: string;
  onChangeText: (value: string) => void;
};

export function IdInput({ value, onChangeText }: Props): JSX.Element {
  return (
    <Input
      value={value}
      onChangeText={onChangeText}
      placeholder="아이디"
      secureTextEntry={false}
    />
  );
}
