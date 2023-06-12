import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Pressable, Text } from 'react-native';
import { StackParamList } from '../../../../@types/navigation';

export function DeleteButton(): JSX.Element {
  const navigation = useNavigation<NativeStackNavigationProp<StackParamList>>();

  return (
    <Pressable onPress={() => {}}>
      <Text>삭제</Text>
    </Pressable>
  );
}
