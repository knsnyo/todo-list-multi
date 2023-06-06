import { css } from '@emotion/native';
import { useIsFocused } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { ActivityIndicator, SafeAreaView } from 'react-native';
import { useQuery } from 'react-query';
import { resetAllTokens } from '../../../common/storage/key-chain';
import { layout } from '../../../common/styles/layout';
import { rem } from '../../../common/styles/size';
import { requestGetTodoList } from '../../services/get-todo-list.service';
import { SignoutButton } from '../atoms/SignoutButton';
import { AuthForm } from '../blocks/AuthForm';
import { TodoList } from '../blocks/TodoList';

export function Todo(): JSX.Element {
  const isFocused = useIsFocused();

  const { isLoading, error, data, refetch } = useQuery('getTodo', () =>
    requestGetTodoList(),
  );

  const buttonHandler = async () => {
    await resetAllTokens();
    refetch();
  };

  useEffect(() => {
    refetch();
  }, [isFocused]);

  if (isLoading) {
    return (
      <SafeAreaView style={notAuthLayout}>
        <ActivityIndicator />
      </SafeAreaView>
    );
  }

  if (error) {
    return (
      <SafeAreaView style={notAuthLayout}>
        <AuthForm />
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={authLayout}>
      <TodoList />
      <SignoutButton onPress={() => buttonHandler()} />
    </SafeAreaView>
  );
}

const notAuthLayout = css`
  ${layout}
  justify-content: center;
`;

const authLayout = css`
  ${layout}
  justify-content: flex-start;
  gap: ${rem(2)};
`;
