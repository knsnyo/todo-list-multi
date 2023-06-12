import { Text, View } from 'react-native';
import { formCss } from '../../../common/styles/form-css';
import { SigninNavButton } from '../atoms/SigninNavButton';
import { SignupNavButton } from '../atoms/SignupNavButton';

export function NoAuth(): JSX.Element {
  return (
    <View style={formCss}>
      <Text>로그인 후 사용해주세요</Text>
      <SigninNavButton />
      <SignupNavButton />
    </View>
  );
}
