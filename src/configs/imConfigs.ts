import getEviroment from '@/configs/enviroments';

const imConfigs = {
  localStorageKeys: {
    userInfo: 'IM:user-data',
  },
  servicesBaseURL: {
    userService: getEviroment().backendURL,
  },
  screenBreakPoints: {
    mobile: '320px',
    tablet: '481px',
    desktop: '769px',
    largeScreens: '125px',
    maxWidth: '2500px',
  },
};

export default imConfigs;
