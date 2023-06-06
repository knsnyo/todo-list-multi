import { TokenAxios } from '../../common/utils/token-axios';
import { TODO_URL } from '../../common/utils/url';

export async function requestDeleteTodo(idx: number) {
  const AXIOS = await TokenAxios();
  return await AXIOS.delete(`${TODO_URL}/${idx}`);
}
