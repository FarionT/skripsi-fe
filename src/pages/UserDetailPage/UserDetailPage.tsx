import { Breadcrumbs, Button, FormField, Headline } from 'ui-kit'
import './UserDetailPage.scss'

type Data = {
  name: string
  job: string
  location: string
}

const UserDetailPage = () => {
  const breadcrumbPaths = [
    { path: '/dashboard', name: 'Home' },
    { path: '/dashboard/user', name: 'User' },
    { path: '/dashboard/user/create', name: 'Create New user' },
  ]

  return (
    <div className='container mx-auto py-10 px-2 lg:px-10'>
      <Breadcrumbs className='mb-6' paths={breadcrumbPaths} type='framed' size='medium' />
      <Headline className='mb-6' headlineText={'Add New User'} />
      <div>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 mb-6 gap-6 items-center'>
          <FormField
            name='userName'
            placeholder='User Name'
            label='Name'
            type='text'
            isFocused
            data-testid='userName'
            className=''
          />
          <FormField
            name='userPoint'
            placeholder='User Point'
            label='Point'
            type='text'
            isFocused
            data-testid='userPoint'
            className=''
            isDisabled
          />
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 mb-6 gap-6 items-center'>
          <FormField
            name='userPhone'
            placeholder='User Phone Number'
            label='Phone Number'
            type='text'
            isFocused
            data-testid='userPhone'
            className=''
          />
          <FormField
            name='userEmail'
            placeholder='User Email'
            label='Email'
            type='text'
            isFocused
            data-testid='userEmail'
            className=''
          />
        </div>
        <div className='flex justify-end mb-6 gap-6 items-center'>
          <Button className='' buttonType='outline' buttonSize='big'>
            Cancel
          </Button>
          <Button className='' typeIcon={'Add'} buttonSize='big'>
            Save New User
          </Button>
        </div>
      </div>
    </div>
  )
}

export default UserDetailPage
