import { View } from 'react-native';
import { formCss } from '../../../common/styles/form-css';
import { IdInput } from '../atoms/IdInput';
import { PasswordInput } from '../atoms/PasswordInput';
import { SigninButton } from '../atoms/SigninButton';

export function SigninForm(): JSX.Element {
  return (
    <View style={formCss}>
      <IdInput />
      <PasswordInput />
      <SigninButton />
    </View>
  );
}
