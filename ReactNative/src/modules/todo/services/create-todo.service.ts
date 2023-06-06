import axios from 'axios';
import { TodoFormType } from '../../../@types/todo.form';
import { TODO_URL } from '../../common/utils/url';

export async function requestCreateTodo(form: TodoFormType) {
  return await axios.post(TODO_URL, form);
}
