import StyledButtonIcon from './ButtonIcon.styled';
import { Icon, NotificationBubble } from '@/components';
import { ButtonIconProps } from './ButtonIcon.types';

function ButtonIcon({
  icon,
  backgroundColor = 'transparent',
  hoverBackgroundColor,
  hoverColor = 'var(--typeface-medium)',
  onClick,
  color = 'var(--typeface-light)',
  size = 'small',
  margin = '0',
  injectClass = '',
  notifications,
  error,
  disabled,
  hide,
}: ButtonIconProps) {
  return (
    <StyledButtonIcon
      hoverBackgroundColor={hoverBackgroundColor}
      backgroundColor={backgroundColor}
      className={`im-button-icon ${injectClass}`}
      size={size}
      onClick={onClick}
      disabled={disabled}
      hide={hide}
    >
      <Icon hoverColor={hoverColor} size={size} icon={icon} error={error} disabled={disabled} color={color} margin={margin} />
      <NotificationBubble quantity={notifications ?? 0} />
    </StyledButtonIcon>
  );
}

export default ButtonIcon;
