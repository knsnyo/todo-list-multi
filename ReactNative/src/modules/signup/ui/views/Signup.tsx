import { css } from '@emotion/native';
import { useEffect } from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import { useDispatch } from 'react-redux';
import { layout } from '../../../common/styles/layout';
import { init } from '../../redux/signup-redux';
import { SignupForm } from '../blocks/SignupForm';

export function Signup(): JSX.Element {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(init());
  }, []);
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
