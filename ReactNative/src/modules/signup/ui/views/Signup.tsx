import { css } from '@emotion/native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useState } from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import { useMutation } from 'react-query';
import { RootStackParamList } from '../../../../@types/root-stack-param-list';
import { ISignupForm } from '../../../../@types/signup-form';
import { layout } from '../../../common/styles/layout';
import { requestSignup } from '../../services/signup.service';
import { SignupForm } from '../blocks/SignupForm';

export function Signup(): JSX.Element {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const signup = useMutation(
    (formData: ISignupForm) => requestSignup(formData),
    { onSuccess: () => navigation.pop() },
  );

  const [formData, setFormData] = useState<ISignupForm>({
    id: '',
    password: '',
    passwordValid: '',
  });

  const formHandler = (key: string, value: string) =>
    setFormData({
      ...formData,
      [key]: value,
    });

  return (
    <SafeAreaView style={signupLayout}>
      <StatusBar />
      <SignupForm
        formData={formData}
        formHandler={formHandler}
        onPress={() => signup.mutate(formData)}
      />
    </SafeAreaView>
  );
}

const signupLayout = css`
  ${layout}
  justify-content: space-around;
`;
