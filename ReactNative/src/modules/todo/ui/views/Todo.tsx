import { css } from '@emotion/native';
import { useIsFocused } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { SafeAreaView } from 'react-native';
import { layout } from '../../../common/ui/layouts/layout';
import { AuthForm } from '../blocks/AuthForm';

export function Todo(): JSX.Element {
  const isFocused = useIsFocused();

  useEffect(() => {}, [isFocused]);

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

const authLayout = css``;
