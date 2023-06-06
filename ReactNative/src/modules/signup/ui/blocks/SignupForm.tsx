import { css } from '@emotion/native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useState } from 'react';
import { View } from 'react-native';
import { useMutation } from 'react-query';
import { RootStackParamList } from '../../../../@types/root-stack-param-list';
import { SignupFormType } from '../../../../@types/signup-form';
import { rem, vw } from '../../../common/styles/size';
import { requestSignup } from '../../services/signup.service';
import { IdInput } from '../atoms/IdInput';
import { PasswordInput } from '../atoms/PasswordInput';
import { PasswordValidInput } from '../atoms/PasswordValidInput';
import { SignupButton } from '../atoms/SignupButton';

export function SignupForm(): JSX.Element {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const mutation = useMutation(
    (formData: SignupFormType) => requestSignup(formData),
    {
      onSuccess: () => navigation.pop(),
    },
  );

  const [formData, setFormData] = useState<SignupFormType>({
    id: '',
    password: '',
    passwordValid: '',
  });

  const formDataHandler = (key: string, value: string) =>
    setFormData({
      ...formData,
      [key]: value,
    });

  return (
    <View style={formLayout}>
      <IdInput
        value={formData.id}
        onChangeText={(value) => formDataHandler('id', value)}
      />
      <PasswordInput
        value={formData.password}
        onChangeText={(value) => formDataHandler('password', value)}
      />
      <PasswordValidInput
        value={formData.passwordValid}
        onChangeText={(value) => formDataHandler('passwordValid', value)}
      />
      <SignupButton onPress={() => mutation.mutate(formData)} />
    </View>
  );
}

const formLayout = css`
  width: ${vw(100)};
  gap: ${rem(2)};
  flex-direction: column;
  align-items: center;
`;
