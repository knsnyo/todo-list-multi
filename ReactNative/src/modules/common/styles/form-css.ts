import { css } from '@emotion/native';
import { rem, vw } from './size';

export const formCss = css`
  width: ${vw(100)};
  gap: ${rem(2)};
  flex-direction: column;
  align-items: center;
`;
