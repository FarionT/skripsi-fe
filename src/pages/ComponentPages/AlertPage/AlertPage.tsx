import { Alert, Button } from 'ui-kit'
import './AlertPage.scss'
import { useAlert } from 'ui-kit/Alert'

const AlertPage = () => {
  const [visible, toggle] = useAlert()
  const [visible2, toggle2] = useAlert()
  const [visible3, toggle3] = useAlert()
  const [visible4, toggle4] = useAlert()
  const [visible5, toggle5] = useAlert()
  const [visible6, toggle6] = useAlert()
  const [visible7, toggle7] = useAlert()
  const [visible8, toggle8] = useAlert()
  const [visible9, toggle9] = useAlert()
  const [visible10, toggle10] = useAlert()
  const [visible11, toggle11] = useAlert()
  const [visible12, toggle12] = useAlert()
  const [visible13, toggle13] = useAlert()
  const [visible14, toggle14] = useAlert()
  const [visible15, toggle15] = useAlert()
  const [visible16, toggle16] = useAlert()
  const [visible17, toggle17] = useAlert()
  const [visible18, toggle18] = useAlert()
  const [visible19, toggle19] = useAlert()
  const [visible20, toggle20] = useAlert()
  const [visible21, toggle21] = useAlert()
  const [visible22, toggle22] = useAlert()

  return (
    <>
      <div className='concise-component-alert-container'>
        <div className='concise-component-alert-title'>Alert</div>
        <div className='concise-component-alert-text'>
          Alerts display a status update, reflecting a user or system action.
        </div>
        <div className='concise-component-alert-subtitle'>Anatomy</div>
        <div className='concise-component-alert-bg-grey'>
          <Button onClick={toggle}>Click Me</Button>
        </div>
        <div className='concise-component-alert-desc-sec'>
          Usage guidelines description go here. Lorem ipsum dolor sit amet, consectetur adipiscing
          elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          Duis aute irure dolor in
        </div>
        <div className='concise-component-alert-subtitle'>Variations</div>
        <div className='concise-component-alert-bg-grey-col'>
          <div className='w-96'>
            <div className='concise-component-alert-item-text'>Basic</div>
            <div className='concise-component-alert-bg-white'>
              <Button onClick={toggle2}>Basic</Button>
            </div>
          </div>
          <div className='w-96'>
            <div className='concise-component-alert-item-text'>With Button</div>
            <div className='concise-component-alert-bg-white'>
              <Button onClick={toggle3}>With Button</Button>
            </div>
          </div>
          <div className='w-96'>
            <div className='concise-component-alert-item-text'>With Description</div>
            <div className='concise-component-alert-bg-white'>
              <Button onClick={toggle4}>With Description</Button>
            </div>
          </div>
          <div className='w-96'>
            <div className='concise-component-alert-item-text'>With Description and Button</div>
            <div className='concise-component-alert-bg-white'>
              <Button onClick={toggle5}>With Description and Button</Button>
            </div>
          </div>
        </div>
        <div className='concise-component-alert-desc-sec'>
          Usage guidelines description go here. Lorem ipsum dolor sit amet, consectetur adipiscing
          elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          Duis aute irure dolor in
        </div>
        <div className='concise-component-alert-subtitle'>Appearance</div>
        <div className='concise-component-alert-subsubtitle'>Emphasis & Status</div>
        <div className='concise-component-alert-bg-grey-col'>
          <div className='w-96'>
            <div className='concise-component-alert-item-text'>None</div>
            <div className='concise-component-alert-bg-white'>
              <Button onClick={toggle6}>Subtle</Button>
              <Button onClick={toggle7}>Bold</Button>
            </div>
          </div>
          <div className='w-96'>
            <div className='concise-component-alert-item-text'>Information</div>
            <div className='concise-component-alert-bg-white'>
              <Button onClick={toggle8}>Subtle</Button>
              <Button onClick={toggle9}>Bold</Button>
            </div>
          </div>
          <div className='w-96'>
            <div className='concise-component-alert-item-text'>Success</div>
            <div className='concise-component-alert-bg-white'>
              <Button onClick={toggle10}>Subtle</Button>
              <Button onClick={toggle11}>Bold</Button>
            </div>
          </div>
          <div className='w-96'>
            <div className='concise-component-alert-item-text'>Warning</div>
            <div className='concise-component-alert-bg-white'>
              <Button onClick={toggle12}>Subtle</Button>
              <Button onClick={toggle13}>Bold</Button>
            </div>
          </div>
          <div className='w-96'>
            <div className='concise-component-alert-item-text'>Error</div>
            <div className='concise-component-alert-bg-white'>
              <Button onClick={toggle14}>Subtle</Button>
              <Button onClick={toggle15}>Bold</Button>
            </div>
          </div>
        </div>
        <div className='concise-component-alert-subtitle'>Behaviours</div>
        <div className='concise-component-alert-subsubtitle'>Dismissable</div>
        <div className='concise-component-alert-bg-grey-col'>
          <Button onClick={toggle2}>Click Me</Button>
          <Button onClick={toggle4}>Click Me</Button>
          <Button onClick={toggle5}>Click Me</Button>
        </div>
        <div className='concise-component-alert-desc-sec'>
          Usage guidelines description go here. Lorem ipsum dolor sit amet, consectetur adipiscing
          elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          Duis aute irure dolor in
        </div>
        <div className='concise-component-alert-subtitle'>Sizes</div>
        <div className='concise-component-alert-bg-grey-col'>
          <Button onClick={toggle16}>Large</Button>
          <Button onClick={toggle17}>Medium</Button>
          <Button onClick={toggle18}>Small</Button>
        </div>
        <div className='concise-component-alert-desc-sec'>
          Usage guidelines description go here. Lorem ipsum dolor sit amet, consectetur adipiscing
          elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          Duis aute irure dolor in
        </div>
        <div className='concise-component-alert-subtitle'>Placement</div>
        <div className='concise-component-alert-subsubtitle'>Top</div>
        <div className='concise-component-alert-desc-sec'>
          Usage guidelines description go here. Lorem ipsum dolor sit amet, consectetur adipiscing
          elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          Duis aute irure dolor in
        </div>
        <div className='concise-component-alert-bg-grey-col'>
          <Button onClick={toggle}>Top</Button>
          <Button onClick={toggle19}>Bottom</Button>
        </div>
      </div>
      <Alert
          isShown={visible}
          hide={toggle}
          alertTitle='Alert Title'
          alertStyle='information'
          duration={4}
        />
        <Alert
          isShown={visible2}
          hide={toggle2}
          alertTitle='Alert Title'
          alertStyle='information'
        />
        <Alert 
          isShown={visible3} 
          hide={toggle3} 
          button='Refresh'
          buttonIcon='Home'
          alertTitle='Alert Title' 
          alertStyle='information' 
        />
        <Alert
          isShown={visible4}
          hide={toggle4}
          alertTitle='Alert Title'
          alertStyle='information'
          alertMessage='Alert Message Here'
        />
        <Alert 
          isShown={visible5} 
          hide={toggle5} 
          alertTitle='Alert Title' 
          alertStyle='information'
          alertMessage='Message' 
          alertType='bold'
          button='Refresh'
          buttonIcon='Home'
        />
        <Alert
          isShown={visible6}
          hide={toggle6}
          alertTitle='Alert Title'
          alertStyle='none'
          alertType='subtle'
        />
        <Alert
          isShown={visible7}
          hide={toggle7}
          alertTitle='Alert Title'
          alertStyle='none'
          alertType='bold'
        />
        <Alert
          isShown={visible8}
          hide={toggle8}
          alertTitle='Alert Title'
          alertStyle='information'
          alertType='subtle'
        />
        <Alert
          isShown={visible9}
          hide={toggle9}
          alertTitle='Alert Title'
          alertStyle='information'
          alertType='bold'
        />
        <Alert
          isShown={visible10}
          hide={toggle10}
          alertTitle='Alert Title'
          alertStyle='success'
          alertType='subtle'
        />
        <Alert
          isShown={visible11}
          hide={toggle11}
          alertTitle='Alert Title'
          alertStyle='success'
          alertType='bold'
        />
        <Alert
          isShown={visible12}
          hide={toggle12}
          alertTitle='Alert Title'
          alertStyle='warning'
          alertType='subtle'
        />
        <Alert
          isShown={visible13}
          hide={toggle13}
          alertTitle='Alert Title'
          alertStyle='warning'
          alertType='bold'
        />
        <Alert
          isShown={visible14}
          hide={toggle14}
          alertTitle='Alert Title'
          alertStyle='error'
          alertType='subtle'
        />
        <Alert
          isShown={visible15}
          hide={toggle15}
          alertTitle='Alert Title'
          alertStyle='error'
          alertType='bold'
        />
        <Alert
          isShown={visible16}
          hide={toggle16}
          alertTitle='Alert Title'
          alertStyle='information'
          alertType='bold'
          alertSize='large'
        />
        <Alert
          isShown={visible17}
          hide={toggle17}
          alertTitle='Alert Title'
          alertStyle='information'
          alertType='bold'
          alertSize='medium'
        />
        <Alert
          isShown={visible18}
          hide={toggle18}
          alertTitle='Alert Title'
          alertStyle='information'
          alertType='bold'
          alertSize='small'
        />
        <Alert
          isShown={visible19}
          hide={toggle19}
          alertTitle='Alert Title'
          alertStyle='information'
          alertType='bold'
          alertPlacement='bottom'
        />
    </>
  )
}

export default AlertPage
