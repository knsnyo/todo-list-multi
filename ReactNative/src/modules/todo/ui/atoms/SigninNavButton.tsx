import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { StackParamList } from '../../../../@types/navigation';
import { Button } from '../../../common/components/Button';

export function SigninNavButton(): JSX.Element {
  const navigation = useNavigation<NativeStackNavigationProp<StackParamList>>();

  return <Button title="로그인" onPress={() => navigation.push('/signin')} />;
}
