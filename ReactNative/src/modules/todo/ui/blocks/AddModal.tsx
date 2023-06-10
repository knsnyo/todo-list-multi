import { css } from '@emotion/native';
import { useState } from 'react';
import { Modal, TextInput, View } from 'react-native';
import { ITodoForm } from '../../../../@types/todo-form';
import { GREY, WHITE } from '../../../common/styles/color';
import { rem, vw } from '../../../common/styles/size';
import { ModalCancelButton } from '../atoms/ModalCancelButton';
import { ModalOkButton } from '../atoms/ModalOkButton';

type Props = {
  visible: boolean;
  setVisible: () => void;
  addTodo: (form: ITodoForm) => void;
};

export function AddModal({ visible, setVisible, addTodo }: Props): JSX.Element {
  const [text, setText] = useState<string>('');
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={setVisible}
    >
      <View style={styles.container}>
        <View style={styles.modal}>
          <View style={styles.modalBody}>
            <TextInput
              style={styles.textInput}
              value={text}
              onChangeText={setText}
              placeholder="할일을 입력하세요."
            />
          </View>
          <View style={styles.modalBottom}>
            <ModalOkButton onPress={() => addTodo({ memo: text })} />
            <ModalCancelButton onPress={setVisible} />
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = {
  container: css`
    flex: 1;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
  `,
  modal: css`
    background-color: ${WHITE};
    justify-content: space-between;
    align-items: center;
    border-top-width: ${rem(0.1)};
    border-color: ${GREY};
    border-top-left-radius: ${rem(2)};
    border-top-right-radius: ${rem(2)};
    box-shadow: 0 ${rem(-0.4)} ${rem(0.4)} ${GREY};
    height: ${rem(12)};
    width: ${vw(100)};
  `,
  textInput: css`
    width: ${vw(90)};
    padding: ${rem(1)};
    text-align: center;
  `,
  modalBody: css`
    flex: 1;
    justify-content: center;
    align-items: center;
  `,
  modalBottom: css`
    border-top-width: ${rem(0.1)};
    border-top-color: ${GREY};
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    width: ${vw(100)};
    padding: ${rem(1)};
  `,
};
