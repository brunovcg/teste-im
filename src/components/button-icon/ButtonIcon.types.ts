import { IconSize } from '../icon/Icon.types';

export interface StyledButtonIconProps {
  backgroundColor?: string;
  hoverBackgroundColor?: string;
  size?: IconSize;
  hide?: boolean;
}

export interface ButtonIconProps extends StyledButtonIconProps {
  icon: string;
  color?: string;
  hoverColor?: string;
  margin?: string;
  injectClass?: string;
  onClick?: () => void;
  notifications?: number;
  error?: boolean;
  disabled?: boolean;
  notificationMargin?: string;
}
