import StyledNotificationBubble from './NotificationBubble.styled';
import { NotificationBubbleProps } from './NotificationBuble.types';

function NotificationBubble({ quantity, margin = '0 0 0 18px' }: NotificationBubbleProps) {
  const checkQuantity = quantity > 99 ? { class: 'im-notification-large', quantity: '+99' } : { class: '', quantity: quantity };
  const hasNotifications = quantity <= 0 ? 'im-no-notifications' : '';

  return (
    <StyledNotificationBubble className={`im-notification-bubble ${checkQuantity.class} ${hasNotifications}`} margin={margin}>
      {checkQuantity.quantity}
    </StyledNotificationBubble>
  );
}

export default NotificationBubble;
