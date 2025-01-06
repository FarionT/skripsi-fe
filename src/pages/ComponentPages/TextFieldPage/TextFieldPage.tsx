import { FormField } from 'ui-kit'
import './TextFieldPage.scss'

const TextFieldPage = () => {
  return (
    <div className='concise-component-textfield-container'>
      <div className='concise-component-textfield-title'>Text Field</div>
      <div className='concise-component-textfield-subtitle'>
        Inputs allow users to enter text or numbers.
      </div>
      {/* Anatomy  */}
      <div className='concise-component-textfield-subsubtitle'>Anatomy</div>
      <div className='concise-component-textfield-bg-grey'>
        <FormField type='text' label='Label' placeholder='Placeholder' className='w-64' />
      </div>
      <div className='concise-component-textfield-desc-sec'>
        Usage guidelines description go here. Lorem ipsum dolor sit amet, consectetur adipiscing
        elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        Duis aute irure dolor in
      </div>

      {/* Variant  */}
      <div className='concise-component-textfield-subsubtitle'>Variants</div>
      <div className='concise-component-textfield-bg-grey'>
        <FormField type='text' label='Label' placeholder='Placeholder' className='w-64' />
        <FormField
          type='text'
          label='Label'
          placeholder='Placeholder'
          leading='Rp'
          className='w-64'
        />
      </div>
      <div className='concise-component-textfield-desc-sec'>
        Usage guidelines description go here. Lorem ipsum dolor sit amet, consectetur adipiscing
        elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        Duis aute irure dolor in
      </div>

      {/* Appearance  */}
      <div className='concise-component-textfield-behaviours'>Appearance</div>
      <div className='concise-component-textfield-appearance'>
        {/* Labeling  */}
        <div className='concise-component-textfield-appearance-bg'>
          <div className='concise-component-textfield-appearance-label'>No Label</div>
          <div className='concise-component-textfield-bg-white'>
            <FormField type='text' placeholder='Placeholder' className='w-64' />
          </div>
          <div className='concise-component-textfield-appearance-label'>Top Label</div>
          <div className='concise-component-textfield-bg-white'>
            <FormField type='text' placeholder='Placeholder' label='Label' className='w-64' />
          </div>
        </div>
        <div>
          <div className='concise-component-textfield-labeling'>Labeling</div>
          <div className='concise-component-textfield-labeling-desc'>Description text go here</div>
        </div>
        {/* Helper Text  */}
        <div className='concise-component-textfield-appearance-bg'>
          <FormField
            type='text'
            placeholder='Placeholder'
            label='Label'
            className='w-64'
            error='Helper Text'
          />
        </div>
        <div>
          <div className='concise-component-textfield-labeling'>Helper Text</div>
          <div className='concise-component-textfield-labeling-desc'>Description text go here</div>
        </div>
        {/* Placeholder Text */}
        <div className='concise-component-textfield-appearance-bg'>
          <FormField type='text' placeholder='Placeholder' label='Label' className='w-64' />
        </div>
        <div>
          <div className='concise-component-textfield-labeling'>Placeholder Text</div>
          <div className='concise-component-textfield-labeling-desc'>Description text go here</div>
        </div>
        {/* Icon  */}
        <div className='concise-component-textfield-appearance-bg'>
          <FormField
            className='w-64'
            type='text'
            label='Label'
            placeholder='Placeholder'
            leadingIcon='Add'
          />
          <FormField
            type='text'
            trailingIcon='Add'
            placeholder='Placeholder'
            label='Label'
            className='w-64'
          />
        </div>
        <div>
          <div className='concise-component-textfield-labeling'>Icons</div>
          <div className='concise-component-textfield-labeling-desc'>Description text go here</div>
        </div>
        {/* Leading Content  */}
        <div className='concise-component-textfield-appearance-bg'>
          <FormField
            type='text'
            leading='Rp'
            placeholder='Placeholder'
            label='Label'
            className='w-64'
          />
        </div>
        <div>
          <div className='concise-component-textfield-labeling'>Leading Content</div>
          <div className='concise-component-textfield-labeling-desc'>Description text go here</div>
        </div>
        {/* Numeric Field  */}
        <div className='concise-component-textfield-appearance-bg'>
          <FormField type='number' placeholder='Placeholder' label='Label' className='w-64' />
        </div>
        <div className='concise-component-textfield-apperance-desc'>
          <div className='concise-component-textfield-labeling'>Leading Content</div>
          <div className='concise-component-textfield-labeling-desc'>Description text go here</div>
        </div>
      </div>
      {/* Behaviours  */}
      <div className='concise-component-textfield-behaviours'>Behaviours</div>
      <div className='concise-component-textfield-subsubtitle'>State</div>
      <div className='concise-component-textfield-desc'>
        Input has five states — enabled, focus, filled, and disabled.
      </div>
      <div className='concise-component-textfield-bg-grey'>
        <div className='concise-component-textfield-behaviours-item'>
          <div>Enable</div>
          <div className='concise-component-textfield-bg-white'>
            <FormField type='text' placeholder='Placeholder' label='Label' />
          </div>
        </div>
        <div className='concise-component-textfield-behaviours-item'>
          <div>Focused</div>
          <div className='concise-component-textfield-bg-white'>
            <FormField type='text' placeholder='Placeholder' label='Label' />
          </div>
        </div>
        <div className='concise-component-textfield-behaviours-item'>
          <div>Filled</div>
          <div className='concise-component-textfield-bg-white'>
            <FormField type='text' value='Placeholder' placeholder='Placeholder' label='Label' />
          </div>
        </div>
        <div className='concise-component-textfield-behaviours-item'> 
          <div>Disabled</div>
          <div className='concise-component-textfield-bg-white'>
            <FormField type='text' placeholder='Placeholder' label='Label' isDisabled/>
          </div>
        </div>
      </div>
      <div className='concise-component-textfield-subsubtitle'>Status</div>
      <div className='concise-component-textfield-desc'>
        Input has five states — enabled, focus, filled, and disabled.
      </div>
      <div className='concise-component-textfield-bg-grey'>
        <div className='concise-component-textfield-behaviours-item'>
          <FormField type='text' placeholder='Placeholder' label='None' />
        </div>
        <div className='concise-component-textfield-behaviours-item'>
          <FormField type='text' placeholder='Placeholder' label='Success' isSuccess />
        </div>
        <div className='concise-component-textfield-behaviours-item'>
          <FormField type='text' placeholder='Placeholder' label='Warning' warning='Warning' />
        </div>
        <div className='concise-component-textfield-behaviours-item'>
          <FormField type='text' placeholder='Placeholder' label='Error' error='error'/>
        </div>
        <div className='concise-component-textfield-behaviours-item'> 
          <FormField type='text' placeholder='Placeholder' label='Loading' isLoading/>
        </div>
      </div>
      <div className='concise-component-textfield-behaviours'>Size</div>
      <div className='concise-component-textfield-bg-grey'>
        <div className='concise-component-textfield-size-item'>
          <div>Small</div>
          <FormField type='text' placeholder='Placeholder' label='Label' className='w-64' inputSize='small'/>
        </div>
        <div className='concise-component-textfield-size-item'>
          <div>Medium</div>
          <FormField type='text' placeholder='Placeholder' label='Label' className='w-64' inputSize='medium' />
        </div>
        <div className='concise-component-textfield-size-item'>
          <div>Large</div>
          <FormField type='text' placeholder='Placeholder' label='Label'className='w-64' inputSize='large'/>
        </div>
      </div>
    </div>
  )
}

export default TextFieldPage
