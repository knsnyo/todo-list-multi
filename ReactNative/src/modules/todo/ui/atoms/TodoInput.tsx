import { useDispatch, useSelector } from 'react-redux';
import { Input } from '../../../common/components/Input';
import { RootState } from '../../../common/redux';
import { changeMemo } from '../../redux/todo-redux';

export function TodoInput(): JSX.Element {
  const memo = useSelector((state: RootState) => state.todo.memo);
  const dispatch = useDispatch();
  return (
    <Input
      value={memo}
      onChangeText={(text) => dispatch(changeMemo(text))}
      placeholder="할일 입력"
      secureTextEntry={false}
    />
  );
}
