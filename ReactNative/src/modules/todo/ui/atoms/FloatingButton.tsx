import { FloatingAction } from 'react-native-floating-action';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { resetAllTokens } from '../../../common/storage/key-chain';
import { BLACK, WHITE } from '../../../common/styles/color';

type Props = {
  refetch: () => void;
};

export function FloatingButton({ refetch }: Props): JSX.Element {
  const actions = [
    {
      text: '추가',
      name: 'ADD',
      position: 1,
      color: BLACK,
      icon: <Icon name="create" color={WHITE} size={20} />,
    },
    {
      text: '로그아웃',
      name: 'SIGNOUT',
      position: 2,
      color: BLACK,
      icon: <Icon name="person" color={WHITE} size={20} />,
    },
  ];

  const onPressItem = async (name: string | undefined) => {
    if ('ADD' === name) {
    }
    if ('SIGNOUT' === name) {
      await resetAllTokens().then(() => refetch());
    }
  };

  return (
    <FloatingAction
      actions={actions}
      onPressItem={(name) => onPressItem(name)}
      color={BLACK}
    />
  );
}
