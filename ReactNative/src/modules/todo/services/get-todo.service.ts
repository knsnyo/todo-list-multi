import { ITodo } from '../../../@types/todo';
import { TokenAxios } from '../../common/utils/token-axios';
import { TODO_URL } from '../../common/utils/url';

export async function requestGetTodo(idx: number): Promise<ITodo> {
  const AXIOS = await TokenAxios();
  return await AXIOS.get(`${TODO_URL}/${idx}`);
}
