import { css } from '@emotion/native';
import { Pressable, Text } from 'react-native';
import { ITodo } from '../../../../@types/todo';
import { GREY, WHITE } from '../../../common/styles/color';
import { rem, vw } from '../../../common/styles/size';

export function TodoItem({ idx, user, memo }: ITodo): JSX.Element {
  return (
    <Pressable key={idx} style={todoCss}>
      <Text>{memo}</Text>
    </Pressable>
  );
}

export const todoCss = css`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${vw(90)};
  padding: ${rem(2)};
  background-color: ${WHITE};
  border: ${rem(0.1)} solid ${GREY};
  border-radius: ${rem(0.8)};
  margin-top: ${rem(1)};
  margin-bottom: ${rem(1)};
  box-shadow: 0 ${rem(0.4)} ${rem(0.2)} ${GREY};
`;
