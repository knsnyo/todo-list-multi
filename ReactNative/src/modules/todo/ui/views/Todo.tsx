import { css } from '@emotion/native';
import { RouteProp, useIsFocused, useRoute } from '@react-navigation/native';
import { useEffect } from 'react';
import { ActivityIndicator, SafeAreaView, Text, View } from 'react-native';
import { useQuery } from 'react-query';
import { StackParamList } from '../../../../@types/navigation';
import { layout } from '../../../common/styles/layout';
import { requestGetTodo } from '../../services/get-todo.service';
import { TodoDetail } from '../blocks/TodoDetail';

type TRouteProp = RouteProp<StackParamList, '/todo'>;

export function Todo(): JSX.Element {
  const route = useRoute<TRouteProp>();
  const isFocused = useIsFocused();
  const { isLoading, error, data, refetch } = useQuery('getTodo', () =>
    requestGetTodo(route.params.idx),
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
        <View>
          <Text>ERROR</Text>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={centerLayout}>
      <TodoDetail todo={data!.todo} />
    </SafeAreaView>
  );
}

const centerLayout = css`
  ${layout}
  justify-content: center;
  flex: 1;
`;
