import axiosHelpers from '@/src/helpers/http-helpers/httpHelpers';
import { UserLoginServicePayload } from './userServices.types';
import imConfigs from '@/configs/imConfigs';

const { request } = axiosHelpers;
const baseURL = imConfigs.servicesBaseURL.userService;

const userServices = {
  login(payload: UserLoginServicePayload) {
    return request({ baseURL, url: '/login', method: 'get', payload });
  },
};

export default userServices;
