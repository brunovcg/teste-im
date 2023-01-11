import { ButtonIcon, Avatar, FieldInput } from '@/components';
import { useTranslation } from 'react-i18next';
import StyledHeader from './Header.styled';
import { AdminPanelHeaderProps } from './Header.types';

function Header({ module }: AdminPanelHeaderProps) {
  const { t } = useTranslation();
  return (
    <StyledHeader className="im-admin-panel-header">
      <h1 className="im-module-title">{module}</h1>
      <FieldInput onChange={(e) => console.log(e)} placeholder={t('AdminPanel.Header.Search')} width="300px" />
      <div className="im-header-left-wrapper">
        <ButtonIcon hoverColor="var(--typeface-medium)" color="var(--typeface-light)" icon="notifications" size="medium" notifications={2} />
        <ButtonIcon hoverColor="var(--typeface-medium)" color="var(--typeface-light)" icon="mail" size="medium" />
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
