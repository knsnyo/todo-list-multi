import axios from 'axios';
import { SignupFormType } from '../../../@types/signup-form';
import { SIGN_UP_URL } from '../../common/utils/url';

export async function requestSignup(form: SignupFormType) {
  return await axios.post(SIGN_UP_URL, form);
}
