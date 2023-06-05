import { css } from '@emotion/native';
import { View } from 'react-native';
import { rem, vw } from '../../../common/styles/size';
import { SigninButton } from '../atoms/SigninButton';
import { SignupButton } from '../atoms/SignupButton';

export function AuthForm(): JSX.Element {
  return (
    <View style={formLayout}>
      <SigninButton />
      <SignupButton />
    </View>
  );
}

const formLayout = css`
  width: ${vw(100)};
  gap: ${rem(2)};
  flex-direction: column;
  align-items: center;
`;
