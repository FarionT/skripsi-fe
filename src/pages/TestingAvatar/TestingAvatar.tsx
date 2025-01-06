import { Avatar, Headline } from 'ui-kit'
import './TestingAvatar.scss'

const TestingAvatar = () => {
  return (
    <div className='container mx-auto p-2 flex gap-6 flex-col item'>
      <Headline headlineText={'Avatar'} />
      <div className='flex flex-col gap-2'>
        <span>Avatar Size</span>
        <div className='flex gap-4 items-center'>
          <div className='flex gap-2 flex-col items-center justify-center'>
            <Avatar avatarType='icon' avatarAppearance='none' avatarSize='xs' />
            XS
          </div>
          <div className='flex gap-2 flex-col items-center justify-center'>
            <Avatar avatarType='icon' avatarAppearance='none' avatarSize='s' />S
          </div>
          <div className='flex gap-2 flex-col items-center justify-center'>
            <Avatar avatarType='icon' avatarAppearance='none' avatarSize='m' />M
          </div>
          <div className='flex gap-2 flex-col items-center justify-center'>
            <Avatar avatarType='icon' avatarAppearance='none' avatarSize='l' />L
          </div>
          <div className='flex gap-2 flex-col items-center justify-center'>
            <Avatar avatarType='icon' avatarAppearance='none' avatarSize='xl' />
            XL
          </div>
        </div>
      </div>
      <div className='flex flex-col gap-2'>
        <span>Avatar Appearance</span>
        <div className='flex gap-4 items-center'>
          <div className='flex gap-2 flex-col items-center justify-center'>
            <Avatar avatarType='icon' avatarAppearance='none' />
            None
          </div>
          <div className='flex gap-2 flex-col items-center justify-center'>
            <Avatar avatarType='icon' avatarAppearance='error' />
            Error
          </div>
          <div className='flex gap-2 flex-col items-center justify-center'>
            <Avatar avatarType='icon' avatarAppearance='warning' />
            Warning
          </div>
          <div className='flex gap-2 flex-col items-center justify-center'>
            <Avatar avatarType='icon' avatarAppearance='success' />
            Success
          </div>
          <div className='flex gap-2 flex-col items-center justify-center'>
            <Avatar avatarType='icon' avatarAppearance='info' />
            Information
          </div>
        </div>
      </div>
      <div className='flex flex-col gap-2'>
        <span>Avatar Shape</span>
        <div className='flex gap-4 items-center'>
          <div className='flex gap-2 flex-col items-center justify-center'>
            <Avatar avatarType='icon' avatarAppearance='none' avatarShape='circle' />
            Circle
          </div>
          <div className='flex gap-2 flex-col items-center justify-center'>
            <Avatar avatarType='icon' avatarAppearance='none' avatarShape='square' />
            Square
          </div>
        </div>
      </div>
      <div className='flex flex-col gap-2'>
        <span>Avatar Type</span>
        <div className='flex gap-4 items-center'>
          <div className='flex gap-2 flex-col items-center justify-center'>
            <Avatar avatarType='icon' avatarAppearance='none' avatarShape='circle' />
            Icon
          </div>
          <div className='flex gap-2 flex-col items-center justify-center'>
            <Avatar
              avatarType='text'
              avatarAppearance='none'
              avatarShape='circle'
              name='Raditya Herkristito'
            />
            Text
          </div>
          <div className='flex gap-2 flex-col items-center justify-center'>
            <Avatar
              avatarType='image'
              avatarAppearance='none'
              avatarShape='circle'
              url='https://media.licdn.com/dms/image/D5603AQHiKyP90ULvhQ/profile-displayphoto-shrink_100_100/0/1690903939823?e=1714608000&v=beta&t=Gmf90kJNhvSP9MTHa_o3uwDkjIUD9cFZ0bXNxw5iMWA'
            />
            Image
          </div>
        </div>
      </div>
    </div>
  )
}

export default TestingAvatar
