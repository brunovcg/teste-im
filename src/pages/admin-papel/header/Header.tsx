import { ButtonIcon, Avatar } from '@/components';
import StyledHeader from './Header.styled';
import { AdminPanelHeaderProps } from './Header.types';

function Header({ module }: AdminPanelHeaderProps) {
  return (
    <StyledHeader className="im-admin-panel-header">
      <h1 className="im-module-title">{module}</h1>
      <input />
      <div className="im-header-left-wrapper">
        <ButtonIcon color="var(--typeface-medium)" icon="notifications" size="large" notifications={1} />
        <ButtonIcon color="var(--typeface-medium)" icon="mail" size="large" />
        <Avatar
          src="https://www.w3schools.com/howto/img_avatar2.png"
          name="Teste User"
          size="medium"
          onClick={() => console.log('teste')}
        />
      </div>
    </StyledHeader>
  );
}

export default Header;
