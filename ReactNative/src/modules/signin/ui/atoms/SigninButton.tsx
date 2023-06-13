import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useMutation } from 'react-query';
import { useDispatch, useSelector } from 'react-redux';
import { queryClient } from '../../../../../App';
import { StackParamList } from '../../../../@types/navigation';
import { Button } from '../../../common/components/Button';
import { RootState } from '../../../common/redux';
import { init } from '../../redux/signin-redux';
import { requestSignin } from '../../services/signin.service';

export function SigninButton(): JSX.Element {
  const signinForm = useSelector((state: RootState) => state.signin);
  const dispatch = useDispatch();
  const navigation = useNavigation<NativeStackNavigationProp<StackParamList>>();

  const signin = useMutation(() => requestSignin(signinForm), {
    onSuccess: async () => {
      dispatch(init());
      queryClient.invalidateQueries('getTodos');
      navigation.pop();
    },
  });

  return <Button title="로그인" onPress={() => signin.mutate()} />;
}
