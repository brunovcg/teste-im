import { IconProps } from './Icon.types';
import StyledIcon from './Icon.styled';
function Icon({
  icon,
  size = 'small',
  color = 'var(--typeface-dark)',
  margin = '0',
  injectClass = '',
  hoverColor,
  disabled = false,
  error = false,
}: IconProps) {
  return (
    <StyledIcon
      hoverColor={hoverColor}
      color={color}
      size={size}
      className={`im-icon icon material-symbols-outlined ${injectClass}`}
      margin={margin}
      disabled={disabled}
      error={error}
    >
      {icon}
    </StyledIcon>
  );
}

export default Icon;
