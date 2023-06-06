import { Button } from '../../../common/components/Button';

type ButtonType = {
  onPress: () => void;
};

export function SignupButton({ onPress }: ButtonType): JSX.Element {
  return <Button title="회원가입" onPress={onPress} />;
}
