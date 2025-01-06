import { RadioButton } from 'ui-kit';
import './RadioButtonPage.scss'

const RadioButtonPage = () => {
  return(
    <>
      <div className='concise-component-radio-container'>
        <div className='concise-component-radio-title'>Radio</div>
        <div className='concise-component-radio-text'>
          Radio buttons allow users to make a single selection from a set of options.
        </div>
        <div>
          <div className='concise-component-radio-subtitle'>Anatomy</div>
          <div className='concise-component-radio-desc'>Description text go here</div>
          <div className='concise-component-radio-bg-grey'>
            <RadioButton label='Radio Button' name='radioButton' isChecked></RadioButton>
          </div>
          <div className='concise-component-radio-desc-sec'>
            Usage guidelines description go here. Lorem ipsum dolor sit amet, consectetur adipiscing
            elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            Duis aute irure dolor in
          </div>
        </div>
        <div>
          <div className='concise-component-radio-subtitle'>Variations</div>
          <div className='concise-component-radio-desc'>Description text go here</div>
          <div className='concise-component-radio-bg-grey'>
            <div className='concise-component-radio-variation'>
              <div>
                <div className='concise-component-radio-orientation-text'>Inline Horizontal Group</div>
                <div className='concise-component-radio-bg-inline'>
                  <RadioButton label='Label' name='inlineHorizontal'></RadioButton>
                  <RadioButton label='Label' name='inlineHorizontal'></RadioButton>
                  <RadioButton label='Label' name='inlineHorizontal'></RadioButton>
                </div>
              </div>
              <div>
                <div className='concise-component-radio-orientation-text'>Stacked Vertical Group</div>
                <div className='concise-component-radio-bg-stacked'>
                  <RadioButton label='Label' name='stackedVertical'></RadioButton>
                  <RadioButton label='Label' name='stackedVertical'></RadioButton>
                  <RadioButton label='Label' name='stackedVertical'></RadioButton>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <h4 className='concise-component-radio-heading'>Appearance</h4>
          <div className='concise-component-radio-subtitle'>Label Placement</div>
          <div className='concise-component-radio-desc'>Description text go here</div>
          <div className='concise-component-radio-bg-grey'>
            <div>
              <div className='concise-component-radio-orientation-text'>Right Label (Default)</div>
              <div className='concise-component-radio-bg-white'>
                <RadioButton label='Label' labelPlacement='right' name='leftPlacement' isChecked></RadioButton>
              </div>
            </div>
            <div>
              <div className='concise-component-radio-orientation-text'>Left Label</div>
              <div className='concise-component-radio-bg-white'>
                <RadioButton label='Radio Button' labelPlacement='left' name='rightPlacement' isChecked></RadioButton>
              </div>
            </div>
          </div>
        </div>
        <div>
          <h4 className='concise-component-radio-heading'>Behaviors</h4>
          <div className='concise-component-radio-subtitle'>States</div>
          <div className='concise-component-radio-desc'>Description text go here</div>
          <div className='concise-component-radio-bg-grey'>
            <div>
              <div className='concise-component-radio-orientation-text'>Unselected</div>
              <div className='concise-component-radio-bg-white'>
                <RadioButton label='Label' name='radioButton' ></RadioButton>
              </div>
            </div>
            <div>
              <div className='concise-component-radio-orientation-text'>Hovered</div>
              <div className='concise-component-radio-bg-white'>
                <RadioButton label='Label' radioButtonType='hovered' name='radioButtonHover'></RadioButton>
              </div>
            </div>
            <div>
              <div className='concise-component-radio-orientation-text'>Selected</div>
              <div className='concise-component-radio-bg-white'>
                <RadioButton label='Label' name='radioButtonChecked' isChecked></RadioButton>
              </div>
            </div>
            <div>
              <div className='concise-component-radio-orientation-text'>Disabled</div>
              <div className='concise-component-radio-bg-white'>
                <RadioButton label='Label' name='radioButtonDisabled' isDisabled></RadioButton>
              </div>
            </div>
            <div>
              <div className='concise-component-radio-orientation-text'>Error</div>
              <div className='concise-component-radio-bg-white'>
                <RadioButton label='Label' radioButtonType='error' name='radioButtonError'></RadioButton>
              </div>
            </div>
          </div>
        </div>
        <div>
          <h4 className='concise-component-radio-heading'>Behaviors</h4>
          <div className='concise-component-radio-subtitle'>Size</div>
          <div className='concise-component-radio-desc'>Description text go here</div>
          <div className='concise-component-radio-bg-grey'>
            <div>
              <div className='concise-component-radio-orientation-text'>Medium</div>
              <div className='concise-component-radio-bg-white'>
                <RadioButton label='Label' name='radioButtonMedium' isChecked></RadioButton>
              </div>
            </div>
            <div>
              <div className='concise-component-radio-orientation-text'>Small</div>
              <div className='concise-component-radio-bg-white'>
                <RadioButton label='Label' radioButtonSize='small' name='radioButtonSmall' isChecked></RadioButton>
              </div>
            </div>
          </div>
          <div className='concise-component-radio-desc-sec'>
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

export default RadioButtonPage;