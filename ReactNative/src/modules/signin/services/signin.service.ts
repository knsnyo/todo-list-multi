import axios from 'axios';
import { SigninFormType } from '../../../@types/signin-form';
import { SIGNIN_URL } from '../../common/utils/url';

export async function requestSignin(form: SigninFormType) {
  return await axios.post(SIGNIN_URL, form);
}
