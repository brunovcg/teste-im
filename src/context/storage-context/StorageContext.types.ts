export const storageKeys = [];

export type StorageContextProviderProps = {
  children: React.ReactNode;
};

export interface Keyable {
  [key: string]: unknown;
}

export type StorageTypes = {
  setLocalStorageItem: (key: string, entry: unknown) => void;
  setSessionStorageItem: (key: string, entry: unknown) => void;
  getLocalStorageItem: (key: string) => Keyable;
  getSessionStorageItem: (key: string) => Keyable;
};
