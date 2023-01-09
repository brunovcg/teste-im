import { AxiosRequestConfig } from 'axios';

export type AxiosArguments = {
  baseURL: string;
  url?: string;
  method: 'get' | 'post' | 'delete' | 'put' | 'patch';
  payload?: unknown;
  configs?: AxiosRequestConfig;
};
