import styled from 'styled-components';

const StyledAdminPainel = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  background-color: var(--surface-medium);

  .im-admin-right-container {
    display: flex;
    flex-direction: column;
    height: 100%;
    flex: 1;
    padding: 15px 40px;
    overflow: hidden;
  }
`;

export default StyledAdminPainel;
