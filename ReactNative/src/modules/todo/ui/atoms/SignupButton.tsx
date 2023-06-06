import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../../@types/root-stack-param-list';
import { Button } from '../../../common/ui/atoms/Button';

export function SignupButton(): JSX.Element {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const buttonHandler = () => {
    navigation.push('/signup');
  };

  return <Button title="회원가입" onPress={buttonHandler} />;
}
