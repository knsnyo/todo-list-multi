import { ITodos } from '../../../@types/todo';
import { TokenAxios } from '../../common/utils/token-axios';
import { TODO_URL } from '../../common/utils/url';

export async function requestGetTodos(): Promise<ITodos> {
  const AXIOS = await TokenAxios();
  return await AXIOS.get(TODO_URL);
}
