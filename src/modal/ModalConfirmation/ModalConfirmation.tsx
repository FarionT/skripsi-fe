import { Button, FormField, Modal } from 'ui-kit'
import { TModalProps } from 'types'
import './ModalConfirmation.scss'

type TConfirmation = 'danger' | 'success' | 'filled'

type TModalConfirmation = TModalProps & {
  title: string
  body: string
  confirmButton?: string
  cancelButton?: string
  typeConfirmation?: TConfirmation
  onConfirmClick: () => void
}

const ModalConfirmation = ({
  visible,
  toggle,
  title,
  body,
  confirmButton,
  cancelButton,
  typeConfirmation = 'filled',
  onConfirmClick,
}: TModalConfirmation) => {
  return (
    <Modal isShown={visible} hide={toggle} headerText={title}>
      <>
        <span>{body}</span>
        <div className='modal-action flex'>
          <Button onClick={toggle} buttonType='outline'>
            {cancelButton ? cancelButton : 'Cancel'}
          </Button>
          <Button buttonType={typeConfirmation} onClick={onConfirmClick}>{confirmButton ? confirmButton : 'Confirm'}</Button>
        </div>
      </>
    </Modal>
  )
}

export default ModalConfirmation
