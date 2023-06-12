import { css } from '@emotion/native';
import { useIsFocused } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import { ActivityIndicator, SafeAreaView, Text } from 'react-native';
import { useQuery } from 'react-query';
import { layout } from '../../../common/styles/layout';
import { requestGetTodoList } from '../../services/get-todo-list.service';
import { FloatingButton } from '../atoms/FloatingButton';
import { AuthForm } from '../blocks/AuthForm';
import { TodoList } from '../blocks/TodoList';

export function Todo(): JSX.Element {
  const [modal, setModal] = useState<boolean>(false);
  const isFocused = useIsFocused();
  const { isLoading, error, data, refetch } = useQuery(
    'getTodo',
    () => requestGetTodoList(),
    { retry: 0 },
  );

  useEffect(() => {
    refetch();
  }, [isFocused, refetch, data]);

  // const createTodo = useMutation(
  //   (formData: ITodoForm) => requestCreateTodo(formData),
  //   {
  //     onSuccess: () => {
  //       setModal(false);
  //       refetch();
  //     },
  //   },
  // );

  if (isLoading) {
    return <ActivityIndicator size="large" />;
  }

  if (error) {
    return (
      <SafeAreaView style={centerLayout}>
        <AuthForm />
      </SafeAreaView>
    );
  }

  if (0 === data?.todos.length) {
    return (
      <SafeAreaView style={centerLayout}>
        <Text>할일을 입력해주세요</Text>
        <FloatingButton refetch={refetch} setModal={() => setModal(!modal)} />
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={centerLayout}>
      <TodoList todos={data!.todos} />
      <FloatingButton refetch={refetch} setModal={() => setModal(!modal)} />
    </SafeAreaView>
  );
}

const centerLayout = css`
  ${layout}
  justify-content: center;
  flex: 1;
`;
