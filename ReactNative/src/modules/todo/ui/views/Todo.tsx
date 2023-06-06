import { css } from '@emotion/native';
import React from 'react';
import { SafeAreaView } from 'react-native';
import { layout } from '../../../common/ui/layouts/layout';
import { AuthForm } from '../blocks/AuthForm';

export function Todo(): JSX.Element {
  return (
    <SafeAreaView style={notAuthLayout}>
      <AuthForm />
    </SafeAreaView>
  );
}

const notAuthLayout = css`
  ${layout}
  justify-content: center;
`;

const authLayout = css`
  ${layout}
`;
