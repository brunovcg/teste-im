import styled from 'styled-components';

const StyledHeader = styled.div`
  height: 72px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .im-module-title {
    color: var(--typeface-medium);
  }

  .im-header-left-wrapper {
    display: flex;
    gap: 20px;
  }
`;

export default StyledHeader;
