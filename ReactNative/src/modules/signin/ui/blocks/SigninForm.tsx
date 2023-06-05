import { css } from '@emotion/native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useState } from 'react';
import { View } from 'react-native';
import { useMutation } from 'react-query';
import { useDispatch } from 'react-redux';
import { RootStackParamList } from '../../../../@types/root-stack-param-list';
import { SigninFormType } from '../../../../@types/signin-form';
import { signin } from '../../../common/redux/token.redux';
import { rem, vw } from '../../../common/styles/size';
import { requestSignin } from '../../services/signin.service';
import { IdInput } from '../atoms/IdInput';
import { PasswordInput } from '../atoms/PasswordInput';
import { SigninButton } from '../atoms/SigninButton';

export function SigninForm() {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const dispatch = useDispatch();

  const mutation = useMutation(
    (formData: SigninFormType) => requestSignin(formData),
    {
      onSuccess: (response) => {
        dispatch(signin(response.data));
        navigation.pop();
      },
    },
  );

  const [formData, setFormData] = useState({
    id: '',
    password: '',
  });

  const formHandler = (key: string, value: string) =>
    setFormData({
      ...formData,
      [key]: value,
    });

  return (
    <View style={formLayout}>
      <IdInput
        value={formData.id}
        onChangeText={(text) => formHandler('id', text)}
      />
      <PasswordInput
        value={formData.password}
        onChangeText={(text) => formHandler('password', text)}
      />
      <SigninButton onPress={() => mutation.mutate(formData)} />
    </View>
  );
}

const formLayout = css`
  width: ${vw(100)};
  gap: ${rem(2)};
  flex-direction: column;
  align-items: center;
`;
