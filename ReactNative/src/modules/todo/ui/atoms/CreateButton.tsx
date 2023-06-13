import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useMutation } from 'react-query';
import { useDispatch, useSelector } from 'react-redux';
import { queryClient } from '../../../../../App';
import { StackParamList } from '../../../../@types/navigation';
import { Button } from '../../../common/components/Button';
import { RootState } from '../../../common/redux';
import { changeMemo } from '../../redux/todo-redux';
import { requestCreateTodo } from '../../services/create-todo.service';

export function CreateButton(): JSX.Element {
  const todoForm = useSelector((state: RootState) => state.todo);
  const dispatch = useDispatch();
  const navigation = useNavigation<NativeStackNavigationProp<StackParamList>>();

  const createTodo = useMutation(() => requestCreateTodo(todoForm), {
    onSuccess: () => {
      dispatch(changeMemo(''));
      queryClient.invalidateQueries('getTodos');
      navigation.pop();
    },
  });

  return <Button title="등록" onPress={() => createTodo.mutate()} />;
}
