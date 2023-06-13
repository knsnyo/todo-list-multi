import { css } from '@emotion/native';
import { RouteProp, useRoute } from '@react-navigation/native';
import { useEffect } from 'react';
import { ActivityIndicator, SafeAreaView, Text } from 'react-native';
import { useQuery } from 'react-query';
import { useDispatch } from 'react-redux';
import { StackParamList } from '../../../../@types/navigation';
import { layout } from '../../../common/styles/layout';
import { changeMemo } from '../../redux/todo-redux';
import { requestGetTodo } from '../../services/get-todo.service';
import { UpdateTodoForm } from '../blocks/UpdateTodoForm';

type TRouteProp = RouteProp<StackParamList, '/update'>;

export function UpdateTodo(): JSX.Element {
  const dispatch = useDispatch();
  const route = useRoute<TRouteProp>();

  const { isLoading, error, data } = useQuery('getTodo', () =>
    requestGetTodo(route.params.idx),
  );

  useEffect(() => {
    dispatch(changeMemo(data?.todo.memo ?? ''));
  }, []);

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
        <Text>ERROR</Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={centerLayout}>
      <UpdateTodoForm />
    </SafeAreaView>
  );
}

const centerLayout = css`
  ${layout}
  justify-content: space-around;
  flex: 1;
`;
