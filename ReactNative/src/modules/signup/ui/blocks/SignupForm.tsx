import { View } from 'react-native';
import { ISignupForm } from '../../../../@types/signup-form';
import { formCss } from '../../../common/styles/form-css';
import { IdInput } from '../atoms/IdInput';
import { PasswordInput } from '../atoms/PasswordInput';
import { PasswordValidInput } from '../atoms/PasswordValidInput';
import { SignupButton } from '../atoms/SignupButton';

type Props = {
  formData: ISignupForm;
  formHandler: (key: string, value: string) => void;
  onPress: () => void;
};

export function SignupForm({
  formData,
  formHandler,
  onPress,
}: Props): JSX.Element {
  return (
    <View style={formCss}>
      <IdInput
        value={formData.id}
        onChangeText={(value) => formHandler('id', value)}
      />
      <PasswordInput
        value={formData.password}
        onChangeText={(value) => formHandler('password', value)}
      />
      <PasswordValidInput
        value={formData.passwordValid}
        onChangeText={(value) => formHandler('passwordValid', value)}
      />
      <SignupButton onPress={() => onPress()} />
    </View>
  );
}
