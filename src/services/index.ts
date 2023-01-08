import urlHelpers from '@/helpers/url-helpers/urlHelpers';

export const servicesBaseURL = { userService: urlHelpers.getEviromentURL() };

export { default as userServices } from './user-services/userServices';
