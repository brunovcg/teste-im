/*eslint-disable*/
import axios, { AxiosResponse } from 'axios';
import { AxiosArguments } from './axiosHelpers.types';

const axiosHelpers = {
  request(options: AxiosArguments) {
    const { baseURL, url, configs } = options;

    const client = axios.create({ baseURL });

    const formatResponse = (res: AxiosResponse) => ({
      data: res.data.responseObject ?? {},
      code: res.data.responseCode,
      message: res.data.responseMessage,
    });

    client.interceptors.response.use((response): any => {
      const formatedResponse = formatResponse(response);
      if (![200, 201, 202, 204, 206].includes(formatedResponse.code)) {
        throw new Error(JSON.stringify(formatedResponse));
      }
      return formatedResponse;
    });

    const extendedConfigs = {
      ...configs,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Authorization': 'Bearer',
      },
    };

    return {
      get: () => client.get(url ?? '', extendedConfigs),
      post: (payload: unknown) => client.post(url ?? '', payload, extendedConfigs),
      delete: () => client.delete(url ?? '', extendedConfigs),
      patch: (payload: unknown) => client.patch(url ?? '', payload, extendedConfigs),
      put: (payload: unknown) => client.put(url ?? '', payload, extendedConfigs),
    };
  },
};

export default axiosHelpers;
