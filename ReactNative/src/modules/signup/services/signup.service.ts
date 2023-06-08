import axios from 'axios';
import { ISignupForm } from '../../../@types/signup-form';
import { SIGNUP_URL } from '../../common/utils/url';

export async function requestSignup(form: ISignupForm): Promise<void> {
  await axios.post(SIGNUP_URL, form);
}
