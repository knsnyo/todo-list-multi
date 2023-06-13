import { css } from '@emotion/native';
import { SafeAreaView } from 'react-native';
import { layout } from '../../../common/styles/layout';
import { CreateTodoForm } from '../blocks/CreateTodoForm';

export function CreateTodo(): JSX.Element {
  return (
    <SafeAreaView style={centerLayout}>
      <CreateTodoForm />
    </SafeAreaView>
  );
}

const centerLayout = css`
  ${layout}
  justify-content: center;
  flex: 1;
`;
