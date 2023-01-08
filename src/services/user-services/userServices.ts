import axiosHelpers from '@/helpers/axios-helpers/axiosHelpers';
import { UserLoginServicePayload } from './userServices.types';
import { servicesBaseURL } from '../';

const { request } = axiosHelpers;
const baseURL = servicesBaseURL.userService;

const userServices = {
  login(payload: UserLoginServicePayload) {
    return request({ baseURL, url: '/login' }).post(payload);
  },
};

export default userServices;
