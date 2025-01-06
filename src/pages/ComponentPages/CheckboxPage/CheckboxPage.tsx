import { Checkbox } from 'ui-kit';
import './CheckboxPage.scss'

const CheckboxPage = () => {
  return(
    <>
      <div className='concise-component-checkbox-container'>
        <div className='concise-component-checkbox-title'>Checkbox</div>
        <div className='concise-component-checkbox-text'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
        </div>
        <div>
          <div className='concise-component-checkbox-subtitle'>Anatomy</div>
          <div className='concise-component-checkbox-desc'>Description text go here</div>
          <div className='concise-component-checkbox-bg-grey'>
            <div className='concise-component-checkbox-bg-white'>
              <Checkbox label='Checkbox' isChecked></Checkbox>
            </div>
          </div>
          <div className='concise-component-checkbox-desc-sec'>
            Usage guidelines description go here. Lorem ipsum dolor sit amet, consectetur adipiscing
            elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            Duis aute irure dolor in
          </div>
        </div>
        <div>
          <h4 className='concise-component-checkbox-heading'>Appearance</h4>
          <div className='concise-component-checkbox-orientation'>Orientation</div>
          <div className='concise-component-checkbox-desc'>Description text go here</div>
          <div className='concise-component-checkbox-bg-grey'>
            <div>
              <div className='concise-component-checkbox-orientation-text'>Inline Horizontal Group</div>
              <div className='concise-component-checkbox-bg-inline'>
                <Checkbox label='Checkbox'></Checkbox>
                <Checkbox label='Checkbox'></Checkbox>
                <Checkbox label='Checkbox' isChecked></Checkbox>
                <Checkbox label='Checkbox'></Checkbox>
              </div>
            </div>
            <div>
              <div className='concise-component-checkbox-orientation-text'>Stacked Vertical Group</div>
              <div className='concise-component-checkbox-bg-stacked'>
                <Checkbox label='Checkbox'></Checkbox>
                <Checkbox label='Checkbox'></Checkbox>
                <Checkbox label='Checkbox' isChecked></Checkbox>
                <Checkbox label='Checkbox'></Checkbox>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className='concise-component-checkbox-label'>Label Placement</div>
          <div className='concise-component-checkbox-desc'>Description text go here</div>
          <div className='concise-component-checkbox-bg-grey'>
            <div className='concise-component-checkbox-bg-white'>
              <Checkbox label='Checkbox' labelPlacement='right'></Checkbox>
              <Checkbox label='Checkbox' labelPlacement='left'></Checkbox>
            </div>
          </div>
        </div>
        <div>
          <div className='concise-component-checkbox-behaviors'>Behaviors</div>
          <div className='concise-component-checkbox-orientation'>States</div>
          <div className='concise-component-checkbox-desc'>Description text go here</div>
          <div className='concise-component-checkbox-bg-grey'>
            <div className='concise-component-checkbox-states'>
              <div className='concise-component-checkbox-frame'>
                <div className='concise-component-checkbox-frame-text'>Frameless</div>
                <Checkbox label='Checkbox'></Checkbox>
                <Checkbox label='Checkbox'></Checkbox>
                <Checkbox label='Checkbox' isChecked></Checkbox>
                <Checkbox label='Checkbox' isDisabled></Checkbox>
                <Checkbox label='Checkbox' isChecked isDisabled></Checkbox>
              </div>
              <div className='concise-component-checkbox-frame'>
                <div className='concise-component-checkbox-frame-text'>Framed</div>
                <Checkbox label='Checkbox' checkboxBorder='framed' checkboxType='outline'></Checkbox>
                <Checkbox label='Checkbox' checkboxBorder='framed' checkboxType='hovered'></Checkbox>
                <Checkbox label='Checkbox' checkboxBorder='framed' checkboxType='filled' isChecked></Checkbox>
                <Checkbox label='Checkbox' checkboxBorder='framed' checkboxType='frameless' isDisabled></Checkbox>
                <Checkbox label='Checkbox' checkboxBorder='framed' checkboxType='transparent' isChecked isDisabled></Checkbox>
              </div>
            </div>
          </div>
          <div className='concise-component-checkbox-desc-sec'>
            Usage guidelines description go here. Lorem ipsum dolor sit amet, consectetur adipiscing
            elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            Duis aute irure dolor in
          </div>
        </div>
        <div>
          <div className='concise-component-checkbox-orientation'>Icon</div>
          <div className='concise-component-checkbox-desc'>Description text go here</div>
          <div className='concise-component-checkbox-bg-grey'>
            <div className='concise-component-checkbox-size'>
              <div className='concise-component-checkbox-size-text'>Small</div>
              <div className='concise-component-checkbox-bg-dark-grey'>
                <Checkbox checkboxSize='small'></Checkbox>
                <Checkbox checkboxSize='small'></Checkbox>
                <Checkbox checkboxSize='small' isDisabled></Checkbox>
                <Checkbox checkboxSize='small' isChecked></Checkbox>
                <Checkbox checkboxSize='small' isChecked isDisabled></Checkbox>
                <Checkbox checkboxSize='small' checkboxBorder='white'></Checkbox>
                <Checkbox checkboxSize='small' checkboxBorder='white' isChecked></Checkbox>
                <Checkbox checkboxSize='small' checkboxBorder='blue' isChecked></Checkbox>
              </div>
            </div>
            <div className='concise-component-checkbox-size'>
              <div className='concise-component-checkbox-size-text'>Medium</div>
              <div className='concise-component-checkbox-bg-dark-grey'>
                <Checkbox></Checkbox>
                <Checkbox></Checkbox>
                <Checkbox isDisabled></Checkbox>
                <Checkbox isChecked></Checkbox>
                <Checkbox isChecked isDisabled></Checkbox>
                <Checkbox checkboxBorder='white'></Checkbox>
                <Checkbox checkboxBorder='white' isChecked></Checkbox>
                <Checkbox checkboxBorder='blue' isChecked></Checkbox>
              </div>
            </div>
            <div className='concise-component-checkbox-size'>
              <div className='concise-component-checkbox-size-text'>Large</div>
              <div className='concise-component-checkbox-bg-dark-grey'>
                <Checkbox checkboxSize='large'></Checkbox>
                <Checkbox checkboxSize='large'></Checkbox>
                <Checkbox checkboxSize='large'isDisabled></Checkbox>
                <Checkbox checkboxSize='large' isChecked></Checkbox>
                <Checkbox checkboxSize='large' isChecked isDisabled></Checkbox>
                <Checkbox checkboxSize='large' checkboxBorder='white'></Checkbox>
                <Checkbox checkboxSize='large' checkboxBorder='white' isChecked></Checkbox>
                <Checkbox checkboxSize='large' checkboxBorder='blue' isChecked></Checkbox>
              </div>
            </div>
          </div>
        </div>
        <div>
          <h4 className='concise-component-checkbox-variant'>Variant</h4>
          <div className='concise-component-checkbox-desc'>Description text go here</div>
          <div className='concise-component-checkbox-bg-grey'>
            <div className='concise-component-checkbox-size'>
              <div className='concise-component-checkbox-size-text'>No Label</div>
              <div className='concise-component-checkbox-bg-dark-grey'>
                <Checkbox></Checkbox>
                <Checkbox></Checkbox>
                <Checkbox isDisabled></Checkbox>
                <Checkbox isChecked></Checkbox>
                <Checkbox isChecked isDisabled></Checkbox>
                <Checkbox checkboxBorder='white'></Checkbox>
                <Checkbox checkboxBorder='white' isChecked></Checkbox>
                <Checkbox checkboxBorder='blue' isChecked></Checkbox>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default CheckboxPage;