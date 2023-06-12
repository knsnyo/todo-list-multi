import { FlatList } from 'react-native';
import { ITodos } from '../../../../@types/todo';
import { TodoItem } from '../atoms/TodoItem';

export function TodoList({ todos }: ITodos): JSX.Element {
  return (
    <FlatList
      data={todos}
      renderItem={({ item }) => (
        <TodoItem idx={item.idx} user={item.user} memo={item.memo} />
      )}
    />
  );
}
