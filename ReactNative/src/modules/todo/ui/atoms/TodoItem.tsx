import { css } from '@emotion/native';
import { Text, View } from 'react-native';
import { ITodo } from '../../../../@types/todo';
import { WHITE } from '../../../common/styles/color';
import { rem, vh, vw } from '../../../common/styles/size';

export function TodoItem({ idx, user, memo }: ITodo): JSX.Element {
  return (
    <View key={idx} style={todoCss}>
      <Text>{memo}</Text>
    </View>
  );
}

export const todoCss = css`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${vw(100)};
  padding: ${rem(2)};
  background-color: ${WHITE};
  height: ${vh(10)};
`;

//  box-shadow: 0 ${rem(0.4)} ${rem(0.2)} ${GREY};
