import { ButtonIcon } from '@/components';
import StyledHeader from './Header.styled';
import { AdminPanelHeaderProps } from './Header.types';

function Header({ module }: AdminPanelHeaderProps) {
  return (
    <StyledHeader className="im-admin-panel-header">
      <h1 className="im-module-title">{module}</h1>
      <input />
      <div className="im-header-left-wrapper">
        <ButtonIcon icon="notifications" size="large" notifications={1} />
        <ButtonIcon icon="mail" size="large" />
      </div>
    </StyledHeader>
  );
}

export default Header;
