import { Button } from '../../../common/ui/atoms/Button';

type ButtonType = {
  onPress: () => void;
};

export function SignupButton({ onPress }: ButtonType) {
  return <Button title="회원가입" onPress={onPress} />;
}
