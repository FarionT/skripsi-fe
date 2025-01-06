import { useState } from 'react'
import { Button } from 'ui-kit'
import './ButtonPage.scss'

const ButtonPage = () => {
  const [loading, setLoading] = useState(false)
  const [warning, setWarning] = useState(false)
  const [success, setSuccess] = useState(false)

  const loadingHandler = () => {
    setLoading(true)
  }

  const warningHandler = () => {
    setWarning(true)
  }

  const successHandler = () => {
    setSuccess(true)
  }

  return (
    <>
      <div className='concise-component-button-container'>
        <div className='concise-component-button-title'>Button</div>
        <div className='concise-component-button-text'>
          Button allow a user to take an action.
        </div>
        <div>
          <div className='concise-component-button-subtitle'>Anatomy</div>
          <div className='concise-component-button-desc'>Description text go here</div>
          <div className='concise-component-button-bg-grey'>
            <Button typeIcon='Add'>Button</Button>
          </div>
          <div className='concise-component-button-desc-sec'>
            Usage guidelines description go here. Lorem ipsum dolor sit amet, consectetur adipiscing
            elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            Duis aute irure dolor in
          </div>
        </div>
        <div>
          <div className='concise-component-button-subtitle'>Variations</div>
          <div className='concise-component-button-desc'>There are four types of buttons - icon only, basic, leading icon and trailing icon.</div>
          <div className='concise-component-button-bg-grey2'>
            <Button typeIcon='Add'>Button</Button>
            <Button typeIconRight='Add'>Button</Button>
            <Button>Button</Button>
            <Button typeIcon='Add'></Button>
          </div>
          <div className='concise-component-button-desc-sec'>
            Usage guidelines description go here. Lorem ipsum dolor sit amet, consectetur adipiscing
            elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            Duis aute irure dolor in
          </div>
        </div>
        <div>
          <div className='concise-component-button-subtitle'>Appearance</div>
          <div className='concise-component-button-subtitle-text'>Action Styles</div>
          <div className='concise-component-button-desc'>Button has five core action types – primary, secondary, info, contrast and destructive.</div>
          <div className='concise-component-button-bg-grey2'>
            <Button>Primary</Button>
            <Button buttonAppearance='destructive'>Desctructive</Button>
            <Button buttonAppearance='secondary'>Secondary</Button>
            <Button buttonAppearance='info'>Info</Button>
          </div>
        </div>
        <div>
          <div className='concise-component-button-emphasis'>Emphasis</div>
          <div className='concise-component-button-desc'>All button types have three levels of emphasis available — bold, subtle and minimal. Bolder emphasis will help to bring more attention to a button.</div>
          <div className='concise-component-button-bg-grey2'>
            <div className='concise-component-button-frame'>
              <div>
                <Button>Filled</Button>
              </div>
              <div>
                <Button buttonType='outline'>Outline</Button>
              </div>
              <div>
                <Button buttonType='frameless'>Frameless</Button>
              </div>
              <div>
                <Button buttonType='link'>Link</Button>                       
              </div>
              <div>
                <Button buttonType='transparent'>Transparent</Button>
              </div>
            </div>
            <div className='concise-component-button-frame'>
              <div>
                <Button buttonAppearance='destructive'>Filled</Button>
              </div>
              <div>
                <Button buttonAppearance='destructive' buttonType='outline'>Outline</Button>
              </div>
              <div>
                <Button buttonAppearance='destructive' buttonType='frameless'>Frameless</Button>
              </div>
              <div>                  
                <Button buttonAppearance='destructive' buttonType='link'>Link</Button>
              </div>
              <div>
                <Button buttonAppearance='destructive' buttonType='transparent'>Transparent</Button>
              </div>
            </div>
            <div className='concise-component-button-frame'>
              <div>
                <Button buttonAppearance='secondary'>Filled</Button>
              </div>
              <div>
                <Button buttonAppearance='secondary' buttonType='outline'>Outline</Button>
              </div>
              <div>
                <Button buttonAppearance='secondary' buttonType='frameless'>Frameless</Button>
              </div>
              <div>                  
                <Button buttonAppearance='secondary' buttonType='link'>Link</Button>
              </div>
              <div>
                <Button buttonAppearance='secondary' buttonType='transparent'>Transparent</Button>
              </div>
            </div>
            <div className='concise-component-button-frame'>
              <div>
                <Button buttonAppearance='info'>Filled</Button>
              </div>
              <div>
                <Button buttonAppearance='info' buttonType='outline'>Outline</Button>
              </div>
              <div>
                <Button buttonAppearance='info' buttonType='frameless'>Frameless</Button>
              </div>
              <div>                  
                <Button buttonAppearance='info' buttonType='link'>Link</Button>
              </div>
              <div>
                <Button buttonAppearance='info' buttonType='transparent'>Transparent</Button>
              </div>
            </div>
          </div>
          <div className='concise-component-button-desc-sec'>
            Usage guidelines description go here. Lorem ipsum dolor sit amet, consectetur adipiscing
            elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            Duis aute irure dolor in
          </div>
        </div>
        <div>
          <div className='concise-component-button-subtitle'>Behaviors</div>
          <div className='concise-component-button-subtitle-text'>Status</div>
          <div className='concise-component-button-desc'>Button has five core action types – primary, secondary, info, contrast and destructive.</div>
          <div className='concise-component-button-bg-grey2'>
            <div>
              <div className='concise-component-button-status-text'>Loading</div>
              <div className='concise-component-button-bg-white'>
                <Button onClick={loadingHandler} isLoading={loading} className='w-full h-full'>Loading</Button>
              </div>
            </div>
            <div>
              <div className='concise-component-button-status-text'>Error</div>
              <div className='concise-component-button-bg-white'>
                <Button onClick={warningHandler} isWarning={warning} className='w-full h-full'>Danger</Button>
              </div>
            </div>
            <div>
              <div className='concise-component-button-status-text'>Success</div>
              <div className='concise-component-button-bg-white'>
                <Button onClick={successHandler} isSuccess={success} className='w-full h-full'>Success</Button>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className='concise-component-button-emphasis'>States</div>
          <div className='concise-component-button-desc'>All button types have three levels of emphasis available — bold, subtle and minimal. Bolder emphasis will help to bring more attention to a button.</div>
          <div className='concise-component-button-states-text'>Primary</div>
          <div className='concise-component-button-bg-grey2'>
            <div className='concise-component-button-frame'>
              <div>
                <Button>Enable</Button>
              </div>
              <div>
                <Button>Hovered</Button>
              </div>
              <div>
                <Button>Pressed</Button>
              </div>
              <div>
                <Button isDisabled>Disabled</Button>                       
              </div>
            </div>
            <div className='concise-component-button-frame'>
              <div>
                <Button buttonType='outline'>Enable</Button>
              </div>
              <div>
                <Button buttonType='outline'>Hovered</Button>
              </div>
              <div>
                <Button buttonType='outline'>Pressed</Button>
              </div>
              <div>
                <Button buttonType='outline' isDisabled>Disabled</Button>                       
              </div>
            </div>
            <div className='concise-component-button-frame'>
              <div>
                <Button buttonType='transparent'>Enable</Button>
              </div>
              <div>
                <Button buttonType='transparent'>Hovered</Button>
              </div>
              <div>
                <Button buttonType='transparent'>Pressed</Button>
              </div>
              <div>
                <Button buttonType='transparent' isDisabled>Disabled</Button>                       
              </div>
            </div>
            <div className='concise-component-button-frame'>
              <div>
                <Button buttonType='frameless'>Enable</Button>
              </div>
              <div>
                <Button buttonType='frameless'>Hovered</Button>
              </div>
              <div>
                <Button buttonType='frameless'>Pressed</Button>
              </div>
              <div>
                <Button buttonType='frameless' isDisabled>Disabled</Button>                       
              </div>
            </div>
            <div className='concise-component-button-frame'>
              <div>
                <Button buttonType='link'>Enable</Button>
              </div>
              <div>
                <Button buttonType='link'>Hovered</Button>
              </div>
              <div>
                <Button buttonType='link'>Pressed</Button>
              </div>
              <div>
                <Button buttonType='link' isDisabled>Disabled</Button>                       
              </div>
            </div>
          </div>
          <div className='concise-component-button-states-text'>Destructive</div>
          <div className='concise-component-button-bg-grey2'>
            <div className='concise-component-button-frame'>
              <div>
                <Button buttonAppearance='destructive'>Enable</Button>
              </div>
              <div>
                <Button buttonAppearance='destructive'>Hovered</Button>
              </div>
              <div>
                <Button buttonAppearance='destructive'>Pressed</Button>
              </div>
              <div>
                <Button buttonAppearance='destructive' isDisabled>Disabled</Button>                       
              </div>
            </div>
            <div className='concise-component-button-frame'>
              <div>
                <Button buttonType='outline' buttonAppearance='destructive'>Enable</Button>
              </div>
              <div>
                <Button buttonType='outline' buttonAppearance='destructive'>Hovered</Button>
              </div>
              <div>
                <Button buttonType='outline' buttonAppearance='destructive'>Pressed</Button>
              </div>
              <div>
                <Button buttonType='outline' buttonAppearance='destructive' isDisabled>Disabled</Button>                       
              </div>
            </div>
            <div className='concise-component-button-frame'>
              <div>
                <Button buttonType='transparent' buttonAppearance='destructive'>Enable</Button>
              </div>
              <div>
                <Button buttonType='transparent' buttonAppearance='destructive'>Hovered</Button>
              </div>
              <div>
                <Button buttonType='transparent' buttonAppearance='destructive'>Pressed</Button>
              </div>
              <div>
                <Button buttonType='transparent' buttonAppearance='destructive' isDisabled>Disabled</Button>                       
              </div>
            </div>
            <div className='concise-component-button-frame'>
              <div>
                <Button buttonType='frameless' buttonAppearance='destructive'>Enable</Button>
              </div>
              <div>
                <Button buttonType='frameless' buttonAppearance='destructive'>Hovered</Button>
              </div>
              <div>
                <Button buttonType='frameless' buttonAppearance='destructive'>Pressed</Button>
              </div>
              <div>
                <Button buttonType='frameless' buttonAppearance='destructive' isDisabled>Disabled</Button>                       
              </div>
            </div>
            <div className='concise-component-button-frame'>
              <div>
                <Button buttonType='link' buttonAppearance='destructive'>Enable</Button>
              </div>
              <div>
                <Button buttonType='link' buttonAppearance='destructive'>Hovered</Button>
              </div>
              <div>
                <Button buttonType='link' buttonAppearance='destructive'>Pressed</Button>
              </div>
              <div>
                <Button buttonType='link' buttonAppearance='destructive' isDisabled>Disabled</Button>                       
              </div>
            </div>
          </div>
          <div className='concise-component-button-states-text'>Secondary</div>
          <div className='concise-component-button-bg-grey2'>
            <div className='concise-component-button-frame'>
              <div>
                <Button buttonAppearance='secondary'>Enable</Button>
              </div>
              <div>
                <Button buttonAppearance='secondary'>Hovered</Button>
              </div>
              <div>
                <Button buttonAppearance='secondary'>Pressed</Button>
              </div>
              <div>
                <Button buttonAppearance='secondary' isDisabled>Disabled</Button>                       
              </div>
            </div>
            <div className='concise-component-button-frame'>
              <div>
                <Button buttonType='outline' buttonAppearance='secondary'>Enable</Button>
              </div>
              <div>
                <Button buttonType='outline' buttonAppearance='secondary'>Hovered</Button>
              </div>
              <div>
                <Button buttonType='outline' buttonAppearance='secondary'>Pressed</Button>
              </div>
              <div>
                <Button buttonType='outline' buttonAppearance='secondary' isDisabled>Disabled</Button>                       
              </div>
            </div>
            <div className='concise-component-button-frame'>
              <div>
                <Button buttonType='transparent' buttonAppearance='secondary'>Enable</Button>
              </div>
              <div>
                <Button buttonType='transparent' buttonAppearance='secondary'>Hovered</Button>
              </div>
              <div>
                <Button buttonType='transparent' buttonAppearance='secondary'>Pressed</Button>
              </div>
              <div>
                <Button buttonType='transparent' buttonAppearance='secondary' isDisabled>Disabled</Button>                       
              </div>
            </div>
            <div className='concise-component-button-frame'>
              <div>
                <Button buttonType='frameless' buttonAppearance='secondary'>Enable</Button>
              </div>
              <div>
                <Button buttonType='frameless' buttonAppearance='secondary'>Hovered</Button>
              </div>
              <div>
                <Button buttonType='frameless' buttonAppearance='secondary'>Pressed</Button>
              </div>
              <div>
                <Button buttonType='frameless' buttonAppearance='secondary' isDisabled>Disabled</Button>                       
              </div>
            </div>
            <div className='concise-component-button-frame'>
              <div>
                <Button buttonType='link' buttonAppearance='secondary'>Enable</Button>
              </div>
              <div>
                <Button buttonType='link' buttonAppearance='secondary'>Hovered</Button>
              </div>
              <div>
                <Button buttonType='link' buttonAppearance='secondary'>Pressed</Button>
              </div>
              <div>
                <Button buttonType='link' buttonAppearance='secondary' isDisabled>Disabled</Button>                       
              </div>
            </div>
          </div>
          <div className='concise-component-button-states-text'>Info</div>
          <div className='concise-component-button-bg-grey2'>
            <div className='concise-component-button-frame'>
              <div>
                <Button buttonAppearance='info'>Enable</Button>
              </div>
              <div>
                <Button buttonAppearance='info'>Hovered</Button>
              </div>
              <div>
                <Button buttonAppearance='info'>Pressed</Button>
              </div>
              <div>
                <Button buttonAppearance='info' isDisabled>Disabled</Button>                       
              </div>
            </div>
            <div className='concise-component-button-frame'>
              <div>
                <Button buttonType='outline' buttonAppearance='info'>Enable</Button>
              </div>
              <div>
                <Button buttonType='outline' buttonAppearance='info'>Hovered</Button>
              </div>
              <div>
                <Button buttonType='outline' buttonAppearance='info'>Pressed</Button>
              </div>
              <div>
                <Button buttonType='outline' buttonAppearance='info' isDisabled>Disabled</Button>                       
              </div>
            </div>
            <div className='concise-component-button-frame'>
              <div>
                <Button buttonType='transparent' buttonAppearance='info'>Enable</Button>
              </div>
              <div>
                <Button buttonType='transparent' buttonAppearance='info'>Hovered</Button>
              </div>
              <div>
                <Button buttonType='transparent' buttonAppearance='info'>Pressed</Button>
              </div>
              <div>
                <Button buttonType='transparent' buttonAppearance='info' isDisabled>Disabled</Button>                       
              </div>
            </div>
            <div className='concise-component-button-frame'>
              <div>
                <Button buttonType='frameless' buttonAppearance='info'>Enable</Button>
              </div>
              <div>
                <Button buttonType='frameless' buttonAppearance='info'>Hovered</Button>
              </div>
              <div>
                <Button buttonType='frameless' buttonAppearance='info'>Pressed</Button>
              </div>
              <div>
                <Button buttonType='frameless' buttonAppearance='info' isDisabled>Disabled</Button>                       
              </div>
            </div>
            <div className='concise-component-button-frame'>
              <div>
                <Button buttonType='link' buttonAppearance='info'>Enable</Button>
              </div>
              <div>
                <Button buttonType='link' buttonAppearance='info'>Hovered</Button>
              </div>
              <div>
                <Button buttonType='link' buttonAppearance='info'>Pressed</Button>
              </div>
              <div>
                <Button buttonType='link' buttonAppearance='info' isDisabled>Disabled</Button>                       
              </div>
            </div>
          </div>
          <div className='concise-component-button-desc-sec'>
            Usage guidelines description go here. Lorem ipsum dolor sit amet, consectetur adipiscing
            elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            Duis aute irure dolor in
          </div>
        </div>
        <div>
          <div className='concise-component-button-subtitle'>Size</div>
          <div className='concise-component-button-desc'>There are four types of buttons - icon only, basic, leading icon and trailing icon.</div>
          <div className='concise-component-button-bg-grey2'>
            <Button buttonSize='small' typeIcon='Add'>Small</Button>
            <Button buttonSize='medium' typeIcon='Add'>Medium</Button>
            <Button buttonSize='big' typeIcon='Add'>Large</Button>
          </div>
          <div className='concise-component-button-width'>Minimal Width</div>
          <div className='concise-component-button-desc'>There are four types of buttons - icon only, basic, leading icon and trailing icon.</div>
          <div className='concise-component-button-bg-grey2'>
            <Button buttonSize='small' typeIcon='Add'></Button>
            <Button buttonSize='medium' typeIcon='Add'></Button>
            <Button buttonSize='big' typeIcon='Add'></Button>
          </div>
          <div className='concise-component-button-desc-sec'>
            Usage guidelines description go here. Lorem ipsum dolor sit amet, consectetur adipiscing
            elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            Duis aute irure dolor in
          </div>
        </div>
      </div>
    </>
  )
}

export default ButtonPage
