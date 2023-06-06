import axios from 'axios';
import { SignupFormType } from '../../../@types/signup-form';
import { SIGNUP_URL } from '../../common/utils/url';

export async function requestSignup(form: SignupFormType) {
  return await axios.post(SIGNUP_URL, form);
}
