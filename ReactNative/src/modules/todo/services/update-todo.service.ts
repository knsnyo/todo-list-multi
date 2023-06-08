import { ITodoForm } from '../../../@types/todo-form';
import { TokenAxios } from '../../common/utils/token-axios';
import { TODO_URL } from '../../common/utils/url';

export async function requestUpdateTodo(
  idx: number,
  form: ITodoForm,
): Promise<void> {
  const AXIOS = await TokenAxios();
  await AXIOS.put(`${TODO_URL}/${idx}`, form);
}
