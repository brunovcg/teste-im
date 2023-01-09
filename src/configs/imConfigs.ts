import urlHelpers from '@/helpers/url-helpers/urlHelpers';

const imConfigs = {
  localStorageKeys: {
    userInfo: 'im:user-data',
  },

  servicesBaseURL: {
    userService: urlHelpers.getEviromentURL(),
  },
};

export default imConfigs;
