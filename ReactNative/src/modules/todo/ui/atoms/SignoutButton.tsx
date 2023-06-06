import { Button } from '../../../common/components/Button';

type Props = {
  onPress: () => void;
};

export function SignoutButton({ onPress }: Props): JSX.Element {
  return <Button title="로그아웃" onPress={() => onPress()} />;
}
