import { css } from '@emotion/native';
import { WHITE } from './color';
import { rem } from './size';

export const layout = css`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  padding: ${rem(2)};
  background-color: ${WHITE};
`;
