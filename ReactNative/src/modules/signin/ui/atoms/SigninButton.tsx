import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useMutation } from 'react-query';
import { useDispatch, useSelector } from 'react-redux';
import { RootStackParamList } from '../../../../@types/root-stack-param-list';
import { ISigninForm } from '../../../../@types/signin-form';
import { Button } from '../../../common/components/Button';
import { RootState } from '../../../common/redux';
import { init } from '../../redux/signin-redux';
import { requestSignin } from '../../services/signin.service';

export function SigninButton(): JSX.Element {
  const signinForm = useSelector((state: RootState) => state.signin);
  const dispatch = useDispatch();
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const signin = useMutation(
    (formData: ISigninForm) => requestSignin(formData),
    {
      onSuccess: async () => {
        dispatch(init());
        navigation.pop();
      },
    },
  );

  return <Button title="로그인" onPress={() => signin.mutate(signinForm)} />;
}
