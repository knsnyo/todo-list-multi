import { css } from '@emotion/native';
import { Pressable, Text } from 'react-native';
import { GREY } from '../../../common/styles/color';
import { rem } from '../../../common/styles/size';

type Props = {
  onPress: () => void;
};

export function ModalCancelButton({ onPress }: Props): JSX.Element {
  return (
    <Pressable onPress={onPress} style={styles.container}>
      <Text style={styles.text}>취소</Text>
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
    color: ${GREY};
    font-weight: bold;
    font-size: ${rem(2)};
  `,
};
