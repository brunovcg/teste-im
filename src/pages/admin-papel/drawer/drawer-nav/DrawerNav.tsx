import { useTranslation } from 'react-i18next';
import { Icon } from '@/components';
import StyledDrawerNav from './DrawerNav.styled';
import { DrawerNavProps } from './DrawerNav.types';

function DrawerNav({ isCollapsedDrawer, selectedModule, setSelectedModule }: DrawerNavProps) {
  const { t } = useTranslation();

  const menu = [
    {
      id: 1,
      name: t('AdminPanel.Drawer.Interface'),
      modules: [
        {
          id: 1,
          name: t('AdminPanel.Drawer.ProcessRunner'),
          icon: 'settings',
        },
        {
          id: 2,
          name: t('AdminPanel.Drawer.Parameters'),
          icon: 'build',
        },
      ],
    },
    {
      id: 2,
      name: t('AdminPanel.Drawer.AddOns'),
      modules: [
        {
          id: 1,
          name: t('AdminPanel.Drawer.Analytics'),
          icon: 'analytics',
        },
        {
          id: 2,
          name: t('AdminPanel.Drawer.Reports'),
          icon: 'lab_profile',
        },
        {
          id: 3,
          name: t('AdminPanel.Drawer.ScriptsRunner'),
          icon: 'code_blocks',
        },
      ],
    },
  ];

  const handleModuleClick = (optionName: string) => {
    setSelectedModule(optionName);
  };

  const isSelectedModule = (optionName: string) => (selectedModule === optionName ? 'selected' : '');
  const showOptionNames = isCollapsedDrawer ? 'collapsed' : '';

  return (
    <StyledDrawerNav className={`im-drawer-nav ${showOptionNames}`}>
      <div
        onClick={() => handleModuleClick(t('AdminPanel.Drawer.Dashboard'))}
        className="im-drawer-dashboard im-drawer-module"
        role="button"
      >
        <Icon icon="dashboard" size="medium" injectClass="im-drawer-dashboard-icon" margin="0 0 2px 0" />
        <h3 className="im-drawer-dashboard-name">{t('AdminPanel.Drawer.Dashboard')}</h3>
      </div>
      {menu.map((item) => (
        <div key={item.id} className="im-drawer-section">
          <h4 className="im-drawer-section-title">{item.name}</h4>
          <ul>
            {item.modules.map((subitem) => (
              <li
                onClick={() => handleModuleClick(subitem.name)}
                key={subitem.id}
                className={`im-drawer-module ${isSelectedModule(subitem.name)}`}
                role="button"
                title={subitem.name}
              >
                <Icon size="medium" icon={subitem.icon} color="var(--typeface-light)" injectClass="im-drawer-module-icon" />
                <p className="im-drawer-module-name">{subitem.name}</p>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </StyledDrawerNav>
  );
}

export default DrawerNav;
