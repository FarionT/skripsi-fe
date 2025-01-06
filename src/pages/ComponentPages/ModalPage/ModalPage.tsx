import { Button, Modal } from 'ui-kit'
import './ModalPage.scss'
import { useModal } from 'utils/getModal'

const ModalPage = () => {
  const [visible, toggle] = useModal()
  const [visible1, toggle1] = useModal()
  const [visible2, toggle2] = useModal()
  const [visible3, toggle3] = useModal()
  const [visible4, toggle4] = useModal()
  const [visible5, toggle5] = useModal()
  const [visible6, toggle6] = useModal()
  const [visible7, toggle7] = useModal()
  const [visible8, toggle8] = useModal()
  const [visible9, toggle9] = useModal()
  const [visible10, toggle10] = useModal()
  const [visible11, toggle11] = useModal()

  return (
    <div className='concise-component-modal-container'>
      <div className='concise-component-modal-title'>Modal</div>
      <div className='concise-component-modal-subtitle'>
        modal organize related content and allow navigation between the groups of content within a
        container on the same page.
      </div>
      <div className='concise-component-modal-subsubtitle'>Anatomy</div>
      <div className='concise-component-modal-desc'>Description text go here</div>
      <div className='concise-component-modal-bg-grey'>
        <Button onClick={() => toggle1()}>Click Me</Button>
      </div>
      <div className='concise-component-modal-desc-sec'>
        Usage guidelines description go here. Lorem ipsum dolor sit amet, consectetur adipiscing
        elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        Duis aute irure dolor in
      </div>

      <div className='concise-component-modal-variations'>Variants</div>
      {/* Header  */}
      <div className='concise-component-modal-variants'>Header Variations</div>
      <div className='concise-component-modal-variants-desc'>
        The header can have two variations – title only or title with subtitle.
      </div>
      <div className='concise-component-modal-bg-grey'>
        <Button onClick={() => toggle1()}>Title Only</Button>
        <Button onClick={() => toggle2()}>Title With Subtitle</Button>
        <Button onClick={() => toggle3()}>Title With Icon</Button>
      </div>

      {/* Footer  */}
      <div className='concise-component-modal-variants'>Footer Variations</div>
      <div className='concise-component-modal-variants-desc'>
        The footer can vary depending on the number of actions that need to be shown to the user.
      </div>
      <div className='concise-component-modal-bg-grey'>
        <Button onClick={() => toggle4()}>One Action</Button>
        <Button onClick={() => toggle5()}>Two Actions</Button>
        <Button onClick={() => toggle6()}>Three Actions</Button>
        <Button onClick={() => toggle7()}>More three actions</Button>
      </div>
      <div className='concise-component-modal-desc-sec'>
        Usage guidelines description go here. Lorem ipsum dolor sit amet, consectetur adipiscing
        elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        Duis aute irure dolor in
      </div>
      <div className='concise-component-modal-variations'>Behaviours</div>

      {/* Dismissable  */}
      <div className='concise-component-modal-variants'>Dismissable</div>
      <div className='concise-component-modal-variants-desc'>
        A modal can be set to be either dismissible or non-dismissible. Dismissible modals allow the
        user to close the modal and return to their prior page by clicking anywhere outside the
        modal or by clicking the close icon. Non-dismissible modals do not allow the user to close
        the modal without explicitly selecting one of the action buttons shown in the footer.
      </div>
      <div className='concise-component-modal-bg-grey'>
        <Button onClick={() => toggle8()}>Dismissable</Button>
        <Button onClick={() => toggle9()}>Non-Dismissable</Button>
      </div>
      <div className='concise-component-modal-variations'>Appearance</div>

      {/* Header  */}
      <div className='concise-component-modal-variants'>Alignment</div>
      <div className='concise-component-modal-variants-desc'>
        A modal is always centered horizontally within the viewport and has two options for vertical
        alignment – top or centered.
      </div>
      <div className='concise-component-modal-bg-grey'>
        <Button onClick={() => toggle10()}>Top</Button>
        <Button onClick={() => toggle11()}>Center</Button>
      </div>

      {/* Modal  */}
      {/* Modal Anatomy  */}
      <Modal
        isShown={visible}
        hide={toggle}
        headerText='Title'
        footerPrimaryButton='Button'
        footerSecondaryButton='Button'
        footerPrimaryIcon='Share'
      >
        <div>
          Lorem ipsum dolor. Sit amet magna donec neque ut nunc dui eget. Ut dui eu torquent neque
          maecenas. Scelerisque adipiscing est quam sed orci. Nonummy nibh litora netus arcu vitae.
          Congue et sed. Litora mi eu mauris nascetur id. Ut quis phasellus ac est sollicitudin.
          Suspendisse duis wisi.{' '}
        </div>
      </Modal>
      {/* Modal Normal  */}
      <Modal isShown={visible1} hide={toggle1} headerText='Title'>
        <div>
          Lorem ipsum dolor. Sit amet magna donec neque ut nunc dui eget. Ut dui eu torquent neque
          maecenas. Scelerisque adipiscing est quam sed orci. Nonummy nibh litora netus arcu vitae.
          Congue et sed. Litora mi eu mauris nascetur id. Ut quis phasellus ac est sollicitudin.
          Suspendisse duis wisi.{' '}
        </div>
      </Modal>
      {/* Modal With Subtitle  */}
      <Modal isShown={visible2} hide={toggle2} headerText='Title' headerSubtitle='Subtitle'>
        <div>
          Lorem ipsum dolor. Sit amet magna donec neque ut nunc dui eget. Ut dui eu torquent neque
          maecenas. Scelerisque adipiscing est quam sed orci. Nonummy nibh litora netus arcu vitae.
          Congue et sed. Litora mi eu mauris nascetur id. Ut quis phasellus ac est sollicitudin.
          Suspendisse duis wisi.{' '}
        </div>
      </Modal>
      {/* Modal with Icon  */}
      <Modal isShown={visible3} hide={toggle3} headerText='Title' headerIcon='Picture'>
        <div>
          Lorem ipsum dolor. Sit amet magna donec neque ut nunc dui eget. Ut dui eu torquent neque
          maecenas. Scelerisque adipiscing est quam sed orci. Nonummy nibh litora netus arcu vitae.
          Congue et sed. Litora mi eu mauris nascetur id. Ut quis phasellus ac est sollicitudin.
          Suspendisse duis wisi.{' '}
        </div>
      </Modal>
      {/* Modal with One Action  */}
      <Modal isShown={visible4} hide={toggle4} headerText='Title' footerPrimaryButton='Button'>
        <div>
          Lorem ipsum dolor. Sit amet magna donec neque ut nunc dui eget. Ut dui eu torquent neque
          maecenas. Scelerisque adipiscing est quam sed orci. Nonummy nibh litora netus arcu vitae.
          Congue et sed. Litora mi eu mauris nascetur id. Ut quis phasellus ac est sollicitudin.
          Suspendisse duis wisi.{' '}
        </div>
      </Modal>
      {/* Modal with Two Actions  */}
      <Modal
        isShown={visible5}
        hide={toggle5}
        headerText='Title'
        footerPrimaryButton='Button'
        footerSecondaryButton='Button'
      >
        <div>
          Lorem ipsum dolor. Sit amet magna donec neque ut nunc dui eget. Ut dui eu torquent neque
          maecenas. Scelerisque adipiscing est quam sed orci. Nonummy nibh litora netus arcu vitae.
          Congue et sed. Litora mi eu mauris nascetur id. Ut quis phasellus ac est sollicitudin.
          Suspendisse duis wisi.{' '}
        </div>
      </Modal>
      {/* Modal with Three Actions */}
      <Modal
        isShown={visible6}
        hide={toggle6}
        headerText='Title'
        footerPrimaryButton='Button'
        footerSecondaryButton='Button'
        footerPrimaryIcon='Share'
      >
        <div>
          Lorem ipsum dolor. Sit amet magna donec neque ut nunc dui eget. Ut dui eu torquent neque
          maecenas. Scelerisque adipiscing est quam sed orci. Nonummy nibh litora netus arcu vitae.
          Congue et sed. Litora mi eu mauris nascetur id. Ut quis phasellus ac est sollicitudin.
          Suspendisse duis wisi.{' '}
        </div>
      </Modal>
      {/* Modal with More Actions  */}
      <Modal
        isShown={visible7}
        hide={toggle7}
        headerText='Title'
        footerPrimaryButton='Button'
        footerSecondaryButton='Button'
        footerPrimaryIcon='Share'
        footerSecondaryIcon='Bookmark'
      >
        <div>
          Lorem ipsum dolor. Sit amet magna donec neque ut nunc dui eget. Ut dui eu torquent neque
          maecenas. Scelerisque adipiscing est quam sed orci. Nonummy nibh litora netus arcu vitae.
          Congue et sed. Litora mi eu mauris nascetur id. Ut quis phasellus ac est sollicitudin.
          Suspendisse duis wisi.{' '}
        </div>
      </Modal>
      {/* Modal Dismissable  */}
      <Modal
        isShown={visible8}
        hide={toggle8}
        headerText='Title'
        footerPrimaryButton='Button'
        footerSecondaryButton='Cancel'
        footerPrimaryIcon='Share'
        isDismissable={true}
        onFooterPrimaryButtonClick={toggle8}
        onFooterSecondaryButtonClick={toggle8}
      >
        <div>
          Lorem ipsum dolor. Sit amet magna donec neque ut nunc dui eget. Ut dui eu torquent neque
          maecenas. Scelerisque adipiscing est quam sed orci. Nonummy nibh litora netus arcu vitae.
          Congue et sed. Litora mi eu mauris nascetur id. Ut quis phasellus ac est sollicitudin.
          Suspendisse duis wisi.{' '}
        </div>
      </Modal>
      {/* Modal Non Dismissable */}
      <Modal
        isShown={visible9}
        isDismissable={false}
        hide={toggle9}
        headerText='Title'
        footerPrimaryButton='Button'
        footerSecondaryButton='Cancel'
        footerPrimaryIcon='Share'
      >
        <div>
          Lorem ipsum dolor. Sit amet magna donec neque ut nunc dui eget. Ut dui eu torquent neque
          maecenas. Scelerisque adipiscing est quam sed orci. Nonummy nibh litora netus arcu vitae.
          Congue et sed. Litora mi eu mauris nascetur id. Ut quis phasellus ac est sollicitudin.
          Suspendisse duis wisi.{' '}
        </div>
      </Modal>
      {/* Modal Top */}
      <Modal
        isShown={visible10}
        topAppearance={true}
        hide={toggle10}
        headerText='Title'
        footerPrimaryButton='Button'
        footerSecondaryButton='Cancel'
        footerPrimaryIcon='Share'
      >
        <div>
          Lorem ipsum dolor. Sit amet magna donec neque ut nunc dui eget. Ut dui eu torquent neque
          maecenas. Scelerisque adipiscing est quam sed orci. Nonummy nibh litora netus arcu vitae.
          Congue et sed. Litora mi eu mauris nascetur id. Ut quis phasellus ac est sollicitudin.
          Suspendisse duis wisi.{' '}
        </div>
      </Modal>
      {/* Modal Normal Position */}
      <Modal
        isShown={visible11}
        hide={toggle11}
        headerText='Title'
        footerPrimaryButton='Button'
        footerSecondaryButton='Cancel'
        footerPrimaryIcon='Share'
      >
        <div>
          Lorem ipsum dolor. Sit amet magna donec neque ut nunc dui eget. Ut dui eu torquent neque
          maecenas. Scelerisque adipiscing est quam sed orci. Nonummy nibh litora netus arcu vitae.
          Congue et sed. Litora mi eu mauris nascetur id. Ut quis phasellus ac est sollicitudin.
          Suspendisse duis wisi.{' '}
        </div>
      </Modal>
    </div>
  )
}

export default ModalPage
