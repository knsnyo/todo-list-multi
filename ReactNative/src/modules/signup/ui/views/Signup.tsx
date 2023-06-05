import { css } from '@emotion/native';
import { SafeAreaView, StatusBar } from 'react-native';
import { layout } from '../../../common/ui/layouts/layout';
import { SignupForm } from '../blocks/SignupForm';

export function Signup(): JSX.Element {
  return (
    <SafeAreaView style={signupLayout}>
      <StatusBar />
      <SignupForm />
    </SafeAreaView>
  );
}

const signupLayout = css`
  ${layout}
  justify-content: space-around;
`;
