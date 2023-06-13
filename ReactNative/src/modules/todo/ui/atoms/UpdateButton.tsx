import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useMutation } from 'react-query';
import { useDispatch, useSelector } from 'react-redux';
import { queryClient } from '../../../../../App';
import { StackParamList } from '../../../../@types/navigation';
import { Button } from '../../../common/components/Button';
import { RootState } from '../../../common/redux';
import { changeMemo } from '../../redux/todo-redux';
import { requestUpdateTodo } from '../../services/update-todo.service';

type TRouteProp = RouteProp<StackParamList, '/todo'>;

export function UpdateButton(): JSX.Element {
  const todoForm = useSelector((state: RootState) => state.todo);
  const dispatch = useDispatch();
  const route = useRoute<TRouteProp>();
  const navigation = useNavigation<NativeStackNavigationProp<StackParamList>>();

  const updateTodo = useMutation(
    () => requestUpdateTodo({ idx: route.params.idx, memo: todoForm.memo }),
    {
      onSuccess: () => {
        dispatch(changeMemo(''));
        queryClient.invalidateQueries('getTodos');
        queryClient.invalidateQueries('getTodo');
        navigation.pop();
      },
    },
  );
  return <Button title="등록" onPress={() => updateTodo.mutate()} />;
}
