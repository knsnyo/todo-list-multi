import { useDispatch, useSelector } from 'react-redux';
import { Input } from '../../../common/components/Input';
import { RootState } from '../../../common/redux';
import { changePassword } from '../../redux/signup-redux';

export function PasswordInput(): JSX.Element {
  const password = useSelector((state: RootState) => state.signup.password);
  const dispatch = useDispatch();

  return (
    <Input
      value={password}
      onChangeText={(text) => dispatch(changePassword(text))}
      placeholder="비밀번호"
      secureTextEntry={true}
    />
  );
}
