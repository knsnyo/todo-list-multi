import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { StackParamList } from '../../../../@types/navigation';
import { Button } from '../../../common/components/Button';

export function SignupNavButton(): JSX.Element {
  const navigation = useNavigation<NativeStackNavigationProp<StackParamList>>();

  return <Button title="회원가입" onPress={() => navigation.push('/signup')} />;
}
