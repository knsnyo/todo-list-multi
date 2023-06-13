import { css } from '@emotion/native';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Pressable, Text } from 'react-native';
import { useMutation } from 'react-query';
import { queryClient } from '../../../../../App';
import { StackParamList } from '../../../../@types/navigation';
import { requestDeleteTodo } from '../../services/delete-todo.service';

type TRouteProp = RouteProp<StackParamList, '/todo'>;

export function DeleteButton(): JSX.Element {
  const route = useRoute<TRouteProp>();
  const navigation = useNavigation<NativeStackNavigationProp<StackParamList>>();
  const deleteTodo = useMutation(() => requestDeleteTodo(route.params.idx), {
    onSuccess: () => {
      queryClient.invalidateQueries('getTodos');
      navigation.pop();
    },
  });

  return (
    <Pressable onPress={() => deleteTodo.mutate()}>
      <Text style={deleteTextCss}>삭제</Text>
    </Pressable>
  );
}

const deleteTextCss = css`
  color: #ff0000;
`;
