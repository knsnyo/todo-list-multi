import { Text, View } from 'react-native';
import { formCss } from '../../../common/styles/form-css';
import { TodoInput } from '../atoms/TodoInput';
import { UpdateButton } from '../atoms/UpdateButton';

export function UpdateTodoForm(): JSX.Element {
  return (
    <View style={formCss}>
      <Text>할 일 수정</Text>
      <TodoInput />
      <UpdateButton />
    </View>
  );
}
