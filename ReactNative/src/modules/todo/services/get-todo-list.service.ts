import { ITodoForm } from '../../../@types/todo.form';
import { TokenAxios } from '../../common/utils/token-axios';
import { TODO_URL } from '../../common/utils/url';

export async function requestGetTodoList(): Promise<ITodoForm[]> {
  const AXIOS = await TokenAxios();
  return await AXIOS.get(TODO_URL);
}
