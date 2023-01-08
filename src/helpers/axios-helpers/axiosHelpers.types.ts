import { AxiosRequestConfig } from 'axios';

export type AxiosArguments = {
  baseURL: string;
  url?: string;
  configs?: AxiosRequestConfig;
};
