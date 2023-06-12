import { css } from '@emotion/native';
import { SafeAreaView } from 'react-native';
import { layout } from '../../../common/styles/layout';

export function UpdateTodo(): JSX.Element {
  return <SafeAreaView style={centerLayout}></SafeAreaView>;
}

const centerLayout = css`
  ${layout}
  justify-content: center;
  flex: 1;
`;
