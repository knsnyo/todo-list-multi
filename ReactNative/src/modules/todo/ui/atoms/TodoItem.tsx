import { css } from '@emotion/native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Pressable, Text, View } from 'react-native';
import { StackParamList } from '../../../../@types/navigation';
import { Todo } from '../../../../@types/todo';
import { WHITE } from '../../../common/styles/color';
import { rem, vh, vw } from '../../../common/styles/size';

export function TodoItem({ idx, user, memo }: Todo): JSX.Element {
  const navigation = useNavigation<NativeStackNavigationProp<StackParamList>>();

  return (
    <Pressable onPress={() => navigation.push('/todo', { idx: idx })}>
      <View key={idx} style={todoCss}>
        <Text>{memo}</Text>
      </View>
    </Pressable>
  );
}

export const todoCss = css`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  width: ${vw(100)};
  padding: ${rem(2)};
  background-color: ${WHITE};
  height: ${vh(10)};
`;
