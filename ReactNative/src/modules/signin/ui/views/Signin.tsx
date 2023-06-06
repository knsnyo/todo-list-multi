import { css } from '@emotion/native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useState } from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import { useMutation } from 'react-query';
import { RootStackParamList } from '../../../../@types/root-stack-param-list';
import { ISigninForm } from '../../../../@types/signin-form';
import { layout } from '../../../common/styles/layout';
import { requestSignin } from '../../services/signin.service';
import { SigninForm } from '../blocks/SigninForm';

export function Signin(): JSX.Element {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const mutation = useMutation(
    (formData: ISigninForm) => requestSignin(formData),
    { onSuccess: async () => navigation.pop() },
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
    <SafeAreaView style={signinLayout}>
      <StatusBar />
      <SigninForm
        formData={formData}
        formHandler={formHandler}
        onPress={() => mutation.mutate(formData)}
      />
    </SafeAreaView>
  );
}

const signinLayout = css`
  ${layout}
  justify-content: space-around;
  flex: 1;
`;
