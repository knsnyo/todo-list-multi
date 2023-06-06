import axios from 'axios';
import { TODO_URL } from '../../common/utils/url';

export async function requestDeleteTodo(idx: number) {
  return await axios.delete(`${TODO_URL}/${idx}`);
}
