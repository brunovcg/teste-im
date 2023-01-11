import { IconSize } from '../icon/Icon.types';

export interface StyledButtonIconProps {
  backgroundColor?: string;
  hoverBackgroundColor?: string;
  size?: IconSize;
}

export interface ButtonIconProps extends StyledButtonIconProps {
  icon: string;
  color?: string;
  margin?: string;
  injectClass?: string;
  onClick?: () => void;
  notifications?: number;
}
