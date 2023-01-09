import urlHelpers from '@/helpers/url-helpers/urlHelpers';

const imConfigs = {
  localStorageKeys: {
    userInfo: 'IM:user-data',
  },

  servicesBaseURL: {
    userService: urlHelpers.getEviromentURL(),
  },
};

export default imConfigs;
