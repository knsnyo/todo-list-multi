import { css } from '@emotion/native';
import { SafeAreaView, StatusBar } from 'react-native';
import { layout } from '../../../common/styles/layout';
import { SigninForm } from '../blocks/SigninForm';

export function Signin(): JSX.Element {
  return (
    <SafeAreaView style={signinLayout}>
      <StatusBar />
      <SigninForm />
    </SafeAreaView>
  );
}

const signinLayout = css`
  ${layout}
  justify-content: space-around;
  flex: 1;
`;
