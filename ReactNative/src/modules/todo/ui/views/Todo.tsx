import { css } from '@emotion/native';
import { useIsFocused } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import { ActivityIndicator, SafeAreaView } from 'react-native';
import { useMutation, useQuery } from 'react-query';
import { ITodoForm } from '../../../../@types/todo-form';
import { layout } from '../../../common/styles/layout';
import { rem } from '../../../common/styles/size';
import { requestCreateTodo } from '../../services/create-todo.service';
import { requestDeleteTodo } from '../../services/delete-todo.service';
import { requestGetTodoList } from '../../services/get-todo-list.service';
import { requestUpdateTodo } from '../../services/update-todo.service';
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

  const createTodo = useMutation(
    (formData: ITodoForm) => requestCreateTodo(formData),
    {
      onSuccess: () => {
        setModal(false);
        refetch();
      },
    },
  );

  const updateTodo = useMutation(
    ({ idx, formData }: { idx: number; formData: ITodoForm }) =>
      requestUpdateTodo(idx, formData),
    { onSuccess: () => refetch() },
  );

  const deleteTodo = useMutation((idx: number) => requestDeleteTodo(idx), {
    onSuccess: () => refetch(),
  });

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
      <AddModal
        visible={modal}
        setVisible={() => setModal(!modal)}
        addTodo={(formData: ITodoForm) => createTodo.mutate(formData)}
      />
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
