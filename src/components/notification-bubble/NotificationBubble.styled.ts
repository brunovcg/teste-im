import styled from 'styled-components';
import { NotificationBubbleStyledProps } from './NotificationBuble.types';

const StyledNotificationBubble = styled.div<NotificationBubbleStyledProps>`
  min-width: 22px;
  height: 22px;
  font-size: 13px;
  background-color: var(--secondary);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--typeface-white);
  font-weight: bold;
  position: absolute;
  top: 0;
  margin: ${(props) => props.margin};

  &.im-notification-large {
    width: 35px;
    border-radius: 30px;
    margin: 0 0 0 30px;
  }

  &.im-no-notifications {
    display: none;
  }
`;

export default StyledNotificationBubble;
