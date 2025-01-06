import { FormField } from 'ui-kit'

const TestingTextArea = () => {
  return (
    <>
      <div className='flex flex-wrap p-5 gap-5'>
        <FormField type='textarea' placeholder='Placeholder' />
        <FormField type='textarea' label='Label' placeholder='Placeholder' textAreaMax={10} />
        <FormField type='textarea' label='Disabled' placeholder='Placeholder' isDisabled />
      </div>
      <div className='flex flex-wrap p-5 gap-5'>
        <FormField
          type='textarea'
          label='Loading'
          placeholder='Placeholder'
          textAreaMax={300}
          isLoading={true}
        />
        <FormField
          type='textarea'
          label='Warning'
          placeholder='Placeholder'
          textAreaMax={300}
          warning='warning'
        />
        <FormField
          type='textarea'
          label='Error'
          placeholder='Placeholder'
          textAreaMax={300}
          error='error'
        />
        <FormField
          type='textarea'
          label='Success'
          placeholder='Placeholder'
          textAreaMax={300}
          isSuccess={true}
        />
      </div>
      <div className='flex flex-wrap p-5 gap-5'>
        <FormField
          type='textarea'
          label='Small'
          placeholder='Placeholder'
          textAreaMax={300}
          textAreaSize='small'
        />
        <FormField
          type='textarea'
          label='Medium'
          placeholder='Placeholder'
          textAreaMax={300}
          textAreaSize='medium'
        />
        <FormField
          type='textarea'
          label='Large'
          placeholder='Placeholder'
          textAreaMax={300}
          textAreaSize='large'
        />
      </div>
    </>
  )
}

export default TestingTextArea
