import { useState } from 'react'
import { TMenuType } from 'utils/getMenu'
import { Breadcrumbs, Button, ButtonSplitDropdown, Card, FormField, Modal, Toast } from 'ui-kit'
import { TDropdownOptions } from 'ui-kit/ButtonDropdown'
import { useScaleLoader } from 'utils/getScaleLoader'
import { useModal } from 'utils/getModal'
import './BlogPage.scss'

const BlogPage = () => {
  const breadcrumbPaths = [
    { path: '/', name: 'Home' },
    { path: '/blog', name: 'Blog' },
  ]

  const [visible, toggle] = useModal()
  const [showLoader, hideLoader] = useScaleLoader()
  const [selectedValue, setSelectedValue] = useState('')
  const [selectedMultiValue, setSelectedMultiValue] = useState<string[]>()

  const homeDropdown: TDropdownOptions[] = [
    {
      id: '1',
      title: 'Show Loader',
      childIcon: 'Home',
      action: () => {
        showLoader()
      },
    },
    {
      id: '2',
      title: 'Show Toast',
      childIcon: 'Home',
      action: () => {
        Toast('Heloworld', 'success', 'Heloworld')
      },
    },
  ]

  const optionsDropdown: TMenuType = {
    name: 'optionsDropdown',
    child: [
      {
        name: 'Show Loader',
        icon: 'Home',
        action: () => {
          showLoader()
        },
      },
      {
        name: 'Show Toast',
        action: () => {
          Toast('Heloworld', 'success', 'Heloworld')
        },
      },
      {
        name: 'Show Modal',
        icon: 'Signin',
        action: () => {
          toggle()
        },
      },
    ],
  }

  const showToast = () => {
    Toast('Heloworld', 'success', 'Heloworld')
  }

  const handleSelectData = (value: string) => {
    setSelectedValue(value)
  }

  const handleSelectMultiData = (value: string[]) => {
    setSelectedMultiValue([...value])
  }

  return (
    <>
      <div className='container mx-auto py-10 px-2 lg:px-10'>
        <Breadcrumbs className='mb-6' paths={breadcrumbPaths} />
        <div className='grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 xl:grid-cols-8 mb-6 gap-4 items-center'>
          <Button className='w-full' typeIcon={'Add'} buttonSize='small'>
            Test
          </Button>
          <Button className='w-full' typeIcon={'Add'} buttonSize='big'>
            Test
          </Button>
          <Button className='w-full' buttonSize='small'>
            Test
          </Button>
          <Button className='w-full' buttonSize='big'>
            Test
          </Button>
          <Button className='w-full' buttonSize='big' isDisabled>
            Test
          </Button>
          <Button className='w-full' typeIcon={'Add'} buttonSize='big' isDisabled>
            Test
          </Button>
        </div>
        <div className='grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 xl:grid-cols-8 mb-6 gap-4 items-center'>
          <Button className='w-full' typeIcon={'Add'} buttonSize='small' buttonType='outline'>
            Test
          </Button>
          <Button className='w-full' typeIcon={'Add'} buttonSize='big' buttonType='outline'>
            Test
          </Button>
          <Button className='w-full' buttonSize='small' buttonType='outline'>
            Test
          </Button>
          <Button className='w-full' buttonSize='big' buttonType='outline'>
            Test
          </Button>
          <Button className='w-full' buttonSize='big' buttonType='outline' isDisabled>
            Test
          </Button>
          <Button
            className='w-full'
            typeIcon={'Add'}
            buttonSize='big'
            buttonType='outline'
            isDisabled
          >
            Test
          </Button>
        </div>
        <div className='grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 xl:grid-cols-8 mb-6 gap-4 items-center'>
          <Button className='w-full' typeIcon={'Add'} buttonSize='small' buttonType='transparent'>
            Test
          </Button>
          <Button className='w-full' typeIcon={'Add'} buttonSize='big' buttonType='transparent'>
            Test
          </Button>
          <Button className='w-full' buttonSize='small' buttonType='transparent'>
            Test
          </Button>
          <Button className='w-full' buttonSize='big' buttonType='transparent'>
            Test
          </Button>
          <Button className='w-full' buttonSize='big' buttonType='transparent' isDisabled>
            Test
          </Button>
          <Button
            className='w-full'
            typeIcon={'Add'}
            buttonSize='big'
            buttonType='transparent'
            isDisabled
          >
            Test
          </Button>
        </div>
        <div className='grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 xl:grid-cols-8 mb-6 gap-4 items-center'>
          <Button className='w-full' typeIcon={'Add'} buttonSize='small' buttonType='frameless'>
            Test
          </Button>
          <Button className='w-full' typeIcon={'Add'} buttonSize='big' buttonType='frameless'>
            Test
          </Button>
          <Button className='w-full' buttonSize='small' buttonType='frameless'>
            Test
          </Button>
          <Button className='w-full' buttonSize='big' buttonType='frameless'>
            Test
          </Button>
          <Button className='w-full' buttonSize='big' buttonType='frameless' isDisabled>
            Test
          </Button>
          <Button
            className='w-full'
            typeIcon={'Add'}
            buttonSize='big'
            buttonType='frameless'
            isDisabled
          >
            Test
          </Button>
        </div>
        <div className='grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 xl:grid-cols-8 mb-6 gap-4 items-center'>
          <Button className='w-full' typeIcon={'Add'} buttonSize='small' buttonType='success'>
            Test
          </Button>
          <Button className='w-full' typeIcon={'Add'} buttonSize='big' buttonType='success'>
            Test
          </Button>
          <Button className='w-full' buttonSize='small' buttonType='success'>
            Test
          </Button>
          <Button className='w-full' buttonSize='big' buttonType='success'>
            Test
          </Button>
          <Button className='w-full' buttonSize='big' buttonType='success' isDisabled>
            Test
          </Button>
          <Button
            className='w-full'
            typeIcon={'Add'}
            buttonSize='big'
            buttonType='success'
            isDisabled
          >
            Test
          </Button>
        </div>
        <div className='grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 xl:grid-cols-8 mb-6 gap-4 items-center'>
          <Button className='w-full' typeIcon={'Add'} buttonSize='small' buttonType='danger'>
            Test
          </Button>
          <Button className='w-full' typeIcon={'Add'} buttonSize='big' buttonType='danger'>
            Test
          </Button>
          <Button className='w-full' buttonSize='small' buttonType='danger'>
            Test
          </Button>
          <Button className='w-full' buttonSize='big' buttonType='danger'>
            Test
          </Button>
          <Button className='w-full' buttonSize='big' buttonType='danger' isDisabled>
            Test
          </Button>
          <Button
            className='w-full'
            typeIcon={'Add'}
            buttonSize='big'
            buttonType='danger'
            isDisabled
          >
            Test
          </Button>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mb-6 gap-4 items-center'>
          <ButtonSplitDropdown
            className='mr-6'
            buttonSize='small'
            mainButtonString='Click me'
            mainButtonIconLeft='Home'
            dropdownButtonIconRight='CaretDown'
            dropdownOptions={optionsDropdown}
            onLeftButtonClick={() => showToast()}
          />
          <ButtonSplitDropdown
            className='mr-6'
            buttonSize='big'
            mainButtonString='Click me'
            mainButtonIconLeft='Home'
            dropdownButtonIconRight='CaretDown'
            dropdownOptions={optionsDropdown}
            onLeftButtonClick={() => showToast()}
          />
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 mb-6 gap-4 items-center'>
          <FormField
            label='Dropdown Basic'
            type='select'
            name='dropdownBasic'
            value={selectedValue}
            placeholder='Select Dummy Data'
            options={homeDropdown}
            onChangeSelect={handleSelectData}
            getOptionLabel={'title'}
            getOptionValue={'id'}
            className='mr-6 w-[300px]'
          />
          <FormField
            label='Dropdown Basic'
            type='select'
            name='dropdownBasic2'
            value={selectedValue}
            placeholder='Select Dummy Data'
            options={homeDropdown}
            onChangeSelect={handleSelectData}
            getOptionLabel={'title'}
            getOptionValue={'id'}
            className='mr-6 w-[300px]'
            isDisabled
          />
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 mb-6 gap-4 items-center'>
          <FormField
            label='Dropdown Multi'
            type='multi-select'
            name='dropdownBasic3'
            multiValue={selectedMultiValue}
            placeholder='Select Dummy Data'
            options={homeDropdown}
            onChangeMultiSelect={handleSelectMultiData}
            getOptionLabel={'title'}
            getOptionValue={'id'}
            className='mr-6 w-[300px]'
          />
          <FormField
            label='Dropdown Multi'
            type='multi-select'
            name='dropdownBasic4'
            multiValue={selectedMultiValue}
            placeholder='Select Dummy Data'
            options={homeDropdown}
            onChangeMultiSelect={handleSelectMultiData}
            getOptionLabel={'title'}
            getOptionValue={'id'}
            className='mr-6 w-[300px]'
            isDisabled
          />
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 mb-6 gap-4 items-center'>
          <FormField
            name='name1'
            placeholder='Your Name'
            label='Test Form'
            type='text'
            isFocused
            data-testid='Test Form'
            className='mr-6 w-[300px]'
          />
          <FormField
            name='name2'
            placeholder='Your Name'
            label='Test Form'
            type='text'
            isFocused
            data-testid='Test Form'
            className='mr-6 w-[300px]'
            isDisabled
          />
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 mb-6 gap-4 items-center'>
          <FormField
            name='name3'
            placeholder='Your Name'
            label='Test Form'
            type='textarea'
            isFocused
            data-testid='Test Form'
            className='mr-6 w-[300px]'
          />
          <FormField
            name='name4'
            placeholder='Your Name'
            label='Test Form'
            type='textarea'
            isFocused
            data-testid='Test Form'
            className='mr-6 w-[300px]'
            isDisabled
          />
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 mb-6 gap-4 items-center'>
          <Card
            cardTypography='product'
            cardTitle={'Test Title'}
            cardBody={
              'This placeholder card provides a quick and easy preview of your cards content and design.'
            }
            cardFootnote={'Foot Note Placeholder'}
            tags={['test', 'tags', 'gogo', 'asdd', 'zxcv', 'qaz']}
            mainButton='Button'
            secondButton='Button'
          />
        </div>
      </div>
      <Modal isShown={visible} hide={toggle} headerText={'Modal Title'} headerIcon='Fingerprint'>
        <div>Modal Body</div>
      </Modal>
    </>
  )
}

export default BlogPage
