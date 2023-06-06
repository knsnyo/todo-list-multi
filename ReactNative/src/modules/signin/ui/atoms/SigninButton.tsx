import { Button } from '../../../common/components/Button';

type ButtonType = {
  onPress: () => void;
};

export function SigninButton({ onPress }: ButtonType): JSX.Element {
  return <Button title="로그인" onPress={onPress} />;
}
