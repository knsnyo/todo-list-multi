import { Input } from '../../../common/components/Input';

type Props = {
  value: string;
  onChangeText: (value: string) => void;
};

export function PasswordInput({ value, onChangeText }: Props): JSX.Element {
  return (
    <Input
      value={value}
      onChangeText={onChangeText}
      placeholder="비밀번호"
      secureTextEntry={true}
    />
  );
}
