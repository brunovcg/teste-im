export type IconSize = 'small' | 'medium' | 'large';

export type IconProps = {
  icon: string;
  size?: IconSize;
  color?: string;
  margin?: string;
  injectClass?: string;
  notifications?: number;
};

export type StyledIconProps = {
  size: IconSize;
  margin: string;
};
