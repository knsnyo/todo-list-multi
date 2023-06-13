import { css } from '@emotion/native';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Pressable, Text } from 'react-native';
import { StackParamList } from '../../../../@types/navigation';

type TRouteProp = RouteProp<StackParamList, '/todo'>;

export function UpdateNavButton(): JSX.Element {
  const route = useRoute<TRouteProp>();
  const navigation = useNavigation<NativeStackNavigationProp<StackParamList>>();
  return (
    <Pressable
      onPress={() => navigation.push('/update', { idx: route.params.idx })}
    >
      <Text style={updateTextCss}>수정</Text>
    </Pressable>
  );
}

const updateTextCss = css`
  color: #0000ff;
`;
