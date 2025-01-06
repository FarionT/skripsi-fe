import { Avatar } from 'ui-kit'
import './AvaterPage.scss'
import { placeholder } from 'ui-kit/assets/image'

const AvatarPage = () => {
  return (
    <>
      <div className='concise-component-avatar-container'>
        <div className='concise-component-avatar-title'>Avatar</div>
        <div className='concise-component-avatar-text'>
          Avatars use images, icons or text to visually represent people or companies.
        </div>
        <div className='concise-component-avatar-subtitle'>Anatomy</div>
        <div className='concise-component-avatar-bg-grey'>
          <Avatar avatarType='icon' avatarShape='circle' avatarSize='xl' />
        </div>
        <div className='concise-component-avatar-desc-sec'>
          Usage guidelines description go here. Lorem ipsum dolor sit amet, consectetur adipiscing
          elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          Duis aute irure dolor in
        </div>
        <div className='concise-component-avatar-subtitle'>Size</div>
        <div className='concise-component-avatar-bg-grey'>
          <div className='concise-component-avatar-item'>
            <Avatar avatarType='icon' avatarShape='circle' avatarSize='xs' />
            <div className='concise-component-avatar-item-text'>Avatar (XS)</div>
          </div>
          <div className='concise-component-avatar-item'>
            <Avatar avatarType='icon' avatarShape='circle' avatarSize='s' />
            <div className='concise-component-avatar-item-text'>Avatar (S)</div>
          </div>
          <div className='concise-component-avatar-item'>
            <Avatar avatarType='icon' avatarShape='circle' avatarSize='m' />
            <div className='concise-component-avatar-item-text'>Avatar (M)</div>
          </div>
          <div className='concise-component-avatar-item'>
            <Avatar avatarType='icon' avatarShape='circle' avatarSize='l' />
            <div className='concise-component-avatar-item-text'>Avatar (L)</div>
          </div>
          <div className='concise-component-avatar-item'>
            <Avatar avatarType='icon' avatarShape='circle' avatarSize='xl' />
            <div className='concise-component-avatar-item-text'>Avatar (XL)</div>
          </div>
        </div>
        <div className='concise-component-avatar-desc-sec'>
          Usage guidelines description go here. Lorem ipsum dolor sit amet, consectetur adipiscing
          elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          Duis aute irure dolor in
        </div>
        <div className='concise-component-avatar-heading'>Appearance</div>
        <div className='concise-component-avatar-truncation-text'>Style Type</div>
        <div className='concise-component-avatar-bg-grey'>
          <div className='concise-component-avatar-item'>
            <Avatar avatarType='icon' avatarShape='circle' avatarSize='m' />
            <div className='concise-component-avatar-item-text'>Icon</div>
          </div>
          <div className='concise-component-avatar-item'>
            <Avatar avatarType='image' url={placeholder} avatarShape='circle' avatarSize='m' />
            <div className='concise-component-avatar-item-text'>Image</div>
          </div>
          <div className='concise-component-avatar-item'>
            <Avatar avatarType='text' name='Ya Ja' avatarShape='circle' avatarSize='m' />
            <div className='concise-component-avatar-item-text'>Text</div>
          </div>
        </div>
        <div className='concise-component-avatar-truncation-text'>Emphasis</div>
        <div className='concise-component-avatar-bg-grey'>
          <div className='concise-component-avatar-item'>
            <Avatar avatarType='icon' avatarShape='circle' avatarSize='m' />
            <div className='concise-component-avatar-item-text'>Icon</div>
          </div>
          <div className='concise-component-avatar-item'>
            <Avatar avatarType='image' url={placeholder} avatarShape='circle' avatarSize='m' />
            <div className='concise-component-avatar-item-text'>Image</div>
          </div>
          <div className='concise-component-avatar-item'>
            <Avatar avatarType='text' name='Ya Ja' avatarShape='circle' avatarSize='m' />
            <div className='concise-component-avatar-item-text'>Text</div>
          </div>
        </div>
        <div className='concise-component-avatar-heading'>Status</div>
        <div className='concise-component-avatar-bg-grey'>
          <div className='concise-component-avatar-item'>
            <Avatar avatarType='icon' avatarShape='circle' avatarAppearance='none' />
            <div className='concise-component-avatar-item-text'>None</div>
          </div>
          <div className='concise-component-avatar-item'>
            <Avatar avatarType='icon' avatarShape='circle' avatarAppearance='error' />
            <div className='concise-component-avatar-item-text'>Error</div>
          </div>
          <div className='concise-component-avatar-item'>
            <Avatar avatarType='icon' avatarShape='circle' avatarAppearance='warning' />
            <div className='concise-component-avatar-item-text'>Warning</div>
          </div>
          <div className='concise-component-avatar-item'>
            <Avatar avatarType='icon' avatarShape='circle' avatarAppearance='success' />
            <div className='concise-component-avatar-item-text'>Success</div>
          </div>
          <div className='concise-component-avatar-item'>
            <Avatar avatarType='icon' avatarShape='circle' avatarAppearance='info' />
            <div className='concise-component-avatar-item-text'>Info</div>
          </div>
        </div>
        <div className='concise-component-avatar-heading'>Shape</div>
        <div className='concise-component-avatar-bg-grey'>
          <div className='concise-component-avatar-item'>
            <Avatar avatarType='icon' avatarShape='circle' />
            <div className='concise-component-avatar-item-text'>Circle</div>
          </div>
          <div className='concise-component-avatar-item'>
            <Avatar avatarType='icon' avatarShape='square' />
            <div className='concise-component-avatar-item-text'>Square</div>
          </div>
        </div>
        <div className='concise-component-avatar-desc-sec'>
          Usage guidelines description go here. Lorem ipsum dolor sit amet, consectetur adipiscing
          elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          Duis aute irure dolor in
        </div>
        <div className='concise-component-avatar-subtitle'>Size</div>
        <div className='concise-component-avatar-bg-grey-col'>
          <div className='concise-component-avatar-size-item'>
            <div className='concise-component-avatar-item'>
              <Avatar avatarType='text' name='Ya Je' avatarSize='xs' />
              <div className='concise-component-avatar-item-text'>Avatar (XS)</div>
            </div>
            <div className='concise-component-avatar-item'>
              <Avatar avatarType='text' name='Ya Je' avatarSize='s' />
              <div className='concise-component-avatar-item-text'>Avatar (S)</div>
            </div>
            <div className='concise-component-avatar-item'>
              <Avatar avatarType='text' name='Ya Je' avatarSize='m' />
              <div className='concise-component-avatar-item-text'>Avatar (M)</div>
            </div>
            <div className='concise-component-avatar-item'>
              <Avatar avatarType='text' name='Ya Je' avatarSize='l' />
              <div className='concise-component-avatar-item-text'>Avatar (L)</div>
            </div>
            <div className='concise-component-avatar-item'>
              <Avatar avatarType='text' name='Ya Je' avatarSize='xl' />
              <div className='concise-component-avatar-item-text'>Avatar (XL)</div>
            </div>    
          </div>
          <div className='concise-component-avatar-size-item'>
            <div className='concise-component-avatar-item'>
              <Avatar avatarType='icon' avatarSize='xs' />
              <div className='concise-component-avatar-item-text'>Avatar (XS)</div>
            </div>
            <div className='concise-component-avatar-item'>
              <Avatar avatarType='icon' avatarSize='s' />
              <div className='concise-component-avatar-item-text'>Avatar (S)</div>
            </div>
            <div className='concise-component-avatar-item'>
              <Avatar avatarType='icon' avatarSize='m' />
              <div className='concise-component-avatar-item-text'>Avatar (M)</div>
            </div>
            <div className='concise-component-avatar-item'>
              <Avatar avatarType='icon' avatarSize='l' />
              <div className='concise-component-avatar-item-text'>Avatar (L)</div>
            </div>
            <div className='concise-component-avatar-item'>
              <Avatar avatarType='icon' avatarSize='xl' />
              <div className='concise-component-avatar-item-text'>Avatar (XL)</div>
            </div>
          </div>
          <div className='concise-component-avatar-size-item'>
            <div className='concise-component-avatar-item'>
              <Avatar avatarType='image' url={placeholder} avatarSize='xs' />
              <div className='concise-component-avatar-item-text'>Avatar (XS)</div>
            </div>
            <div className='concise-component-avatar-item'>
              <Avatar avatarType='image' url={placeholder} avatarSize='s' />
              <div className='concise-component-avatar-item-text'>Avatar (S)</div>
            </div>
            <div className='concise-component-avatar-item'>
              <Avatar avatarType='image' url={placeholder} avatarSize='m' />
              <div className='concise-component-avatar-item-text'>Avatar (M)</div>
            </div>
            <div className='concise-component-avatar-item'>
              <Avatar avatarType='image' url={placeholder} avatarSize='l' />
              <div className='concise-component-avatar-item-text'>Avatar (L)</div>
            </div>
            <div className='concise-component-avatar-item'>
              <Avatar avatarType='image' url={placeholder} avatarSize='xl' />
              <div className='concise-component-avatar-item-text'>Avatar (XL)</div>
            </div>
          </div>
        </div>
        <div className='concise-component-avatar-desc-sec'>
          Usage guidelines description go here. Lorem ipsum dolor sit amet, consectetur adipiscing
          elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          Duis aute irure dolor in
        </div>
      </div>
    </>
  )
}

export default AvatarPage
