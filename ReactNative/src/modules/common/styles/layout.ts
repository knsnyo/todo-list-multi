import { css } from '@emotion/native';
import { rem } from './size';

export const layout = css`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  margin: ${rem(2)};
`;
