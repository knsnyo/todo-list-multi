import { css } from '@emotion/native';
import { Pressable, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useMutation } from 'react-query';
import { rem, vh } from '../../../common/styles/size';
import { requestDeleteTodo } from '../../services/delete-todo.service';

export function DeleteTodoButton(): JSX.Element {
  const deleteTodo = useMutation((idx: number) => requestDeleteTodo(idx));
  return (
    <Pressable onPress={() => deleteTodo.mutate(1)}>
      <View style={style}>
        <Icon name="delete" color="#ff0000" size={30} />
      </View>
    </Pressable>
  );
}

const style = css`
  padding: ${rem(1)};
  justify-content: center;
  align-items: center;
  height: ${vh(10)};
`;
