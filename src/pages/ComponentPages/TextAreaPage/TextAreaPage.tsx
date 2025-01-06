import { FormField } from 'ui-kit'
import './TextAreaPage.scss'
import { useState } from 'react'

const TextAreaPage = () => {
  const [input1, setInput1] = useState('')
  const [input2, setInput2] = useState('')
  const [input3, setInput3] = useState('')
  const [input4, setInput4] = useState('')
  const [input5, setInput5] = useState('')
  const [input6, setInput6] = useState('')
  const [input7, setInput7] = useState('')
  const [input8, setInput8] = useState('')
  const [input9, setInput9] = useState('')
  const [input10, setInput10] = useState('Placeholder')
  const [input11, setInput11] = useState('')
  const [input12, setInput12] = useState('')
  const [input13, setInput13] = useState('')
  const [input14, setInput14] = useState('')

  return (
    <div className='concise-component-textarea-container'>
      <div className='concise-component-textarea-title'>Text Area</div>
      <div className='concise-component-textarea-subtitle'>
        Inputs allow users to enter text or numbers.
      </div>
      <div className='concise-component-textarea-subsubtitle'>Anatomy</div>
      <div className='concise-component-textarea-bg-grey'>
        <FormField
          type='textarea'
          value={input1}
          onChangeTextArea={(e) => setInput1(e.target.value)}
          className='w-64'
          label='Label'
          placeholder='Placeholder'
        />
      </div>
      <div className='concise-component-textarea-desc-sec'>
        Usage guidelines description go here. Lorem ipsum dolor sit amet, consectetur adipiscing
        elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        Duis aute irure dolor in
      </div>
      <div className='concise-component-textarea-variants'>Variants</div>
      <div className='concise-component-textarea-bg-grey'>
        <div className='concise-component-textarea-type'>
          <div>No Label</div>
          <FormField
            type='textarea'
            value={input2}
            onChangeTextArea={(e) => setInput2(e.target.value)}
            placeholder='Placeholer'
          />
        </div>
        <div className='concise-component-textarea-type'>
          <div>Basic</div>
          <FormField
            type='textarea'
            value={input3}
            onChangeTextArea={(e) => setInput3(e.target.value)}
            placeholder='Placeholer'
          />
        </div>
      </div>
      <div className='concise-component-textarea-desc-sec'>
        Usage guidelines description go here. Lorem ipsum dolor sit amet, consectetur adipiscing
        elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        Duis aute irure dolor in
      </div>
      <div className='concise-component-textarea-variations'>Appearance</div>
      <div className='concise-component-textarea-variants'>Status</div>
      <div className='concise-component-textarea-desc-sec'>
        Textarea can display a status which can be used for form validation. The four status types
        are success, loading, warning, and error.
      </div>
      <div className='concise-component-textarea-bg-grey'>
        <FormField
          type='textarea'
          value={input4}
          onChangeTextArea={(e) => setInput4(e.target.value)}
          label='Success'
          placeholder='Placeholder'
          isSuccess
        />
        <FormField
          type='textarea'
          value={input5}
          onChangeTextArea={(e) => setInput5(e.target.value)}
          label='Loading'
          placeholder='Placeholder'
          isLoading
        />
        <FormField
          type='textarea'
          label='Warning'
          value={input6}
          onChangeTextArea={(e) => setInput6(e.target.value)}
          placeholder='Placeholder'
          warning='Helper Text'
        />
        <FormField
          type='textarea'
          value={input7}
          onChangeTextArea={(e) => setInput7(e.target.value)}
          label='Error'
          placeholder='Placeholder'
          error='Helper Text'
        />
      </div>
      <div className='concise-component-textarea-variations'>Behaviours</div>
      <div className='concise-component-textarea-variants'>State</div>
      <div className='concise-component-textarea-desc-sec'>
        Textarea has six possible states — enabled, focus, active, filled, disabled, and read-only.
      </div>
      <div className='concise-component-textarea-bg-grey'>
        <FormField
          type='textarea'
          value={input8}
          onChangeTextArea={(e) => setInput9(e.target.value)}
          placeholder='Placeholder'
          label='Enable'
        />
        <FormField
          type='textarea'
          value={input9}
          onChangeTextArea={(e) => setInput9(e.target.value)}
          placeholder='Placeholder'
          label='Focused'
        />
        <FormField
          type='textarea'
          value={input10}
          onChangeTextArea={(e) => setInput10(e.target.value)}
          placeholder='Placeholder'
          label='Filled'
        />
        <FormField
          type='textarea'
          value={input11}
          onChangeTextArea={(e) => setInput11(e.target.value)}
          placeholder='Placeholder'
          label='Disabled'
          isDisabled
        />
      </div>
      <div className='concise-component-textarea-variations'>Size</div>
      <div className='concise-component-textarea-bg-size'>
        <div>Small</div>
        <FormField
          type='textarea'
          value={input12}
          onChangeTextArea={(e) => setInput12(e.target.value)}
          label='Label'
          placeholder='Placeholder'
          textAreaSize='small'
        />
        <div>Medium</div>
        <FormField
          type='textarea'
          value={input13}
          onChangeTextArea={(e) => setInput13(e.target.value)}
          label='Label'
          placeholder='Placeholder'
          textAreaSize='medium'
        />
        <div>Large</div>
        <FormField
          type='textarea'
          value={input14}
          onChangeTextArea={(e) => setInput14(e.target.value)}
          label='Label'
          placeholder='Placeholder'
          textAreaSize='large'
        />
      </div>
    </div>
  )
}

export default TextAreaPage
