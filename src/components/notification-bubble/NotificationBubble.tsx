import StyledNotificationBubble from './NotificationBubble.styled';
import { NotificationBubbleProps } from './NotificationBuble.types';

function NotificationBubble({ number, margin = '0 0 0 18px' }: NotificationBubbleProps) {
  return <StyledNotificationBubble margin={margin}>{number}</StyledNotificationBubble>;
}

export default NotificationBubble;
