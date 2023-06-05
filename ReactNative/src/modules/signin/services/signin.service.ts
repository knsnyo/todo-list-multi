import axios from 'axios';
import { SigninFormType } from '../../../@types/signin-form';
import { SIGN_IN_URL } from '../../common/utils/url';

export async function requestSignin(form: SigninFormType) {
  return await axios.post(SIGN_IN_URL, form);
}
