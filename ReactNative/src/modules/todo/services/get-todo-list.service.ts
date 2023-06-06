import axios from 'axios';
import { TODO_URL } from '../../common/utils/url';

export async function requestDeleteTodo() {
  return await axios.get(`${TODO_URL}`);
}
