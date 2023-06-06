import { ITodoForm } from '../../../@types/todo.form';
import { TokenAxios } from '../../common/utils/token-axios';
import { TODO_URL } from '../../common/utils/url';

export async function requestCreateTodo(form: ITodoForm) {
  const AXIOS = await TokenAxios();
  return await AXIOS.post(TODO_URL, form);
}
