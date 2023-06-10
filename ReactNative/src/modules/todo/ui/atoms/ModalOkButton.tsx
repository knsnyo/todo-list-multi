import { css } from '@emotion/native';
import { Pressable, Text } from 'react-native';
import { BLACK } from '../../../common/styles/color';
import { rem } from '../../../common/styles/size';

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
    display: flex;
    justify-content: center;
    align-items: center;
  `,
  text: css`
    color: ${BLACK};
    font-weight: bold;
    font-size: ${rem(2)};
  `,
};
