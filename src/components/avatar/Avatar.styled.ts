import styled, { css } from 'styled-components';
import { StyledAvatarProps } from './Avatar.types';

const geDimensions = (size: string) => {
  const sizes = {
    small: '30px',
    medium: '40px',
    large: '50px',
  };

  return sizes[size as keyof object];
};

const StyledAvatar = styled.div<StyledAvatarProps>`
  display: flex;
  align-items: center;
  justify-content: center;

  ${(props) =>
    props.onClick &&
    css`
      cursor: pointer;
    `}

  img,
  div {
    border-radius: 50%;
    width: ${(props) => geDimensions(props.size ?? 'small')};
    height: ${(props) => geDimensions(props.size ?? 'small')};
  }
`;

export default StyledAvatar;
