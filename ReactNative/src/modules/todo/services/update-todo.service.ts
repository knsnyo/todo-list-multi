import axios from 'axios';
import { TodoFormType } from '../../../@types/todo.form';
import { TODO_URL } from '../../common/utils/url';

export async function requestUpdateTodo(idx: number, form: TodoFormType) {
  return await axios.put(`${TODO_URL}/${idx}`, form);
}
