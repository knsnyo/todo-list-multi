import axios from 'axios';
import { ISigninForm } from '../../../@types/signin-form';
import { ITokens } from '../../../@types/tokens';
import { setAllTokens } from '../../common/storage/key-chain';
import { SIGNIN_URL } from '../../common/utils/url';

export async function requestSignin(form: ISigninForm): Promise<void> {
  const tokens: ITokens = (await axios.post(SIGNIN_URL, form)).data;
  await setAllTokens(tokens);
}
