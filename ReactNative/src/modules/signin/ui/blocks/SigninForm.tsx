import { css } from '@emotion/native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useState } from 'react';
import { View } from 'react-native';
import { useMutation } from 'react-query';
import { useDispatch } from 'react-redux';
import { RootStackParamList } from '../../../../@types/root-stack-param-list';
import { SigninFormType } from '../../../../@types/signin-form';
import { ITokens } from '../../../../@types/tokens';
import { signin } from '../../../common/redux/token.redux';
import * as Keychain from '../../../common/storage/key-chain';
import { rem, vw } from '../../../common/styles/size';
import { requestSignin } from '../../services/signin.service';
import { IdInput } from '../atoms/IdInput';
import { PasswordInput } from '../atoms/PasswordInput';
import { SigninButton } from '../atoms/SigninButton';

export function SigninForm(): JSX.Element {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const dispatch = useDispatch();

  const mutation = useMutation(
    (formData: SigninFormType) => requestSignin(formData),
    {
      onSuccess: async (response) => {
        const { accessToken: ACCESS_TOKEN, refreshToken: REFRESH_TOKEN } =
          response.data as ITokens;
        dispatch(signin(response.data));
        await Promise.all([
          Keychain.setAccessToken(ACCESS_TOKEN),
          Keychain.setRefreshToken(REFRESH_TOKEN),
        ]);
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
