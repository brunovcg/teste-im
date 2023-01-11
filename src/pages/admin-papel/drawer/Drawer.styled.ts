import styled from 'styled-components';

const StyledDrawer = styled.div`
  background-color: var(--surface-white);
  border-right: 1px solid var(--border);
  box-shadow: var(--box-shadow-dark);
  width: 300px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: 1s width;

  &.collapsed {
    width: 130px;
    transition: 1s width;
  }

  figure {
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 30px;
    position: relative;
    img {
      width: 80%;
    }

    .im-admin-panel-button-icon {
      position: absolute;
      right: 0;
      margin-top: 4px;
      margin-right: -12px;
      opacity: 0%;
    }
  }

  &:hover {
    .im-admin-panel-button-icon {
      opacity: 100%;
      transition: opacity 0.3s;
    }
  }
`;

export default StyledDrawer;
