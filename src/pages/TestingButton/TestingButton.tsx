import { useState } from 'react'
import { Button } from 'ui-kit'

const TestingButton = () => {
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
      <div className='flex flex-wrap gap-5 p-5'>
        <Button>Button</Button>
        <Button typeIcon='Add'>Button</Button>
        <Button typeIconRight='Add'>Button</Button>
        <Button typeIcon='Add'></Button>
      </div>
      <div className='flex flex-wrap gap-5 p-5'>
        <Button>Primary</Button>
        <Button buttonAppearance='destructive'>Desctructive</Button>
        <Button buttonAppearance='secondary'>Secondary</Button>
        <Button buttonAppearance='info'>Info</Button>
      </div>
      <p className='pl-5 pt-5'>Primary</p>
      <div className='flex flex-wrap gap-5 p-5'>
        <Button typeIcon='Add'>Filled</Button>
        <Button buttonType='outline' typeIcon='Add'>
          Outline
        </Button>
        <Button buttonType='transparent' typeIcon='Add'>
          Transparent
        </Button>
        <Button buttonType='frameless' typeIcon='Add'>
          Frameless
        </Button>
        <Button buttonType='link' typeIcon='Add'>
          Link
        </Button>
      </div>
      <div className='flex flex-wrap gap-5 p-5'>
        <Button isDisabled>Filled</Button>
        <Button buttonType='outline' isDisabled>
          Outline
        </Button>
        <Button buttonType='transparent' isDisabled>
          Transparent
        </Button>
        <Button buttonType='frameless' isDisabled>
          Frameless
        </Button>
        <Button buttonType='link' isDisabled>
          Link
        </Button>
      </div>
      <p className='pl-5 pt-5'>Destructive</p>
      <div className='flex flex-wrap gap-5 p-5'>
        <Button buttonAppearance='destructive' typeIcon='Add'>
          Filled
        </Button>
        <Button buttonAppearance='destructive' buttonType='outline' typeIcon='Add'>
          Outline
        </Button>
        <Button buttonAppearance='destructive' buttonType='transparent' typeIcon='Add'>
          Transparent
        </Button>
        <Button buttonAppearance='destructive' buttonType='frameless' typeIcon='Add'>
          Frameless
        </Button>
        <Button buttonAppearance='destructive' buttonType='link' typeIcon='Add'>
          Link
        </Button>
      </div>
      <div className='flex flex-wrap gap-5 p-5'>
        <Button buttonAppearance='destructive' isDisabled>
          Filled
        </Button>
        <Button buttonAppearance='destructive' buttonType='outline' isDisabled>
          Outline
        </Button>
        <Button buttonAppearance='destructive' buttonType='transparent' isDisabled>
          Transparent
        </Button>
        <Button buttonAppearance='destructive' buttonType='frameless' isDisabled>
          Frameless
        </Button>
        <Button buttonAppearance='destructive' buttonType='link' isDisabled>
          Link
        </Button>
      </div>
      <p className='pl-5 pt-5'>Secondary</p>
      <div className='flex flex-wrap gap-5 p-5'>
        <Button buttonAppearance='secondary' typeIcon='Add'>
          Filled
        </Button>
        <Button buttonAppearance='secondary' buttonType='outline' typeIcon='Add'>
          Outline
        </Button>
        <Button buttonAppearance='secondary' buttonType='transparent' typeIcon='Add'>
          Transparent
        </Button>
        <Button buttonAppearance='secondary' buttonType='frameless' typeIcon='Add'>
          Frameless
        </Button>
        <Button buttonAppearance='secondary' buttonType='link' typeIcon='Add'>
          Link
        </Button>
      </div>
      <div className='flex flex-wrap gap-5 p-5'>
        <Button buttonAppearance='secondary' isDisabled>
          Filled
        </Button>
        <Button buttonAppearance='secondary' buttonType='outline' isDisabled>
          Outline
        </Button>
        <Button buttonAppearance='secondary' buttonType='transparent' isDisabled>
          Transparent
        </Button>
        <Button buttonAppearance='secondary' buttonType='frameless' isDisabled>
          Frameless
        </Button>
        <Button buttonAppearance='secondary' buttonType='link' isDisabled>
          Link
        </Button>
      </div>
      <p className='pl-5 pt-5'>Info</p>
      <div className='flex flex-wrap gap-5 p-5'>
        <Button buttonAppearance='info' typeIcon='Add'>
          Filled
        </Button>
        <Button buttonAppearance='info' buttonType='outline' typeIcon='Add'>
          Outline
        </Button>
        <Button buttonAppearance='info' buttonType='transparent' typeIcon='Add'>
          Transparent
        </Button>
        <Button buttonAppearance='info' buttonType='frameless' typeIcon='Add'>
          Frameless
        </Button>
        <Button buttonAppearance='info' buttonType='link'>
          Link
        </Button>
      </div>
      <div className='flex flex-wrap gap-5 p-5'>
        <Button buttonAppearance='info' isDisabled>
          Filled
        </Button>
        <Button buttonAppearance='info' buttonType='outline' isDisabled>
          Outline
        </Button>
        <Button buttonAppearance='info' buttonType='transparent' isDisabled>
          Transparent
        </Button>
        <Button buttonAppearance='info' buttonType='frameless' isDisabled>
          Frameless
        </Button>
        <Button buttonAppearance='info' buttonType='link' isDisabled>
          Link
        </Button>
      </div>
      <p className='pl-5 pt-5'>Small, Medium, Large</p>
      <div className='flex flex-wrap gap-5 p-5'>
        <Button buttonSize='small' typeIcon='Add'>
          Filled
        </Button>
        <Button buttonType='outline' buttonSize='small'>
          Outline
        </Button>
        <Button buttonType='transparent' buttonSize='small'>
          Transparent
        </Button>
        <Button buttonType='frameless' buttonSize='small'>
          Frameless
        </Button>
        <Button buttonType='link' buttonSize='small'>
          Link
        </Button>
      </div>
      <div className='flex flex-wrap gap-5 p-5'>
        <Button buttonSize='medium' typeIcon='Add'>
          Filled
        </Button>
        <Button buttonType='outline' buttonSize='medium' typeIcon='Add'>
          Outline
        </Button>
        <Button buttonType='transparent' buttonSize='medium'>
          Transparent
        </Button>
        <Button buttonType='frameless' buttonSize='medium'>
          Frameless
        </Button>
        <Button buttonType='link' buttonSize='medium'>
          Link
        </Button>
      </div>
      <div className='flex flex-wrap gap-5 p-5'>
        <Button buttonSize='big' typeIcon='Add'>
          Filled
        </Button>
        <Button buttonType='outline' buttonSize='big'>
          Outline
        </Button>
        <Button buttonType='transparent' buttonSize='big'>
          Transparent
        </Button>
        <Button buttonType='frameless' buttonSize='big'>
          Frameless
        </Button>
        <Button buttonType='link' buttonSize='big'>
          Link
        </Button>
      </div>
      <p className='pl-5 pt-5'>Danger, Success, Loading</p>
      <div className='grid grid-cols-3 gap-10 p-5'>
        <Button onClick={loadingHandler} isLoading={loading} className='w-full h-full'>
          Loading
        </Button>
        <Button onClick={warningHandler} isWarning={warning} className='w-full h-full'>
          Danger
        </Button>
        <Button onClick={successHandler} isSuccess={success} className='w-full h-full'>
          Success
        </Button>
      </div>
    </>
  )
}

export default TestingButton
