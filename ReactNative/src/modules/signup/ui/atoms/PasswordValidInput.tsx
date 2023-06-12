import { useDispatch, useSelector } from 'react-redux';
import { Input } from '../../../common/components/Input';
import { RootState } from '../../../common/redux';
import { changePasswordValid } from '../../redux/signup-redux';

export function PasswordValidInput(): JSX.Element {
  const passwordValid = useSelector(
    (state: RootState) => state.signup.passwordValid,
  );
  const dispatch = useDispatch();
  return (
    <Input
      value={passwordValid}
      onChangeText={(text) => dispatch(changePasswordValid(text))}
      placeholder="비밀번호확인"
      secureTextEntry={true}
    />
  );
}
