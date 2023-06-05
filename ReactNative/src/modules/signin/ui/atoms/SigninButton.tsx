import { Button } from '../../../common/ui/atoms/Button';

type ButtonType = {
  onPress: () => void;
};

export function SigninButton({ onPress }: ButtonType) {
  return <Button title="로그인" onPress={onPress} />;
}
