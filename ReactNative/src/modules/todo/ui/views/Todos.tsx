import { css } from '@emotion/native';
import { useIsFocused } from '@react-navigation/native';
import { useEffect } from 'react';
import { ActivityIndicator, SafeAreaView, Text } from 'react-native';
import { useQuery } from 'react-query';
import { layout } from '../../../common/styles/layout';
import { requestGetTodos } from '../../services/get-todos.service';
import { FloatingButton } from '../atoms/FloatingButton';
import { NoAuth } from '../blocks/NoAuth';
import { TodoList } from '../blocks/TodoList';

export function Todos(): JSX.Element {
  const isFocused = useIsFocused();
  const { isLoading, data, error, refetch } = useQuery(
    'getTodos',
    () => requestGetTodos(),
    {
      retry: 0,
    },
  );

  useEffect(() => {
    refetch();
  }, [isFocused, refetch, data]);

  if (isLoading) {
    return (
      <SafeAreaView style={centerLayout}>
        <ActivityIndicator size="large" />
      </SafeAreaView>
    );
  }

  if (error) {
    return (
      <SafeAreaView style={centerLayout}>
        <NoAuth />
      </SafeAreaView>
    );
  }

  if (0 === data!.todos.length) {
    return (
      <SafeAreaView style={centerLayout}>
        <Text>할일을 입력해주세요</Text>
        <FloatingButton refetch={refetch} />
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={centerLayout}>
      <TodoList todos={data!.todos} />
      <FloatingButton refetch={refetch} />
    </SafeAreaView>
  );
}

const centerLayout = css`
  ${layout}
  justify-content: center;
  flex: 1;
`;
