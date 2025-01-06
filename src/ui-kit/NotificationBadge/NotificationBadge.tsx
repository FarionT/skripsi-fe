import classNames from "classnames";
import './NotificationBadge.scss'

export type NotificationBadgeType = 'plain' | 'numbered' | 'status';
export type NotificationBadgeStatus = 'primary' | 'success' | 'warning' | 'danger';

export type TNotificationBadgeProps = {
    className?: string
    notificationBadgeType?: NotificationBadgeType
    notificationBadgeStatus?: NotificationBadgeStatus
    count?: number
    label?: string
};

export const NotificationBadgeComponent: React.FC<TNotificationBadgeProps> = ({
    className,
    notificationBadgeType = 'status',
    notificationBadgeStatus = 'primary',
    count = 0,
    label,
}) => {
    let notificationBadge;
    switch (notificationBadgeType) {
        case 'numbered':
            notificationBadge = <span className="NotificationBadge__numbered">{count}</span>;
            break;
        case 'status':
            notificationBadge = <span className="NotificationBadge__status">{label}</span>;
            break;
        case 'plain':
            notificationBadge = <span className= "NotificationBadge__plain"/>
        default:
            notificationBadge = null;
            break;
    }

    return (
      <div
        className={classNames('NotificationBadge', className, {
            'NotificationBadge__plain': notificationBadgeType === 'plain',
            'NotificationBadge__numbered': notificationBadgeType === 'numbered',
            'NotificationBadge__status': notificationBadgeType === 'status',
            'NotificationBadge__primary': notificationBadgeStatus === 'primary',
            'NotificationBadge__success': notificationBadgeStatus === 'success',
            'NotificationBadge__warning': notificationBadgeStatus === 'warning',
            'NotificationBadge__danger': notificationBadgeStatus === 'danger',          
        })}
      >
        {notificationBadge}
      </div>
    );
  };

export const NotificationBadge = NotificationBadgeComponent;