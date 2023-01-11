import styled from 'styled-components';

const StyledDrawerNav = styled.nav`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0 30px;

  .im-drawer-dashboard,
  .im-drawer-module {
    display: flex;
    align-items: center;
    gap: 20px;
  }

  .im-drawer-dashboard {
    border-top: 1px solid var(--border);
    height: 80px;
    padding-left: 20px;
    cursor: pointer;

    &:hover {
      background-color: var(--primary);
      transition: background-color 0.2s;
      border-radius: 3px;

      .im-drawer-dashboard-name,
      .im-drawer-dashboard-icon {
        color: var(--typeface-white);
        transition: color 0.2s;
      }
    }
  }

  &.collapsed {
    .im-drawer-module-name,
    .im-drawer-dashboard-name {
      visibility: hidden;
      transition: visibility 0.8s;
    }
    .im-drawer-section-title {
      text-align: center;
    }
  }
  .im-drawer-module-name,
  .im-drawer-dashboard-name {
    width: 100%;
    overflow: hidden;
    white-space: nowrap;
  }

  .im-drawer-dashboard-icon {
    color: var(--primary);
  }

  .im-drawer-dashboard-name {
    font-weight: bold;
    color: var(--primary);
    margin: 20px 0;
  }

  .im-drawer-section {
    display: flex;
    flex-direction: column;
    gap: 20px;
    border-top: 1px solid var(--border);
    padding: 30px 0;

    .im-drawer-section-title {
      font-weight: bold;
      font-size: 12px;
      color: var(--typeface-dark);
      text-align: center;
    }

    ul {
      display: flex;
      flex-direction: column;
      gap: 15px;

      .im-drawer-module {
        height: 60px;
        padding-left: 20px;
        border-radius: 3px;
        cursor: pointer;

        &.selected {
          background-color: var(--primary);

          .im-drawer-module-name,
          .im-drawer-module-icon {
            color: var(--typeface-white);
          }
        }

        &:hover:not(.selected) {
          background-color: var(--surface-medium);
        }

        .im-drawer-module-name {
          color: var(--typeface-light);
          font-size: 1.1rem;
        }
      }
    }
  }
`;

export default StyledDrawerNav;
