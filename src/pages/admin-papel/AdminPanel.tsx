import { useState } from 'react';
import StyledAdminPainel from './AdminPanel.styled';
import Drawer from './drawer/Drawer';
import Header from './header/Header';
import Main from './main/Main';
import { useTranslation } from 'react-i18next';

function AdminPanel() {
  const { t } = useTranslation();
  const [selectedModule, setSelectedModule] = useState(t('AdminPanel.Drawer.Dashboard'));
  return (
    <StyledAdminPainel className="im-admin-painel">
      <Drawer setSelectedModule={setSelectedModule} selectedModule={selectedModule} />
      <div className="im-admin-right-container">
        <Header module={selectedModule} />
        <Main />
      </div>
    </StyledAdminPainel>
  );
}

export default AdminPanel;
