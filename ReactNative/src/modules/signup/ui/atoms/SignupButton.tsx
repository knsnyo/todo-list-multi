import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useMutation } from 'react-query';
import { useDispatch, useSelector } from 'react-redux';
import { StackParamList } from '../../../../@types/navigation';
import { Button } from '../../../common/components/Button';
import { RootState } from '../../../common/redux';
import { init } from '../../redux/signup-redux';
import { requestSignup } from '../../services/signup.service';

export function SignupButton(): JSX.Element {
  const signupForm = useSelector((state: RootState) => state.signup);
  const dispatch = useDispatch();
  const navigation = useNavigation<NativeStackNavigationProp<StackParamList>>();

  const signup = useMutation(() => requestSignup(signupForm), {
    onSuccess: () => {
      dispatch(init());
      navigation.pop();
    },
  });
  return <Button title="회원가입" onPress={() => signup.mutate()} />;
}
