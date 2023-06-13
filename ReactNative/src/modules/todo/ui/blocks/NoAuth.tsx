import { View } from 'react-native';
import { formCss } from '../../../common/styles/form-css';
import { SigninNavButton } from '../atoms/SigninNavButton';
import { SignupNavButton } from '../atoms/SignupNavButton';

export function NoAuth(): JSX.Element {
  return (
    <View style={formCss}>
      <SigninNavButton />
      <SignupNavButton />
    </View>
  );
}
