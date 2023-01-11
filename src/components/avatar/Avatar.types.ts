export interface StyledAvatarProps {
  size?: 'small' | 'large' | 'medium';
}

export interface AvatarProps extends StyledAvatarProps {
  name: string;
  src: string;
  onClick?: () => void;
}

