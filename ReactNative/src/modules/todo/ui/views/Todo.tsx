import { css } from '@emotion/native';
import { useIsFocused } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import { ActivityIndicator, SafeAreaView } from 'react-native';
import { useQuery } from 'react-query';
import { layout } from '../../../common/styles/layout';
import { rem } from '../../../common/styles/size';
import { requestGetTodoList } from '../../services/get-todo-list.service';
import { FloatingButton } from '../atoms/FloatingButton';
import { AddModal } from '../blocks/AddModal';
import { AuthForm } from '../blocks/AuthForm';
import { TodoList } from '../blocks/TodoList';

export function Todo(): JSX.Element {
  const [modal, setModal] = useState<boolean>(false);

  const isFocused = useIsFocused();

  const { isLoading, error, data, refetch } = useQuery(
    'getTodo',
    () => requestGetTodoList(),
    {
      retry: 0,
    },
  );

  useEffect(() => {
    refetch();
  }, [isFocused, refetch, data]);

  if (isLoading) {
    return (
      <SafeAreaView style={notAuthLayout}>
        <ActivityIndicator size="large" />
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
      <TodoList todos={data!.todos} />
      <FloatingButton refetch={refetch} setModal={() => setModal(!modal)} />
      <AddModal visible={modal} setVisible={() => setModal(!modal)} />
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
