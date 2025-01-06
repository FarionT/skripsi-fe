import { NotificationBadge } from 'ui-kit';
import  './NotificationBadgePage.scss'

const NotificationBadgePage = () => {
  return(
    <>
      <div className='concise-component-notifBadge-container'>
      <div className='concise-component-notifBadge-title'>Notifications & Badge</div>
      <div className='concise-component-notifBadge-text'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
      </div>
      <div>
        <div className='concise-component-notifBadge-subtitle'>Anatomy</div>
        <div className='concise-component-notifBadge-desc'>Description text go here</div>
        <div className='concise-component-notifBadge-bg-grey'>
          <NotificationBadge label='Badge'></NotificationBadge>
        </div>
        <div className='concise-component-notifBadge-desc-sec'>
          Usage guidelines description go here. Lorem ipsum dolor sit amet, consectetur adipiscing
          elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          Duis aute irure dolor in
        </div>
      </div>
      <div>
        <div className='concise-component-notifBadge-subtitle'>Variant</div>
        <div className='concise-component-notifBadge-bg-variant'>
          <div className='concise-component-notifBadge-variant'>
            <NotificationBadge label='Badge'></NotificationBadge>
            <div className='concise-component-notifBadge-variant-status'>Badge Status</div>
          </div>
          <div className='concise-component-notifBadge-variant'>
            <NotificationBadge notificationBadgeType='numbered' count={99}></NotificationBadge>
            <div className='concise-component-notifBadge-variant-number'>Badge Number</div>
          </div>
        </div>
        <div className='concise-component-notifBadge-desc-sec'>
          Usage guidelines description go here. Lorem ipsum dolor sit amet, consectetur adipiscing
          elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          Duis aute irure dolor in
        </div>
      </div>
      <div>
        <div className='concise-component-notifBadge-status'>Badge Status</div>
        <div className='concise-component-notifBadge-state'>State</div>
        <div className='concise-component-notifBadge-bg-grey'>
          <NotificationBadge label='Main'></NotificationBadge>
          <NotificationBadge notificationBadgeStatus='success' label='Success'></NotificationBadge>
          <NotificationBadge notificationBadgeStatus='warning' label='Warning'></NotificationBadge>
          <NotificationBadge notificationBadgeStatus='danger' label='Danger'></NotificationBadge>
        </div>
        <div className='concise-component-notifBadge-desc-sec'>
          Usage guidelines description go here. Lorem ipsum dolor sit amet, consectetur adipiscing
          elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          Duis aute irure dolor in
        </div>
      </div>
      <div>
        <div className='concise-component-notifBadge-subtitle'>Badge Number</div>
        <div className='concise-component-notifBadge-desc'>Description text go here</div>
        <div className='concise-component-notifBadge-state'>State</div>
        <div className='concise-component-notifBadge-bg-grey'>
          <div className='concise-component-notifBadge-variant-text'>Badge Notification Only</div>
          <NotificationBadge notificationBadgeType='plain'></NotificationBadge>
          <div className='concise-component-notifBadge-variant-text'>Badge Notification with Numbers</div>
          <NotificationBadge notificationBadgeType='numbered' count={99}></NotificationBadge>
        </div>
        <div className='concise-component-notifBadge-desc-sec'>
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

export default NotificationBadgePage;