import { css } from '@emotion/native';
import { View } from 'react-native';
import { SwipeListView } from 'react-native-swipe-list-view';
import { ITodos } from '../../../../@types/todo';
import { DeleteTodoButton } from '../atoms/DeleteTodoButton';
import { TodoItem } from '../atoms/TodoItem';
import { UpdateTodoButton } from '../atoms/UpdateTodoButton';

export function TodoList({ todos }: ITodos): JSX.Element {
  return (
    <View>
      <SwipeListView
        data={todos}
        renderItem={(data: any, rowMap) => (
          <TodoItem
            idx={data.item.idx}
            user={data.item.user}
            memo={data.item.memo}
          />
        )}
        renderHiddenItem={(data: any, rowMap) => (
          <View style={hiddenItemCss}>
            <UpdateTodoButton />
            <DeleteTodoButton />
          </View>
        )}
        leftOpenValue={40}
        rightOpenValue={-40}
      />
    </View>
  );
}

const hiddenItemCss = css`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
