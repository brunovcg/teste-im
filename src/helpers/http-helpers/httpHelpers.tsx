/*eslint-disable*/
import axios, { AxiosResponse } from 'axios';
import { AxiosArguments } from './httpHelpers.types';
import imConstants from '@/constants/imContants';

const { OK, CREATED, ACCEPTED, NO_CONTENT } = imConstants.httpResponseStatus;

class RequestException {
  message;
  data;
  constructor(message: string, data: unknown) {
    this.message = message;
    this.data = data;
  }
}

const httpHelpers = {
  request(options: AxiosArguments): Promise<AxiosResponse<any, any>> {
    const { baseURL, url = '', method = 'get', payload = {}, configs } = options;

    const client = axios.create({ baseURL });

    const formatResponse = (res: AxiosResponse) => ({
      data: res.data.responseObject ?? {},
      status: res.data.responseCode,
      message: res.data.responseMessage,
    });

    client.interceptors.response.use((response): any => {
      const formatedResponse = formatResponse(response);
      if (![OK, CREATED, ACCEPTED, NO_CONTENT].includes(formatedResponse.status)) {
        throw new RequestException('Failed', formatedResponse);
      }
      return formatedResponse;
    });

    const extendedConfigs = (token = '') => ({
      ...configs,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Authorization': `Bearer ${token}`,
      },
    });

    const methods = {
      get: () => client.get(url, extendedConfigs()),
      post: () => client.post(url, payload, extendedConfigs()),
      delete: () => client.delete(url, extendedConfigs()),
      patch: () => client.patch(url, payload, extendedConfigs()),
      put: () => client.put(url, payload, extendedConfigs()),
    };

    return methods[method].call(this);
  },
};

export default httpHelpers;
