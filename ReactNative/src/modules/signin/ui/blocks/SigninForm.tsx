import { View } from 'react-native';
import { ISigninForm } from '../../../../@types/signin-form';
import { formCss } from '../../../common/styles/form-css';
import { IdInput } from '../atoms/IdInput';
import { PasswordInput } from '../atoms/PasswordInput';
import { SigninButton } from '../atoms/SigninButton';

type Props = {
  formData: ISigninForm;
  formHandler: (key: string, value: string) => void;
  onPress: () => void;
};

export function SigninForm({
  formData,
  formHandler,
  onPress,
}: Props): JSX.Element {
  return (
    <View style={formCss}>
      <IdInput
        value={formData.id}
        onChangeText={(text) => formHandler('id', text)}
      />
      <PasswordInput
        value={formData.password}
        onChangeText={(text) => formHandler('password', text)}
      />
      <SigninButton onPress={() => onPress()} />
    </View>
  );
}
