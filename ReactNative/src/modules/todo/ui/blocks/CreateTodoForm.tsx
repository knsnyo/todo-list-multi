import { Text, View } from 'react-native';
import { formCss } from '../../../common/styles/form-css';
import { CreateButton } from '../atoms/CreateButton';
import { TodoInput } from '../atoms/TodoInput';

export function CreateTodoForm(): JSX.Element {
  return (
    <View style={formCss}>
      <Text>할 일 입력</Text>
      <TodoInput />
      <CreateButton />
    </View>
  );
}
