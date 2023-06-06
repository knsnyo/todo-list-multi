import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../../@types/root-stack-param-list';
import { Button } from '../../../common/components/Button';

export function SigninButton(): JSX.Element {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const buttonHandler = () => {
    navigation.push('/signin');
  };

  return <Button title="로그인" onPress={buttonHandler} />;
}
