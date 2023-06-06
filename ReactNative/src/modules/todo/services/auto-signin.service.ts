import { TokenAxios } from '../../common/utils/token-axios';
import { SIGNIN_URL } from '../../common/utils/url';

export async function requestAutoSignin() {
  const AXIOS = await TokenAxios();
  return await AXIOS.get(SIGNIN_URL);
}
