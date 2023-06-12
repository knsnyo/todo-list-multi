import { View } from 'react-native';
import { formCss } from '../../../common/styles/form-css';
import { IdInput } from '../atoms/IdInput';
import { PasswordInput } from '../atoms/PasswordInput';
import { PasswordValidInput } from '../atoms/PasswordValidInput';
import { SignupButton } from '../atoms/SignupButton';

export function SignupForm(): JSX.Element {
  return (
    <View style={formCss}>
      <IdInput />
      <PasswordInput />
      <PasswordValidInput />
      <SignupButton />
    </View>
  );
}
