import styled, { css } from 'styled-components';
import { IconSize } from '../icon/Icon.types';
import { StyledButtonIconProps } from './ButtonIcon.types';

const getDimension = (size: IconSize) => {
  const sizes = {
    small: '30px',
    medium: '35px',
    large: '40px;',
  };

  return sizes[(size as keyof object) ?? 'small'];
};

const StyledButtonIcon = styled.button<StyledButtonIconProps>`
  display: flex;
  visibility: ${(props) => (props.hide ? 'hidden' : 'visible')};
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 50%;
  background-color: ${(props) => props.backgroundColor};
  color: ${(props) => props.color};
  width: ${(props) => getDimension(props.size ?? 'small')};
  height: ${(props) => getDimension(props.size ?? 'small')};
  position: relative;

  ${(props) =>
    (props.disabled || props.hide) &&
    css`
      cursor: default;
    `}

  &:hover {
    background-color: ${(props) => props.hoverBackgroundColor};
  }
`;

export default StyledButtonIcon;
