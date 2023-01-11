import StyledButtonIcon from './ButtonIcon.styled';
import { Icon, NotificationBubble } from '@/components';
import { ButtonIconProps } from './ButtonIcon.types';

function ButtonIcon({
  icon,
  backgroundColor,
  hoverBackgroundColor,
  onClick,
  color,
  size = 'small',
  margin = '0',
  injectClass = '',
  notifications,
}: ButtonIconProps) {
  const hasNotification = Number.isInteger(notifications);
  return (
    <StyledButtonIcon
      hoverBackgroundColor={hoverBackgroundColor}
      backgroundColor={backgroundColor}
      className={`im-button-icon ${injectClass}`}
      size={size}
      onClick={onClick}
    >
      <Icon size={size} icon={icon} color={color} margin={margin} />
      {hasNotification && <NotificationBubble number={notifications ?? 0} />}
    </StyledButtonIcon>
  );
}

export default ButtonIcon;
