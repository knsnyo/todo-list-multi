import { css } from '@emotion/native';
import { Pressable, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useMutation } from 'react-query';
import { ITodoForm } from '../../../../@types/todo-form';
import { rem, vh } from '../../../common/styles/size';
import { requestUpdateTodo } from '../../services/update-todo.service';

export function UpdateTodoButton(): JSX.Element {
  const updateTodo = useMutation(({ idx, memo }: ITodoForm) =>
    requestUpdateTodo({ idx, memo }),
  );
  return (
    <Pressable onPress={() => updateTodo.mutate({ idx: 1, memo: '' })}>
      <View style={style}>
        <Icon name="create" color="#0000ff" size={30} />
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
