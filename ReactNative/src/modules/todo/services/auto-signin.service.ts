import { TokenAxios } from '../../common/utils/token-axios';
import { SIGNIN_URL } from '../../common/utils/url';

export async function requestAutoSignin(): Promise<void> {
  const AXIOS = await TokenAxios();
  await AXIOS.get(SIGNIN_URL);
}
