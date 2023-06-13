import { css } from '@emotion/native';
import { Text, View } from 'react-native';
import { ITodo } from '../../../../@types/todo';
import { vh, vw } from '../../../common/styles/size';
import { DeleteButton } from '../atoms/DeleteButton';
import { UpdateNavButton } from '../atoms/UpdateNavButton';

export function TodoDetail({ todo }: ITodo) {
  return (
    <View>
      <View style={style.todoCss}>
        <Text>{todo.memo}</Text>
      </View>
      <View style={style.buttonGroup}>
        <UpdateNavButton />
        <DeleteButton />
      </View>
    </View>
  );
}

const style = {
  todoCss: css`
    flex: 1;
    justify-content: center;
    align-items: center;
  `,
  buttonGroup: css`
    flex-direction: row;
    justify-content: space-around;
    width: ${vw(100)};
    height: ${vh(8)};
  `,
};
