import { FormField } from 'ui-kit'

const TestingForm = () => {
  return (
    <>
      <div className='flex flex-wrap p-5 gap-5'>
        <FormField className='w-64' type={'text'} placeholder='Placeholder' />
        <FormField className='w-64' type={'text'} label='Label' placeholder='Placeholder' />
        <FormField
          className='w-64'
          type={'text'}
          label='Label'
          placeholder='Placeholder'
          leadingIcon='Add'
        />
        <FormField
          className='w-64'
          type={'text'}
          label='Label'
          placeholder='Placeholder'
          trailingIcon='Add'
        />
        <FormField
          className='w-64'
          type={'text'}
          label='Label'
          leading='Rp'
          placeholder='Placeholder'
        />
        <FormField className='w-64' type={'number'} label='Label' placeholder='Placeholder' />
        <FormField
          className='w-64'
          type={'text'}
          label='Label'
          isDisabled
          placeholder='Placeholder'
        />
        <FormField
          className='w-64'
          type={'text'}
          label='Label'
          error='Ini error'
          placeholder='Placeholder'
        />
        <FormField
          className='w-64'
          type={'text'}
          label='Label'
          isSuccess={true}
          placeholder='Placeholder'
        />
        <FormField
          className='w-64'
          type={'text'}
          label='Label'
          warning='Ini warning'
          placeholder='Placeholder'
        />
        <FormField
          className='w-64'
          type={'text'}
          label='Label'
          isLoading={true}
          placeholder='Placeholder'
        />
      </div>
      <div className='flex flex-wrap p-5 gap-5'>
        <FormField
          className='w-64'
          type={'text'}
          label='Label'
          inputSize='small'
          placeholder='Placeholder'
        />
        <FormField
          className='w-64'
          type={'text'}
          label='Label'
          inputSize='medium'
          placeholder='Placeholder'
        />
        <FormField className='w-64' type={'text'} label='Label' placeholder='Placeholder' />
      </div>
    </>
  )
}

export default TestingForm
