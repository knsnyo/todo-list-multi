import { css } from '@emotion/native';
import { useState } from 'react';
import { Modal, TextInput, View } from 'react-native';
import { GREY, WHITE } from '../../../common/styles/color';
import { rem, vw } from '../../../common/styles/size';
import { ModalCancelButton } from '../atoms/ModalCancelButton';
import { ModalOkButton } from '../atoms/ModalOkButton';

type Props = {
  visible: boolean;
  setVisible: () => void;
};

export function AddModal({ visible, setVisible }: Props): JSX.Element {
  const [text, setText] = useState<string>('');
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={setVisible}
    >
      <View style={modalCss.container}>
        <View style={modalCss.modalBody}>
          <TextInput
            style={modalCss.textInput}
            value={text}
            onChangeText={setText}
          />
          <View style={modalCss.buttonGroup}>
            <ModalOkButton onPress={() => {}} />
            <ModalCancelButton onPress={setVisible} />
          </View>
        </View>
      </View>
    </Modal>
  );
}

const modalCss = {
  container: css`
    flex: 1;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    width: ${vw(100)};
  `,
  modalBody: css`
    background-color: ${WHITE};
    justify-content: space-around;
    align-items: center;
    border-top-width: ${rem(0.1)};
    border-color: ${GREY};
    padding: ${rem(1)};
    box-shadow: 0 ${rem(-0.4)} ${rem(0.2)} ${GREY};
    height: ${rem(20)};
  `,
  textInput: css`
    width: ${vw(90)};
    border: ${rem(0.1)} solid ${GREY};
    padding: ${rem(2)};
  `,
  buttonGroup: css`
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: row;
    width: ${vw(100)};
  `,
};
