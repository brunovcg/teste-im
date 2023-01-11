import { useState } from 'react';
import StyledDrawer from './Drawer.styled';
import IM_LOGO from '@/assets/images/investor_machine_horizontal-01.png';
import { useTranslation } from 'react-i18next';
import DrawerNav from './drawer-nav/DrawerNav';
import { ButtonIcon } from '@/components';
import { DrawerProps } from './Drawer.types';

function Drawer({ selectedModule, setSelectedModule }: DrawerProps) {
  const [isCollapsedDrawer, setIsCollapsedDrawer] = useState(false);
  const { t } = useTranslation();

  const handleCollapseDrawer = () => {
    setIsCollapsedDrawer((state) => !state);
  };

  const icon = { type: isCollapsedDrawer ? 'arrow_forward_ios' : 'arrow_back_ios', margin: isCollapsedDrawer ? '0 0 0 2px' : '0 0 0 6px' };

  return (
    <StyledDrawer className={`im-admin-painel-drawer ${isCollapsedDrawer ? 'collapsed' : ''}`}>
      <figure>
        <img src={IM_LOGO} alt={t('Commom.InvestorMachine')} />
        <ButtonIcon
          injectClass="im-admin-panel-button-icon"
          icon={icon.type}
          size="small"
          backgroundColor="var(--surface-dark)"
          margin={icon.margin}
          onClick={handleCollapseDrawer}
        />
      </figure>
      <DrawerNav isCollapsedDrawer={isCollapsedDrawer} selectedModule={selectedModule} setSelectedModule={setSelectedModule} />
    </StyledDrawer>
  );
}

export default Drawer;
