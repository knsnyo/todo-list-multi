import { Text, View } from 'react-native';
import { formCss } from '../../../common/styles/form-css';
import { SigninButton } from '../atoms/SigninButton';
import { SignupButton } from '../atoms/SignupButton';

export function AuthForm(): JSX.Element {
  return (
    <View style={formCss}>
      <Text>로그인 후 사용해주세요</Text>
      <SigninButton />
      <SignupButton />
    </View>
  );
}
