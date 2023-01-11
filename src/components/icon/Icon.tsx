import { IconProps } from './Icon.types';
import StyledIcon from './Icon.styled';
function Icon({ icon, size = 'small', color = 'var(--typeface-dark)', margin = '0', injectClass = '' }: IconProps) {
  return (
    <StyledIcon color={color} size={size} className={`im-icon icon material-symbols-outlined ${injectClass}`} margin={margin}>
      {icon}
    </StyledIcon>
  );
}

export default Icon;

