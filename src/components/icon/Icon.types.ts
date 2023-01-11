export type IconSize = 'small' | 'medium' | 'large' | undefined;

export interface StyledIconProps {
  size?: IconSize;
  margin?: string;
  hoverColor?: string;
  disabled?: boolean;
  error?: boolean;
}

export interface IconProps extends StyledIconProps {
  icon: string;
  color?: string;
  injectClass?: string;
  notifications?: number;
}
