import { css } from '@emotion/native';
import { Pressable, Text } from 'react-native';
import { BLACK, WHITE } from '../styles/color';
import { rem, vw } from '../styles/size';

type Props = {
  title: string;
  onPress: () => void;
};

export function Button({ title, onPress }: Props): JSX.Element {
  return (
    <Pressable onPress={onPress} style={styles.container}>
      <Text style={styles.text}>{title}</Text>
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
    width: ${vw(70)};
    padding: ${rem(2)};
  `,
  text: css`
    color: ${WHITE};
    font-weight: bold;
    font-size: ${rem(2)};
  `,
};
