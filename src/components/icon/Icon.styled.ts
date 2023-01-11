import styled from 'styled-components';
import { StyledIconProps, IconSize } from './Icon.types';

const getSize = (size: IconSize) => {
  const sized = {
    small: '20px',
    medium: '25px',
    large: '30px',
  };

  return sized[(size as keyof object) ?? 'small'];
};

const StyledIcon = styled.span<StyledIconProps>`
  font-size: ${(props) => getSize(props.size)};
  color: ${(props) => props.color};
  font-weight: bold;
  margin: ${(props) => props.margin};
`;

export default StyledIcon;
