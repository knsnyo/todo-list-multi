import { useDispatch, useSelector } from 'react-redux';
import { Input } from '../../../common/components/Input';
import { RootState } from '../../../common/redux';
import { changeId } from '../../redux/signup-redux';

export function IdInput(): JSX.Element {
  const id = useSelector((state: RootState) => state.signup.id);
  const dispatch = useDispatch();

  return (
    <Input
      value={id}
      onChangeText={(text) => dispatch(changeId(text))}
      placeholder="아이디"
      secureTextEntry={false}
    />
  );
}
