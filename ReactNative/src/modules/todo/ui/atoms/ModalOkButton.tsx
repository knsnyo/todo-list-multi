import { css } from '@emotion/native';
import { Pressable, Text } from 'react-native';
import { BLACK, WHITE } from '../../../common/styles/color';
import { rem, vw } from '../../../common/styles/size';

type Props = {
  onPress: () => void;
};

export function ModalOkButton({ onPress }: Props): JSX.Element {
  return (
    <Pressable onPress={onPress} style={styles.container}>
      <Text style={styles.text}>추가</Text>
    </Pressable>
  );
}

const styles = {
  container: css`
    background-color: ${BLACK};
    border-radius: ${rem(4)};
    display: flex;
    justify-content: center;
    align-items: center;
    width: ${vw(40)};
    padding: ${rem(2)};
  `,
  text: css`
    color: ${WHITE};
    font-weight: bold;
    font-size: ${rem(2)};
  `,
};
